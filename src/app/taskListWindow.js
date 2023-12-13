import { useState, useEffect } from "react";
import axios from "axios";
import useLoadingStore from "@/store/loadingSpinner";
import { generateRandomDate, calculateDaysLeft } from "@/utils/date";
import Select from "./select";

export default function TaskListWindow() {
  const [tasks, setTasks] = useState([]);
  const isLoading = useLoadingStore((state) => state.loading);
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        // Update tasks with random dates
        const tasksWithDates = response.data.map((task) => ({
          ...task,
          date: generateRandomDate(),
        }));

        setTasks(tasksWithDates);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setLoading]);

  return (
    <div className="w-[734px] h-[737px] flex flex-col pt-2 pb-8 px-4">
      {/* select task dropdown */}
      <div className="flex justify-between pb-2">
        <Select options={["To Do", "Personal Errands"]} className={""} />
        <button className="bg-blue-500 text-white px-4 rounded-md h-[40px] items-center justify-center">
          New Task
        </button>
      </div>
      {/* task lists container */}
      <div className="flex-1  overflow-y-scroll">
        {/* task lists */}
        <div className="flex flex-col gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border-2 border-gray-300 p-4 rounded-md flex flex-col"
            >
              <div className="flex flex-row">
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    className="mr-4 text-gray1 h-[18px] w-[18px] border-gray1 border-2 focus:ring-0 bg-white rounded"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-row gap-2">
                    <h1 className="text-[16px] text-gray2 font-semibold flex-grow">
                      {task.title}
                    </h1>
                    <p className="text-red1 whitespace-nowrap flex-shrink-0">
                      {calculateDaysLeft(task.date)} days left
                    </p>
                    <p>{new Date(task.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <input
                      type="date"
                      defaultValue={
                        new Date(task.date).toISOString().split("T")[0]
                      }
                    />
                    <p>
                      {task.id} {task.completed ? "Completed" : "Incomplete"}{" "}
                      {task.title} {task.completed ? "Completed" : "Incomplete"}{" "}
                      {new Date(task.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
