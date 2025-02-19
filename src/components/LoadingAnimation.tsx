import { motion } from 'framer-motion';
import { FaDove } from 'react-icons/fa';

export const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-40">
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-pink-500 text-4xl"
      >
        <FaDove />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-1 bg-pink-400 rounded-full mt-4 max-w-xs"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="text-pink-600 mt-2"
      >
        Delivering your love letter...
      </motion.p>
    </div>
  );
};
