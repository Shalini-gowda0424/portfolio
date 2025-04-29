import React from 'react';
import PhotoGrid from '../../components/PhotoGrid'; 

const Hobbies: React.FC = () => {
    return (
        <div className="hobbies-page">
            <header className="text-center my-10">
                <h1 className="text-4xl font-handwritten">My Hobbies</h1>
                <p className="text-lg mt-4">A glimpse into what I love to do in my free time!</p>
            </header>
            <PhotoGrid />
        </div>
    );
};

export default Hobbies;