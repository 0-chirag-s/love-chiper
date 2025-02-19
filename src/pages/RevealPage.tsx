import { useState } from 'react';
import { LoadingAnimation } from '../components/LoadingAnimation';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { useEffect } from 'react';
import { Heart, Feather, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SuccessAnimation from '../components/SuccessAnimation';


const FailureAnimation = ({ message, reward }: {
  message: string,
  reward: string
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center space-y-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-pink-500 text-3xl font-serif"
    >
      Love Decoder Jammed!
    </motion.h2>
    <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
      <p className="whitespace-pre-line text-gray-700">{message}</p>
    </div>
    <div className="text-gray-600">
      <p>REWARD: {reward}</p>
      <p className="mt-4">Keep trying—love's mysteries are worth it!</p>
    </div>
  </motion.div>
);

const RevealPage = () => {
  const [state, setState] = useState('loading');
  
  const poem = `Through winding roads, beneath skies so blue,
Every mile, I'll hold onto you.
With laughter dancing in the breeze,
Hearts at ease, love's gentle tease.
The journey's end—where our lips meet,
A kiss so soft, so pure, so sweet.
Happiness found, in your embrace.
Our ride to forever, our sacred place. ❤️`;

  useEffect(() => {
    setTimeout(() => {
      setState('decode');
    }, 2000);
  }, []);

  const handleSuccess = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 1500);
  };

  const handleFailure = () => {
    setState('loading');
    setTimeout(() => {
      setState('failure');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20 min-h-screen">
        {/* Floating Icons */}
        <AnimatedIcon Icon={Heart} className="absolute top-20 left-20" />
        <AnimatedIcon Icon={Feather} className="absolute top-40 right-20" />
        <AnimatedIcon Icon={Star} className="absolute bottom-40 left-20" />
        <AnimatedIcon Icon={Heart} className="absolute bottom-20 right-20" />

        <AnimatePresence mode="wait">
          {state === 'loading' && <LoadingAnimation />}
          
          {state === 'success' && <SuccessAnimation name="TEDDY" />}
          
          {state === 'failure' && (
            <FailureAnimation 
              message={poem}
              reward="***"
            />
          )}
          
          {state === 'decode' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <h2 className="text-pink-500 text-3xl font-serif text-center">
                Decode the Message
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="whitespace-pre-line text-gray-700">{poem}</p>
              </div>
              <p className="text-gray-600">REWARD: ***</p>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSuccess}
                  className="w-full bg-green-500 text-white py-3 rounded-md font-medium mb-4"
                >
                  Show Success Animation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFailure}
                  className="w-full bg-pink-500 text-white py-3 rounded-md font-medium"
                >
                  Show Failure Animation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevealPage;