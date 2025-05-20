import React from 'react';

const ProjectCard = ({ title, description, iframeUrl, githubUrl }) => {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="project-iframe">
                <iframe src={iframeUrl} title={title} />
            </div>
            <div className="project-links">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
};

export default ProjectCard;