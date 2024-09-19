import React from 'react';

export const Infobox = ({ heading, description }) => {
    return (
        <div className="my-4">
            {/* Heading */}
            <h2 className="text-xl font-bold cursor-pointer group relative inline-block">
                {heading}
                {/* Description (visible on hover) */}
                <span className="absolute left-0 w-64 mt-2 invisible group-hover:visible bg-gray-200 text-black text-sm p-2 rounded shadow-lg z-10">
                    {description}
                </span>
            </h2>
        </div>
    );
};





