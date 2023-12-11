import { useRef } from "react";
import usePopupStore from "@/store/popUpWindow";
import { motion, AnimatePresence } from "framer-motion";
import LoadingCircle from "./loadingCircle";

export default function PopUpWindow() {
  const isOpen = usePopupStore((state) => state.isOpen);
  const currentWindowContent = usePopupStore((state) => state.content);
  const closePopup = usePopupStore((state) => state.closePopup);
  const windowRef = useRef(null);
  const closePopUpWindow = (event) => {
    if (windowRef.current && !windowRef.current.contains(event.target)) {
      closePopup();
    }
  };

  
  return (
    <>
      {isOpen && (
        <main onClick={closePopUpWindow}>
          <AnimatePresence>
            {isOpen && (
              <motion.section
                ref={windowRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.1 }}
                className="fixed bottom-[5.5em] rounded z-10 right-4 w-[734px] h-[737px] bg-white text-black"
              >
                {currentWindowContent}
                
                <LoadingCircle className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center"} text={"Loading Chats ..."} />
                
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      )}
    </>
  );
}
