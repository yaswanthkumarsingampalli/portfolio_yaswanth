// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: 'Wichita, KS' },
    { icon: 'fa-phone', text: '+1-316-376-6775' },
    { icon: 'fa-envelope', text: 'yaswanthkumarsingampalli77@gmail.com' }
  ];

  // Social Links
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yaswanthkumarsingampalli/',
      icon: 'fab fa-github',
      ariaLabel: 'GitHub'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yaswanth-kumar-singampalli/',
      icon: 'fab fa-linkedin-in',
      ariaLabel: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Yaswanth Kumar Singampalli</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Microsoft-Certified Senior Data Engineer & Software Developer passionate about transforming data into actionable insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white"
                  aria-label={link.ariaLabel}
                  whileHover={{ scale: 1.2, y: -2 }} // Added hover effect
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </motion.a>
              ))}
              {/* Email link remains the same */}
              <motion.a
                href="mailto:yaswanthkumarsingampalli77@gmail.com"
                className="text-slate-300 hover:text-white"
                aria-label="Email"
                whileHover={{ scale: 1.2, y: -2 }} // Added hover effect
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-envelope text-xl"></i>
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }} // Added subtle hover effect
                >
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  <i className={`fas ${info.icon} mr-2`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Yaswanth Kumar Singampalli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;