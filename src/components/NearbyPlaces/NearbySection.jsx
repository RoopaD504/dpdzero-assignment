import React, { useState } from "react";
import NearbyCard from "./NearbyCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nearbyData } from "../constants/nearbyConstants";
import SectionTitle from "../common/SectionTitle";

const NearbySection = ({title}) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
        <SectionTitle title={title}/>

        <div className="flex gap-3">
          <button
            disabled={disabled}
            onMouseEnter={() => setDisabled(true)}
            onMouseLeave={() => setDisabled(false)}
            className={`p-2 sm:p-3 rounded-full border text-gray-500 hover:bg-gray-100 
              ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
          </button>

          <button
            disabled={disabled}
            onMouseEnter={() => setDisabled(true)}
            onMouseLeave={() => setDisabled(false)}
            className={`p-2 sm:p-3 rounded-full border text-gray-500 hover:bg-gray-100 
              ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <FaChevronRight className="text-sm sm:text-base md:text-lg" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {nearbyData.destinations.map((place, i) => (
          <NearbyCard
            key={i}
            image={place.image}
            title={place.title}
          />
        ))}
      </div>

      <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
        <button
          disabled={disabled}
          onMouseEnter={() => setDisabled(true)}
          onMouseLeave={() => setDisabled(false)}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border text-gray-500 hover:bg-gray-100 
            ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
        >
          View All →
        </button>
      </div>

    </div>
  );
};

export default NearbySection;
