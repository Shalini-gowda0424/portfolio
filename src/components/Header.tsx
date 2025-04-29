import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md doodle-header">
            <h1 className="text-2xl font-handwritten">[Your Name]</h1>
            <nav className="space-x-4">
                <Link href="/" className="text-lg doodle-link">Home</Link>
                <Link href="/about" className="text-lg doodle-link">About Me</Link>
                <Link href="/projects" className="text-lg doodle-link">Projects</Link>
                <Link href="/tips" className="text-lg doodle-link">Troubleshooting & Tips</Link>
                <Link href="/suggestion-box" className="text-lg doodle-link">Suggestion Box</Link>
                <Link href="/hobbies" className="text-lg doodle-link">Hobbies</Link>
            </nav>
        </header>
    );
};

export default Header;