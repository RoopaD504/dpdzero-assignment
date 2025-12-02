import React from "react";
import SectionTitle from "../common/SectionTitle";
import AttractionCard from "./AttractionCard";

const AttractionSection = ({ title, items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-2">
      <SectionTitle title={title} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {items.map((attraction, index) => (
          <AttractionCard
            key={index}
            image={attraction.image}
            title={attraction.title}
            description={attraction.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionSection;
