import { motion } from "framer-motion";

export default function LoadingCircle({ className, text }) {
  const circleVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const circleRadius = 25;

  return (
    <div className={className}>
            <motion.svg
      viewBox="0 0 61.22 61.22"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      width="61.22"
      height="61.22"
      className="mx-auto"
    >
      
      <motion.circle
        cx="30.61"
        cy="30.61"
        r={circleRadius}
        fill="transparent"
        stroke="#F8F8F8"
        strokeWidth="8.54"
        strokeDasharray="172.5"
        strokeDashoffset="0"
        strokeLinecap="round"
        variants={circleVariants}
      />

      
      <motion.circle
        cx="30.61"
        cy="30.61"
        r={circleRadius}
        fill="transparent"
        stroke="#C4C4C4"
        strokeWidth="8.54"
        strokeLinecap="round"
        strokeDasharray="86.25"
        strokeDashoffset="43.125"
        variants={circleVariants}
      />
    </motion.svg>
    <span>
      {text}
    </span>
    </div>

  );
}
