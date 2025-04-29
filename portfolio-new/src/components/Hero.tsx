import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-teal-200 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hand-drawn-background.png')] bg-cover opacity-30"></div>
            <h1 className="text-5xl font-handwritten text-center z-10">
                Hi, I&apos;m [Your Name], a DevOps Engineer.
            </h1>
            <nav className="mt-4 z-10">
                <ul className="flex space-x-6">
                    <li><a href="#projects" className="text-lg font-bold underline">Projects</a></li>
                    <li><a href="#articles" className="text-lg font-bold underline">Articles</a></li>
                    <li><a href="#hobbies" className="text-lg font-bold underline">Hobbies</a></li>
                    <li><a href="#contact" className="text-lg font-bold underline">Contact</a></li>
                </ul>
            </nav>
            <div className="hand-drawn-elements">
                {/* Add hand-drawn elements like clouds, sticky notes, etc. */}
            </div>
        </section>
    );
};

export default Hero;