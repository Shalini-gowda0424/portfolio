import React from 'react';

interface TipCardProps {
    title: string;
    content: string;
    tags: string[];
}

const TipCard: React.FC<TipCardProps> = ({ title, content, tags }) => {
    return (
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-handwritten text-xl mb-2">{title}</h3>
            <p className="text-gray-700 mb-2">{content}</p>
            <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-pastel-green text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TipCard;