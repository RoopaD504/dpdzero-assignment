import React from "react";

const NearbyCard = ({ image, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md cursor-pointer 
                    transform transition duration-300 hover:scale-105 active:scale-95">

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
        />

        <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 
                      text-white text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg">
          {title}
        </p>
      </div>

    </div>
  );
};

export default NearbyCard;
