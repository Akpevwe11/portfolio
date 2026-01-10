import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
            image: '/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            category: 'fullstack',
            liveUrl: 'https://project1.com',
            githubUrl: 'https://github.com/yourusername/project1',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/project2.jpg',
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            category: 'frontend',
            liveUrl: 'https://project2.com',
            githubUrl: 'https://github.com/yourusername/project2',
            featured: true
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.',
            image: '/project3.jpg',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
            category: 'frontend',
            liveUrl: 'https://project3.com',
            githubUrl: 'https://github.com/yourusername/project3',
            featured: false
        },
        {
            id: 4,
            title: 'REST API Service',
            description: 'A scalable REST API service built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
            image: '/project4.jpg',
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
            category: 'backend',
            liveUrl: 'https://project4.com',
            githubUrl: 'https://github.com/yourusername/project4',
            featured: false
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Framer Motion, showcasing projects and skills with smooth animations.',
            image: '/project5.jpg',
            technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
            category: 'frontend',
            liveUrl: 'https://project5.com',
            githubUrl: 'https://github.com/yourusername/project5',
            featured: false
        },
        {
            id: 6,
            title: 'Data Analytics Dashboard',
            description: 'An interactive dashboard for data visualization and analytics, built with React and D3.js for comprehensive data insights.',
            image: '/project6.jpg',
            technologies: ['React', 'D3.js', 'Python', 'Pandas', 'Flask'],
            category: 'fullstack',
            liveUrl: 'https://project6.com',
            githubUrl: 'https://github.com/yourusername/project6',
            featured: false
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A showcase of my recent work and projects that demonstrate my skills and creativity
                    </p>
                </motion.div>

                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <span>📱</span>
                                </div>
                                {project.featured && (
                                    <div className="featured-badge">Featured</div>
                                )}
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FiEye />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FiGithub />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>Interested in working together? Let's discuss your project!</p>
                    <button className="btn btn-primary">
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 