import React from "react";
import InfoSection from "./InfoSection";
import InfoCard from "./InfoCard";
import { introductionData } from "../../constants/introductionConstants";

const Introduction = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {introductionData.sectionTitles.introduction}
      </h2>

      <p className="mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
        {introductionData.introText}
      </p>

      <InfoSection title={introductionData.sectionTitles.didYouKnow}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.didYouKnow.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.placesToVisit}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.placesToVisit.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.thingsToDo}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.thingsToDo.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.howToReach}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.howToReach.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.whereToStay}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.whereToStay.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.tips}>
        <ul className="text-base sm:text-lg md:text-xl space-y-1 sm:space-y-2 md:space-y-3">
          {introductionData.tips.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-6">
        {introductionData.bottomTitle}
      </h3>
      <p className="text-base sm:text-lg md:text-xl">{introductionData.bottomButton}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
        {introductionData.infoCards.map((card, i) => (
          <InfoCard key={i} label={card.label} value={card.value} />
        ))}
      </div>

    </div>
  );
};

export default Introduction;
