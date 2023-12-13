import { useState, useEffect } from "react";
import axios from "axios";
import useLoadingStore from "@/store/loadingSpinner";
import { generateRandomDate, calculateDaysLeft } from "@/utils/date";

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
    <div className="w-[734px] h-[737px] flex flex-col">
      {/* select task dropdown */}
      <div className="flex justify-between">
        <select className="border-2 border-gray-300 p-4 rounded-md">
          <option value="default">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button className="bg-blue1 text-white p-4 rounded-md">New Task</button>
      </div>
      {/* task lists container */}
      <div className="flex-1  overflow-y-scroll">
        {/* task lists */}
        <div className="flex flex-col gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border-2 border-gray-300 p-4 rounded-md"
            >
              <div className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  className="  text-gray1 h-[18px] w-[18px] border-gray1 border-2 focus:ring-0 bg-white rounded"
                />
                <h1 className="text-[16px] text-gray2 font-semibold flex-grow">
                  {task.title}
                </h1>
                <p className="text-red1 whitespace-nowrap flex-shrink-0">
                  {calculateDaysLeft(task.date)} days left
                </p>
                <p>{new Date(task.date).toLocaleDateString()}</p>
              </div>

              <p>{task.completed ? "Completed" : "Incomplete"}</p>
              <p>Date: {new Date(task.date).toLocaleDateString()}</p>
              {/* Add more task details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
