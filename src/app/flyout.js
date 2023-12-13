import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
export default function Flyout({ actions, className, isOpen, onClose }) {
  // const closeFlyout = () => {
  //   onClose();
  // };
  return (
    <AnimatePresence>
      {isOpen && (
        <div>
          <div className="fixed inset-0  z-10" onClick={()=>onClose()} />
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -40, y: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -40, y: -40 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-20 bg-white border-1 border-gray4 m-4 left-0 ${className}`}
            onClick={()=>onClose()}
            
          >
            {actions.map((action, index) => {
              return (
                <p
                  key={index}
                  className="border-[1px] border-gray4 p-2 text-[12px]"
                >
                  {action}
                </p>
              );
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
