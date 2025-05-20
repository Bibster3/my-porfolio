import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    const projects = [
        {
            title: 'CalorieMate',
            description: 'alorieMate is a responsive web application designed for tracking nutritional intake. It features a user-friendly interface built with HTML, CSS, and JavaScript, ensuring seamless navigation and interactive functionality. Hosted on GitHub Pages, it showcases skills in frontend development, responsive design, and UI/UX principles, making it easy to monitor and manage daily calorie consumption effectively.',
            iframeUrl: 'https://bibster3.github.io/CalorieMate/', 
            githubUrl: 'https://github.com/Bibster3/CalorieMate'
        },
      /*  {
            title: 'Project 2',
            description: 'Description of Project 2',
            iframeUrl: 'https://example.com/project2', 
            githubUrl: 'https://github.com/Bibster3/project2'
        }
        //more projects to be added */
    ];

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        iframeUrl={project.iframeUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;