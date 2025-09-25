import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill, percentage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress bg-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, period, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-primary">{company}</p>
      <p className="text-slate-600 dark:text-slate-400">{period}</p>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const experiences = [
    {
      title: "Software Developer & Machine Learning Engineer",
      company: "Endure Robotics",
      period: "Apr 2025 - Present | Wichita, KS",
      description: "Developing responsive web-based control interfaces and ROS 2 software stacks for autonomous navigation systems."
    },
    {
      title: "Senior Data Engineer",
      company: "MassMutual",
      period: "Jan 2023 - Feb 2024 | New York, NY",
      description: "Migrated legacy Informatica workflows to SQL and Apache Airflow, reducing licensing costs by 30% and improving pipeline reliability by 40%."
    },
    {
      title: "Senior Data Engineer",
      company: "Infosys",
      period: "Jun 2020 - Dec 2022 | United States",
      description: "Architected end-to-end ETL pipelines using Apache Airflow, Informatica PowerCenter, and SQL for enterprise data warehouses."
    },
        {
      title: "Software Developer",
      company: "Incline Inventions Pvt. Limited",
      period: "Apr 2019 - Sep 2019 | Hyderabad",
      description: "Developed machine learning algorithms achieving over 95% accuracy in text classification and skeleton detection, enabling precise differentiation between humans and animals."
    }
  ];

  const skills = [
    { name: "Python", percentage: 95 },
    { name: "SQL", percentage: 90 },
    { name: "ETL/Data Warehousing", percentage: 90 },
    { name: "Power BI", percentage: 85 },
    { name: "AWS/Azure", percentage: 80 },
    { name: "Apache Airflow", percentage: 75 }
  ];

  const certifications = [
    "Cloud Data Integration (IICS)",
    "Microsoft SSIS Developer",
    "Python Associate",
    "Machine Learning",
    "Power BI",
    "Data Science",
    "DataBase Management"
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Microsoft-certified Senior Data Engineer with 4+ years of experience designing and optimizing scalable data pipelines and ETL workflows to enhance business and marketing decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-8 relative">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
            ))}

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;