import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ExperienceItem = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold">{experience.role}</h3>
          <p className="text-primary text-lg">{experience.company}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <p className="text-slate-600 dark:text-slate-400">{experience.period}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {experience.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
          >
            <i className="fas fa-check text-primary mr-3 mt-1"></i>
            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer & Machine Learning Engineer",
      company: "Endure Robotics",
      period: "Apr 2025 - Present | Wichita, KS",
      achievements: [
        "Developed a responsive web-based control interface using Flask, HTML, CSS, and JavaScript, enabling intuitive robot navigation with dynamic waypoint selection and real-time status feedback.",
        "Designed and implemented a ROS 2 software stack integrating ORB-SLAM for robust visual SLAM, GNSS localization, and RViz visualization to enable accurate autonomous navigation in complex environments.",
        "Engineered a YOLO-powered object detection pipeline allowing the robot to classify obstacles in real time and trigger adaptive path adjustments during operation.",
        "Enabled secure remote manual control with low-latency live video streaming from onboard cameras to the base station for teleoperation and monitoring.",
        "Collaborated cross-functionally to resolve sensor fusion, ORB-SLAM performance, and ROS 2 communication issues, accelerating development and deployment cycles."
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "MassMutual",
      period: "Jan 2023 - Feb 2024 | New York, NY",
      achievements: [
        "Collaborated with architects and product owners to design star schemas for Power BI dashboards, enabling faster KPI tracking for marketing leadership decisions.",
        "Migrated legacy Informatica workflows to SQL and Apache Airflow, reducing licensing costs by 30% and improving pipeline reliability by 40% by designing efficient DAGS to manage task dependencies.",
        "Designed and implemented an ETL framework using staging tables to initially load data from source files, apply transformation logic, and load cleansed data into the Enterprise Data Warehouse (EDW) and Data Marts (DM).",
        "Leveraged AWS services, including S3 for data storage, EC2 for execution environments, and CloudWatch for monitoring and alerting of batch workloads.",
        "Designed and implemented reusable IICS (Informatica Intelligent Cloud Services) mappings and workflows to support multiple teams with cloud-based data integration needs, enhancing delivery speed, governance, and reusability of common data pipelines.",
        "Delivered one specific dashboard that analysed customer account growth and transaction anomalies post-data migration, which helped the risk team identify potential suspicious activity patterns."
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "Infosys",
      period: "Jun 2020 - Dec 2022 | United States",
      achievements: [
        "Architected and owned end-to-end ETL pipelines using Apache Airflow, Informatica PowerCenter, SQL and SSIS, transforming raw data into structured formats in enterprise data warehouses (Teradata, Vertica, Microsoft SQL Server) to enable scalable reporting and analytics.",
        "Designed idempotent, fault-tolerant workflows in Airflow with robust error handling and retry mechanisms, ensuring data consistency and reliability; reduced pipeline runtime by 83% through query optimization, efficient joins, indexing, and parallel task execution.",
        "Automated over 50% of manual ETL processes using Python and shell scripting, integrated with Jenkins CI/CD pipelines and Tivoli Scheduler, eliminating 15+ hours of weekly effort and accelerating data delivery for time-critical reports.",
        "Engineered high-performance data ingestion from AWS S3 into relational data warehouses using optimized SQL logic and partitioning strategies, reducing data latency by 30% and improving freshness for downstream Power BI dashboards.",
        "Implemented data quality checks (e.g., row count validation, null checks, referential integrity) within pipelines to proactively detect anomalies, improving data accuracy and trustworthiness for business stakeholders.",
        "Leveraged Git-based version control and DevOps practices for ETL code management, enabling collaborative development, auditability, and seamless deployment across dev, test, and production environments.",
        "Optimized complex SQL queries and warehouse performance using DBeaver, resulting in 60% faster data retrieval and reduced load on source systems through better indexing and execution plans.",
        "Automated S3 lifecycle policies using Python to enforce retention rules, reduce redundant storage, and lower cloud costs by 15%, while maintaining compliance with governance standards.",
        "Developed interactive Power BI dashboards to monitor pipeline health, track KPIs, and visualize customer trends, reducing sales team analysis time by 25% and supporting strategic decision-making.",
        "Collaborated with data architects and business stakeholders to design scalable dimensional data models and warehousing solutions aligned with business requirements, enhancing reporting capabilities.",
        "Mentored and coached junior engineers on ETL best practices, SQL optimization, and data modeling, contributing to a 20% increase in team productivity and faster onboarding."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Incline Inventions Pvt. Limited",
      period: "Apr 2019 - Sep 2019 | Hyderabad, India",
      achievements: [
        "Improved text clarity in historical documents using hybrid thresholding techniques, reducing image noise by 40% with Wiener/Sauvola filters to enhance OCR results.",
        "Boosted skeleton detection accuracy in natural images through data augmentation (rotations/flips) and threshold-based localization techniques."
      ]
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey and achievements.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;