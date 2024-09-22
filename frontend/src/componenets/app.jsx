import React from 'react';

const PlantCard = ({ plant }) => {
  const { name, image, description, scientificName } = plant;

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-md p-4">
      <div className="md:w-1/3">
        <img
          className="w-full h-auto object-contain rounded-lg"
          src={image}
          alt={name}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300"; // Replace with a default image URL
          }}
        />
      </div>
      <div className="md:w-2/3 md:ml-4">
        <h2 className="text-xl font-bold text-green-700">{name}</h2>
        <p className="text-sm text-gray-500">{scientificName}</p>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-green-700">Additional Information</h3>
          <ul className="list-disc space-y-2 px-6">
            <li className="text-gray-700">
              <span className="font-bold">Height:</span> 2-3 feet
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Sunlight:</span> Partial shade
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Watering:</span> Once a week
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Bloom Time:</span> Spring/Summer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;