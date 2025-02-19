import { motion } from 'framer-motion';

// Define props interface
export const AnimatedIcon = ({ 
  Icon,
  color = "#ec4899",
  size = 24,
  className = "",
  animate = true,
  hover = true,
  initialDelay = 0
}: any) => {
  const baseVariants = {
    initial: { 
      opacity: animate ? 0 : 1, 
      scale: animate ? 0.8 : 1,
      y: animate ? 10 : 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: initialDelay,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    whileHover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    whileTap: { 
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  } : {};

  return (
    <motion.div
      variants={baseVariants}
      initial="initial"
      animate="animate"
      {...hoverVariants}
      className={`inline-block ${className}`}
    >
      <Icon 
        size={size} 
        color={color}
        className="transition-colors duration-200"
      />
    </motion.div>
  );
};

export default AnimatedIcon;

