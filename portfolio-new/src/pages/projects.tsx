import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        techStack: ['Docker', 'Kubernetes', 'Azure'],
        challenges: 'Challenges faced during the project.',
        solutions: 'Solutions implemented to overcome challenges.',
        imageUrl: '/images/project-one.png',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        techStack: ['Terraform', 'AWS', 'GitHub Actions'],
        challenges: 'Challenges faced during the project.',
        solutions: 'Solutions implemented to overcome challenges.',
        imageUrl: '/images/project-two.png',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-handwritten mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;