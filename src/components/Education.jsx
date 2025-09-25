import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EducationCard = ({ education, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
      <p className="text-primary mb-2">{education.school}</p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{education.period}</p>
      <p className="text-slate-700 dark:text-slate-300 mb-4">Relevant Coursework:</p>
      <div className="flex flex-wrap gap-2">
        {education.courses.map((course, i) => (
          <motion.span
            key={i}
            className={`px-3 py-1 rounded-full text-sm ${
              education.color === 'blue'
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
                : 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            {course}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationData = [
    {
      degree: "Master's in Computer Science",
      school: "Wichita State University",
      period: "Dec 2022 - Dec 2024",
      courses: [
        "Advance Algorithm Analysis on Graphs",
        "Perspectives on Data Science",
        "DataBase Management Systems",
        "Power BI",
        "Machine Learning",
        "Web Programming",
        "Reinforcement Learning"
      ],
      color: 'blue'
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "RVR & JC College Of Engineering",
      period: "Jun 2016 - Sep 2020",
      courses: [
        "C",
        "Image Processing",
        "Operating Systems",
        "Machine Learning",
        "Software Engineering",
        "Java",
        "Data Structures and Algorithms",
        "DBMS"
      ],
      color: 'green'
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic background and relevant coursework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;