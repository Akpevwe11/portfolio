import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiMonitor } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <FiMonitor />,
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'JavaScript (ES6+)', level: 95 },
                { name: 'HTML5 & CSS3', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'Next.js', level: 75 }
            ]
        },
        {
            title: 'Backend Development',
            icon: <FiCode />,
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'Express.js', level: 85 },
                { name: 'REST APIs', level: 90 },
                { name: 'GraphQL', level: 70 }
            ]
        },
        {
            title: 'Database & Cloud',
            icon: <FiDatabase />,
            skills: [
                { name: 'MongoDB', level: 80 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'Docker', level: 75 },
                { name: 'Redis', level: 65 }
            ]
        },
        {
            title: 'Tools & Others',
            icon: <FiTool />,
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'CI/CD', level: 75 },
                { name: 'Testing (Jest)', level: 80 },
                { name: 'Agile/Scrum', level: 85 },
                { name: 'Figma', level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        My technical skills and proficiency levels across various technologies and tools
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-category"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="category-header">
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="skills-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>Always learning and expanding my skill set with new technologies!</p>
                    <button className="btn btn-secondary">
                        View My Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 