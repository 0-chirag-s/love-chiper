import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import confetti from 'canvas-confetti';
import { Heart, Gift, Stars, Sparkles } from 'lucide-react';

const SuccessAnimation = ({ name = "TEDDY" }) => {
  // Lottie animation data for gift box
  const giftAnimation = {
    v: "5.7.1",
    fr: 30,
    ip: 0,
    op: 60,
    w: 512,
    h: 512,
    assets: [],
    layers: [{
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Gift Box",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 30, s: [360] }] },
        p: { a: 0, k: [256, 256] },
        a: { a: 0, k: [0, 0] },
        s: { a: 1, k: [{ t: 0, s: [0] }, { t: 30, s: [100] }] }
      },
      shapes: [{
        ty: "gr",
        it: [{
          ty: "rc",
          d: 1,
          s: { a: 0, k: [100, 100] },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 10 }
        }, {
          ty: "fl",
          c: { a: 0, k: [1, 0.647, 0] }
        }]
      }]
    }]
  };

  const triggerConfetti = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['star'],
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ['star']
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ['circle']
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  useEffect(() => {
    triggerConfetti();
    const interval = setInterval(triggerConfetti, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Sparkles size={24} className="text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="relative w-64 h-64 mx-auto">
            <Lottie 
              animationData={giftAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4"
        >
          Congratulations!
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-pink-600"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {name}
          </motion.h2>
          
          <p className="text-gray-700 text-lg mb-6">
            You've unlocked something special! 🎉
          </p>

          <div className="flex justify-center space-x-4">
            {['💝', '✨', '🎁', '💫'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full font-semibold shadow-lg"
          onClick={() => triggerConfetti()}
        >
          Celebrate Again! 🎉
        </motion.button>
      </motion.div>

      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          <Heart 
            size={32} 
            className="text-pink-400 fill-pink-400 opacity-75" 
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SuccessAnimation;