import React from 'react';
import TipCard from '../components/TipCard';

const tipsData = [
    {
        title: "How I fixed AKS Ingress issues",
        content: "A brief overview of the steps I took to troubleshoot and resolve Ingress issues in Azure Kubernetes Service.",
        tags: ["#Azure", "#Kubernetes", "#DevOps"]
    },
    {
        title: "Best practices for Terraform modules",
        content: "Key practices to follow when creating reusable Terraform modules for better maintainability and scalability.",
        tags: ["#Terraform", "#InfrastructureAsCode"]
    },
    // Add more tips as needed
];

const TipsPage: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Troubleshooting & Tips</h1>
            <div className="flex">
                <aside className="w-1/4 pr-4">
                    <h2 className="text-xl font-semibold mb-2">Quick Look</h2>
                    <ul className="list-disc pl-5">
                        {tipsData.map((tip, index) => (
                            <li key={index} className="mb-2">
                                <a href={`#tip-${index}`} className="text-blue-500 hover:underline">{tip.title}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="w-3/4">
                    {tipsData.map((tip, index) => (
                        <TipCard key={index} title={tip.title} content={tip.content} tags={tip.tags} />
                    ))}
                </main>
            </div>
        </div>
    );
};

export default TipsPage;