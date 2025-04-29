import React from 'react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    challenges?: string; // Optional if not used in the component
    solutions?: string;  // Optional if not used in the component
    link?: string;       // Optional if not provided
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, techStack, imageUrl, link } = project;
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 border border-dashed border-gray-300 transition-transform transform hover:scale-105">
            <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
            <h3 className="font-handwritten text-xl mt-2">{title}</h3>
            <p className="text-gray-700 mt-1">{description}</p>
            <div className="mt-2">
                <span className="font-semibold">Tech Stack:</span>
                <ul className="list-disc list-inside">
                    {techStack.map((tech, index) => (
                        <li key={index} className="text-gray-600">{tech}</li>
                    ))}
                </ul>
            </div>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors">
                    View Project
                </a>
            )}
        </div>
    );
};

export default ProjectCard;