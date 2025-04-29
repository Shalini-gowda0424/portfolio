import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-center py-4 border-t border-gray-300">
            <div className="container mx-auto">
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://linkedin.com/in/[your-linkedin]" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        LinkedIn
                    </a>
                    <a href="mailto:[your-email@example.com]" className="text-gray-600 hover:text-gray-800">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;