import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiTarget, FiHeart } from 'react-icons/fi';
import './About.css';

const About = () => {
    const downloadResume = () => {
        // You can replace this with an actual resume download link
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Add your resume file to public folder
        link.download = 'YourName_Resume.pdf';
        link.click();
    };

    const features = [
        {
            icon: <FiUser />,
            title: 'Professional',
            description: 'Dedicated software engineer with a passion for clean, efficient code and user-centered design.'
        },
        {
            icon: <FiTarget />,
            title: 'Goal-Oriented',
            description: 'Focused on delivering high-quality solutions that meet business objectives and exceed expectations.'
        },
        {
            icon: <FiHeart />,
            title: 'Passionate',
            description: 'Enthusiastic about technology and committed to continuous learning and professional growth.'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know me better - my journey, passion, and what drives me in software development
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Who I Am</h3>
                        <p>
                            I'm a passionate software engineer with a strong foundation in modern web technologies
                            and a keen eye for creating intuitive user experiences. With several years of experience
                            in full-stack development, I've had the privilege of working on diverse projects that
                            have shaped my approach to problem-solving and code architecture.
                        </p>

                        <p>
                            My journey in software development began with curiosity and has evolved into a deep
                            passion for building applications that not only function flawlessly but also delight
                            users. I believe in writing clean, maintainable code and staying up-to-date with
                            the latest industry trends and best practices.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>

                        <button className="btn btn-primary" onClick={downloadResume}>
                            <FiDownload />
                            Download Resume
                        </button>
                    </motion.div>

                    <motion.div
                        className="about-features"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 