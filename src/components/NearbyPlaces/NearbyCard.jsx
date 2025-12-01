import React from "react";

const NearbyCard = ({ image, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition transform duration-300">

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover"
        />

        <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
          {title}
        </p>
      </div>

    </div>
  );
};

export default NearbyCard;
