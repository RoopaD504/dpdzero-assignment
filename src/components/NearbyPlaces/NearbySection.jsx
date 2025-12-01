import React, { useState } from "react";
import NearbyCard from "./NearbyCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nearbyData } from "../constants/nearbyConstants";

const NearbySection = () => {
     const [disabled, setDisabled] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-[#0b5345]">
          {nearbyData.sectionTitle}
        </h2>

        <div className="flex gap-3">
      <button
        disabled={disabled}
        onMouseEnter={() => setDisabled(true)}
        onMouseLeave={() => setDisabled(false)}
        className={`p-2 rounded-full border text-gray-500 hover:bg-gray-100
          ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <FaChevronLeft />
      </button>

      <button
        disabled={disabled}
        onMouseEnter={() => setDisabled(true)}
        onMouseLeave={() => setDisabled(false)}
        className={`p-2 rounded-full border text-gray-500 hover:bg-gray-100
          ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <FaChevronRight />
      </button>
    </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {nearbyData.destinations.map((place, i) => (
          <NearbyCard
            key={i}
            image={place.image}
            title={place.title}
          />
        ))}
      </div>

      <div className="mt-10">
        <button 
         disabled={disabled}
        onMouseEnter={() => setDisabled(true)}
        onMouseLeave={() => setDisabled(false)}
className={`p-2 rounded-full border text-gray-500 hover:bg-gray-100
          ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}>
          View All →
        </button>
      </div>

    </div>
  );
};

export default NearbySection;
