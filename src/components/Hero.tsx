import React, { useState, useEffect } from 'react';
import { motion, easeOut, easeInOut } from 'framer-motion';

const Hero: React.FC = () => {
  const firstLine = "Transforming Financial Services";
  const toggleWords = ["AI", "Decision Automation"];
  const [toggleIndex, setToggleIndex] = useState(0);

  // Toggle between AI and Decision Automation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setToggleIndex((prev) => (prev + 1) % toggleWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  // Background slider images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // change image every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
  <span>{firstLine}</span>
  <br />
  <motion.span
    key={toggleIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8, ease: easeOut }}
    className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500"
    aria-live="polite"
  >
    {toggleWords[toggleIndex]}
  </motion.span>
</h1>

<motion.p
  variants={itemVariants}
  className="max-w-full sm:max-w-2xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed px-4"
>
  SCLinfotech Pvt Ltd delivers cutting-edge technology solutions and comprehensive services
  to finance companies, helping them streamline operations and achieve sustainable growth.
</motion.p>



          
        </motion.div>

      </motion.div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 90, 0], y: [0, -90, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-56 h-56 bg-teal-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -90, 0], y: [0, 90, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-amber-400/7 rounded-full blur-2xl"
        />
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
  animate={{ y: [0, 15, 0], opacity: [1, 0.7, 1] }}
  transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
  className="absolute bottom-20 left-1/18 transform -translate-x-12/9 z-10"
>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll Down"
          className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-teal-500 bg-white/10 hover:bg-teal-600/30 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-teal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
