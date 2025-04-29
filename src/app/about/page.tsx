import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-4xl font-handwritten mb-4">About Me</h1>
            <p className="text-lg mb-4">
                Hi, I&apos;m [Your Name], a passionate DevOps Engineer with a knack for automating processes and optimizing workflows. 
                I have experience in cloud technologies, CI/CD pipelines, and infrastructure as code.
            </p>
            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
            <ul className="list-disc list-inside mb-4">
                <li>DevOps Engineer at Company A (Year - Present)</li>
                <li>Systems Administrator at Company B (Year - Year)</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <ul className="list-disc list-inside mb-4">
                <li>AWS, Azure, GCP</li>
                <li>Docker, Kubernetes</li>
                <li>Terraform, Ansible</li>
                <li>CI/CD with GitHub Actions, Jenkins</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">Certifications</h2>
            <ul className="list-disc list-inside mb-4">
                <li>AWS Certified Solutions Architect</li>
                <li>Certified Kubernetes Administrator</li>
            </ul>
            <a href="/path/to/your/cv.pdf" className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
                Download CV
            </a>
            <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
            <form className="flex flex-col w-full max-w-md">
                <input type="text" placeholder="Your Name" className="border p-2 mb-2" required />
                <input type="email" placeholder="Your Email" className="border p-2 mb-2" required />
                <textarea placeholder="Your Message" className="border p-2 mb-2" required></textarea>
                <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default About;