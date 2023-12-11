"use client";
import { useState } from "react";
import { ActionIcon, InboxIcon, SearchIcon, TaskIcon } from "./icons";
import PopUpWindow from "./popUpWindow";
import usePopupStore from "@/store/popUpWindow";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [showButtons, setShowButtons] = useState(false);
  const isPopUpOpen = usePopupStore((state) => state.isOpen);
  const currentWindowContent = usePopupStore((state) => state.content);
  const openPopup = usePopupStore((state) => state.openPopup);
  const closePopup = usePopupStore((state) => state.closePopup);
  const setContent = usePopupStore((state) => state.setContent);
  function openWindow(content) {
    setContent(content);
    openPopup();
  }
  return (
    <main className="w-full">
      <section className="h-[68px]">
        <div className="bg-gray2 py-4 pl-4">
          <button className="my-auto">
            <SearchIcon />
          </button>
        </div>
      </section>
      <PopUpWindow />
      <section className="fixed bottom-4 right-4 flex gap-4 items-end">
        <AnimatePresence>
          {showButtons && (
            <motion.div
              variants={{
                default: { x: 0 },
                chat: { x: 75 },
                task: { x: 75 },
              }}
              animate={currentWindowContent}
              className={`flex z-10 ${
                currentWindowContent === "default" ? "gap-4" : "gap-8"
              }`}
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 20 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.2, delay: 0.1 },
                  },
                  exit: {
                    opacity: 0,
                    x: 20,
                    transition: { duration: 0.2, delay: 0.1 },
                  },
                  default: { opacity: 1, x: 0 },
                  chat: { opacity: 1, x: 0 },
                  task: { opacity: 1, x: 95 },
                }}
                initial="initial"
                animate={currentWindowContent}
                exit="exit"
                className="flex flex-col gap-2"
              >
                {currentWindowContent === "default" && (
                  <span className="mx-auto text-gray6 font-medium">task</span>
                )}
                <button
                  onClick={() => openWindow("task")}
                  style={{ pointerEvents: "auto" }}
                  className={`shadow-light2 h-[60px] w-[60px] rounded-full  text-white mx-auto  ${
                    currentWindowContent === "task"
                      ? "bg-yellow1 fill-white "
                      : "bg-white fill-yellow1"
                  }`}
                >
                  <TaskIcon className="mx-auto" />
                </button>
              </motion.div>

              <motion.div
                initial="initial"
                variants={{
                  initial: { opacity: 0, x: 20 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.2, delay: 0.1 },
                  },
                  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
                  default: { opacity: 1, x: 0 },
                  chat: { opacity: 1, x: 0 },
                  task: { opacity: 1, x: -95 },
                }}
                animate={currentWindowContent}
                exit="exit"
                className="flex flex-col gap-2"
              >
                {currentWindowContent === "default" && (
                  <span className="mx-auto text-[#F2F2F2] font-medium">
                    inbox
                  </span>
                )}
                <button
                  style={{ pointerEvents: "auto" }}
                  onClick={() => openWindow("chat")}
                  className={`shadow-light2 h-[60px] w-[60px] rounded-full ${
                    currentWindowContent === "chat"
                      ? "bg-purple1 fill-white"
                      : "bg-white fill-purple1"
                  }`}
                >
                  <InboxIcon className="mx-auto" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          variants={{
            default: { x: 0 },
            chat: { x: -15 },
            task: { x: -15 },
          }}
          animate={currentWindowContent}
          className={`${
            isPopUpOpen ? `h-[60px] w-[60px]` : ` h-[68px] w-[68px]`
          } 
          ${currentWindowContent === "default" ? "bg-blue1" : "bg-gray2"}
          fill-white text-center mx-auto shadow-light2 rounded-full`}
          onClick={() => {
            setShowButtons(!showButtons);

            if (isPopUpOpen) {
              openWindow("default");
              closePopup();
            }
          }}
        >
          {currentWindowContent === "default" && (
            <ActionIcon className="mx-auto" />
          )}
        </motion.button>
      </section>
    </main>
  );
}