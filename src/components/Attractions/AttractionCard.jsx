import React from "react";

const AttractionCard = ({ image, title, description }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md  bg-white cursor-pointer hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-[350px] object-cover" />

      <div className="p-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AttractionCard;
