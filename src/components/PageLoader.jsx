import { motion } from "framer-motion";

const text = "INIT...";

export default function WaveLoader({ onComplete }) {
  return (
    <motion.div
      className="wave-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      onAnimationComplete={onComplete}
    >
      <div className="wave-text">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 0, opacity: 0, filter: "blur(6px)" }}
            animate={{
              y: [0, -20, 0],
              opacity: 1,
              filter: "blur(0px)"
            }}
            transition={{
              delay: i * 0.05,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
