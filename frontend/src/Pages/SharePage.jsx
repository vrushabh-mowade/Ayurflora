import React from 'react';

export const SharePage = () => {
    const shareLink = 'https://localhost:5176/aloe-vera'; // Replace with your actual share link

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink);
        alert('Share link copied to clipboard: ' + shareLink);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cream-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Share This Plant</h2>
                <p className="mb-6 text-gray-700">Copy the link below to share this plant:</p>
                <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <button 
                    onClick={handleCopyLink} 
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                    Copy Link
                </button>
            </div>
        </div>
    );
};

// export default SharePage;
