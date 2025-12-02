import React from "react";
import { attractionsData } from "../components/constants/attractionsConstants";
import AttractionSection from "../components/Attractions/AttractionSection";

const Attractions = () => {
  return (
    <div className="bg-[#f5f1e6] min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <AttractionSection
        title={attractionsData.title}
        items={attractionsData.items}
      />
    </div>
  );
};

export default Attractions;
