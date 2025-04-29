import React from 'react';

const photos = [
    { src: '/images/photo1.jpg', caption: 'Caption for photo 1' },
    { src: '/images/photo2.jpg', caption: 'Caption for photo 2' },
    { src: '/images/photo3.jpg', caption: 'Caption for photo 3' },
    { src: '/images/photo4.jpg', caption: 'Caption for photo 4' },
    { src: '/images/photo5.jpg', caption: 'Caption for photo 5' },
    { src: '/images/photo6.jpg', caption: 'Caption for photo 6' },
];

const PhotoGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {photos.map((photo, index) => (
                <div key={index} className="relative group">
                    <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 rounded-b-lg text-center">
                        <p className="text-sm font-semibold">{photo.caption}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;