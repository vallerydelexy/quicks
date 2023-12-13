import usePopupStore from "@/store/popUpWindow";
import { motion, AnimatePresence } from "framer-motion";
import LoadingCircle from "./loadingCircle";
import ChatWindow from "./chatWindow";
import useLoadingStore from "@/store/loadingSpinner";
import TaskListWindow from "./taskListWindow";

export default function PopUpWindow({onClose}) {
  const isOpen = usePopupStore((state) => state.isOpen);
  const isLoading = useLoadingStore((state) => state.loading);
  const currentWindowContent = usePopupStore((state) => state.content);
  const closePopup = usePopupStore((state) => state.closePopup);
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0  z-0" onClick={() => onClose()} />
          <main className="fixed right-4 bottom-20">
            <AnimatePresence>
              {isOpen && (
                <section className="rounded z-10 bg-white text-black px-auto">
                  {currentWindowContent === "chat" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <ChatWindow />
                    </motion.div>
                  )}
                  {currentWindowContent === "task" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <TaskListWindow />
                    </motion.div>
                  )}

                  {isLoading && (
                    <LoadingCircle
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center"
                      }
                      text={"Loading Chats ..."}
                    />
                  )}
                </section>
              )}
            </AnimatePresence>
          </main>
        </>
      )}
    </>
  );
}
