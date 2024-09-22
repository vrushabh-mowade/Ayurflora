import React, { useState } from 'react';
import Canvas3D from './Canvas';
import { BookmarkIcon, ShareIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

export const Plantpage = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const navigate = useNavigate();

    const handleBookmark = () => {
        setIsBookmarked((prev) => !prev);
        alert(isBookmarked ? 'Bookmarked removed!' : 'Bookmarked!');
    };

    const handleShare = () => {
        navigate('/share'); // Navigate to the SharePage
    };

    return (
        <div className="bg-cream-100 min-h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-start max-w-[90%] mx-auto p-12 bg-white shadow-lg rounded-lg relative">
                {/* 3D Canvas on the left */}
                <div className="w-full lg:w-2/5 h-auto">
                    <Canvas3D />
                </div>
                
                {/* Plant details on the right */}
                <div className="lg:ml-10 w-full lg:w-3/5 h-auto pt-10 relative">
                    {/* Bookmark and Share buttons in the top-right corner */}
                    <div className="absolute top-0 right-0 flex space-x-3 mt-2 mr-2">
                        <button onClick={handleBookmark} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                            <BookmarkIcon className="h-6 w-6 text-gray-600" />
                        </button>
                        <button onClick={handleShare} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                            <ShareIcon className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-800 mb-6">Aloe Vera</h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Aloe Vera is a succulent plant species of the genus Aloe. It grows wild in tropical, semi-tropical, 
                        and arid climates around the world and is cultivated for agricultural and medicinal uses.
                    </p>
                    <ul className="text-gray-700 mb-6 space-y-3">
                        <li><strong>Botanical Name:</strong> Aloe barbadensis miller</li>
                        <li><strong>Family:</strong> Asphodelaceae</li>
                        <li><strong>Common Name:</strong> Aloe vera</li>
                        <li><strong>Sun Exposure:</strong> Full sun to partial shade</li>
                        <li><strong>Water Needs:</strong> Low, drought-tolerant</li>
                        <li><strong>Soil Type:</strong> Sandy, well-drained</li>
                        <li><strong>Height:</strong> 12 to 24 inches</li>
                    </ul>

                    <button className="bg-green-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-600 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plantpage;
