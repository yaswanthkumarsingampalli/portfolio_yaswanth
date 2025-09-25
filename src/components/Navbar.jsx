// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-primary">YK</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
                whileHover={{ y: -2 }} // Added hover effect
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
            <motion.a
              href="/Yaswanth_Kumar_Singampalli_DE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }} // Added hover effect
              whileTap={{ scale: 0.95 }} // Added tap effect
            >
              Resume
            </motion.a>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;