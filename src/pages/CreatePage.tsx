import React, { useState } from 'react';
import { Heart, Feather, Star, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedIcon } from '../components/AnimatedIcon';

const GeneratedPoem = ({ poem, onBack }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-lg shadow-lg p-6"
  >
    <div className="whitespace-pre-line text-gray-700 mb-6">
      {poem}
    </div>
    <div className="flex justify-between items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="text-pink-500 font-medium"
      >
        ← Write another message
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/reveal'}
        className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium"
      >
        Copy & Share Link
      </motion.button>
    </div>
  </motion.div>
);

const LoadingState = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center space-y-4"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <Loader className="w-12 h-12 text-pink-500" />
    </motion.div>
    <p className="text-gray-600 font-medium">Crafting your love poem...</p>
  </motion.div>
);

const CreatePage = () => {
  const [message, setMessage] = useState('');
  const [reward, setReward] = useState('');
  const [state, setState] = useState('input'); // 'input', 'loading', 'success'
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');

    if (!message.trim()) {
      setError('Please enter a message before generating a poem');
      return;
    }

    setState('loading');

    // Simulate API call
    setTimeout(() => {
      const poem = `Through winding roads, beneath skies so blue,
Every mile, I'll hold onto you.
With laughter dancing in the breeze,
Hearts at ease, love's gentle tease.
The journey's end—where our lips meet,
A kiss so soft, so pure, so sweet.
Happiness found, in your embrace.
Our ride to forever, our sacred place. ❤️`;
      
      setGeneratedPoem(poem);
      setState('success');
    }, 2000);
  };

  const handleReset = () => {
    setState('input');
    setMessage('');
    setReward('');
    setGeneratedPoem('');
    setError('');
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <Header isLoggedIn={true} />
      
      <main className="flex-1 container mx-auto px-4 py-12 relative">
        {/* Decorative Icons */}
        <AnimatePresence>
          {state !== 'loading' && (
            <>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2 }}
                className="absolute top-20 left-20"
              >
                <AnimatedIcon Icon={Heart} color="#4F46E5" size={32} />
              </motion.div>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4 }}
                className="absolute top-40 right-20"
              >
                <AnimatedIcon Icon={Feather} size={32} />
              </motion.div>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.6 }}
                className="absolute bottom-40 left-40"
              >
                <AnimatedIcon Icon={Star} size={32} />
              </motion.div>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.8 }}
                className="absolute bottom-20 right-40"
              >
                <AnimatedIcon Icon={Heart} size={32} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="max-w-2xl pt-10 mt-20 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-pink-500 text-3xl mb-8 text-center"
          >
            Start Your Love Message
          </motion.h1>

          <AnimatePresence mode="wait">
            {state === 'input' && (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-4 rounded-lg shadow-sm border ${error ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[200px] resize-y bg-white`}
                    placeholder="eg: I found the secret to happiness—it's a long ride with you, ending in a kiss."
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={reward}
                    onChange={(e) => setReward(e.target.value)}
                    placeholder="Enter the reward"
                    className="flex-1 p-4 rounded-lg shadow-sm border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                    type="submit"
                  >
                    Generate Poem
                  </motion.button>
                </div>
              </motion.form>
            )}

            {state === 'loading' && <LoadingState />}

            {state === 'success' && (
              <GeneratedPoem 
                poem={generatedPoem} 
                onBack={handleReset}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePage;