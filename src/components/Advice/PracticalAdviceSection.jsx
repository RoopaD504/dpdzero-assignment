import React from "react";
import AdviceCard from "./AdviceCard";
import { adviceData } from "../constants/adviceConstants";
import SectionTitle from "../common/SectionTitle";

const PracticalAdviceSection = ({title}) => {
  console.log(title)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        
      </h2>
      <SectionTitle title={title} />
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adviceData.cards.map((card, i) => (
          <AdviceCard
            key={i}
            icon={card.icon}
            title={card.title}
            points={card.points}
            linkText={card.linkText}
          />
        ))}
      </div>

    </div>
  );
};

export default PracticalAdviceSection;
