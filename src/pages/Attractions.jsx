import React from "react";
import { attractionsData } from "../components/constants/attractionsConstants";
import AttractionSection from "../components/Attractions/AttractionSection";

const Attractions = () => {
  return (
    <div className="bg-[#f5f1e6] min-h-screen py-10">
      <AttractionSection
        title={attractionsData.title}
        items={attractionsData.items}
      />
       
    </div>
  );
};

export default Attractions;
