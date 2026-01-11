import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const imagePath = `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}images/essi.png`;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hi, I'm <span className="highlight">Essi Akpevwe Praise</span>
                        </motion.h1>

                        <motion.h2
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Software Engineer
                        </motion.h2>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            I build exceptional digital experiences that combine elegant design with powerful functionality.
                            Passionate about creating innovative solutions that make a difference.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection('projects')}
                            >
                                View My Work
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="hero-avatar">
                            <img
                                src={imagePath}
                                alt="Essi Akpevwe Praise"
                                className="hero-avatar-image"
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a href="https://github.com/Akpevwe11" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/essi-akpevwe-praise-6b4b13293" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FiLinkedin />
                    </a>
                    <a href="mailto:essiakpevwe@gmail.com" className="social-link">
                        <FiMail />
                    </a>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <button
                        className="scroll-btn"
                        onClick={() => scrollToSection('about')}
                        aria-label="Scroll to about section"
                    >
                        <FiArrowDown />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 