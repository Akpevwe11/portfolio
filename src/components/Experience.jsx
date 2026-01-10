import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Parkway Projects Nigeria Limited.',
            location: 'Lagos, Nigeria',
            period: 'October 2022 - October 2025',
            description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
            achievements: [
                'Led a team of 5 developers in building a customer portal that increased user engagement by 40%',
                'Implemented CI/CD pipeline that reduced deployment time by 60%',
                'Optimized database queries resulting in 30% improvement in application performance'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
            companyUrl: 'https://parkwayprojects.ng/'
        },
        {
            id: 2,
            title: 'Learning Facilitator',
            company: 'Tech4Dev',
            location: 'Lagos, Nigeria', // Kept from your template; update if different
            period: 'February 2023 - December 2023', // Kept from your template; update if different
            description: 'Facilitated intensive four-hour daily coding classes for absolute beginners on Microsoft Teams. Responsible for delivering curriculum, mentoring students, and contributing to the instructional design of the program.',
            achievements: [
                'Taught comprehensive programming modules covering HTML, CSS, JavaScript, TypeScript, React, and React Native.',
                'Designed and administered weekly assessments on Fridays to evaluate participant progress.',
                'Authored weekly facilitator reports to track class performance and engagement.',
                'Mentored absolute beginners on effective learning strategies for computer programming.',
                'Collaborated on instructional design and the creation of tailored learning paths for participants.'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Microsoft Teams'],
            companyUrl: 'https://tech4dev.com' // Updated placeholder to match the company name likely implied
        },
        {
            id: 3,
            title: 'Learning Facilitator',
            company: 'SheCodeAfrica',
            location: 'Lagos, Nigeria',
            period: 'Nov 2024 - Mar 2025',
            description: 'Facilitated backend engineering cohorts, guiding participants through server-side programming concepts, API architecture, and database management.',
            achievements: [
                'Mentored participants on building scalable and secure RESTful APIs using Node.js and Express.js',
                'Guided students through database integration, authentication flows (JWT), and middleware implementation',
                'Reviewed code and provided feedback to optimize backend logic and error handling'
            ],
            technologies: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs', 'MongoDB'],
            companyUrl: 'https://shecodeafrica.org'
        },
        {
            id: 4,
            title: 'Software Engineer',
            company: 'Turing',
            location: 'California, USA',
            period: 'Nov 2024 - Present',
            description: 'At Turing, I was involved in cutting-edge AI projects focused on enhancing the reasoning capabilities of large language models, supporting LLM training and data annotation. My work combines software engineering, evaluation, and structured workflow data collection to improve AI system performance.',
            achievements: [
                'Providing human-in-the-loop feedback to improve the reasoning capabilities of large language models via supervised fine-tuning and reinforcement learning through human feedback',
                'Assisted in Python and Java workflow fine-tuning',
                'Collaborated with globally distributed teams following best practices'
            ],
            technologies: ['Python', 'Java', 'LLM', 'Machine Learning', 'Data Annotation', 'Supervised Fine-tuning', 'RLHF'],
            companyUrl: 'https://www.turing.com'
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey and the valuable experience I've gained along the way
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <div className="experience-title-section">
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <div className="company-info">
                                            <a
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="company-name"
                                            >
                                                {exp.company}
                                                <FiExternalLink />
                                            </a>
                                            <div className="experience-meta">
                                                <span className="experience-period">
                                                    <FiCalendar />
                                                    {exp.period}
                                                </span>
                                                <span className="experience-location">
                                                    <FiMapPin />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="experience-description">{exp.description}</p>

                                <div className="experience-achievements">
                                    <h4>Key Achievements:</h4>
                                    <ul>
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="experience-technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-stack">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-item">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="experience-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>Looking for new opportunities to grow and make an impact!</p>
                    <button className="btn btn-primary">
                        Download Resume
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 