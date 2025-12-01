import React from "react";
import InfoSection from "./InfoSection";
import InfoCard from "./InfoCard";
import { introductionData } from "../../constants/introductionConstants";

const Introduction = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h2 className="text-4xl font-bold mb-4">
        {introductionData.sectionTitles.introduction}
      </h2>

      <p className="mb-4 text-xl leading-relaxed">{introductionData.introText}</p>

      <InfoSection title={introductionData.sectionTitles.didYouKnow} >
        <ul className="text-xl">
          {introductionData.didYouKnow.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.placesToVisit}>
        <ul className="text-xl">
          {introductionData.placesToVisit.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.thingsToDo}>
        <ul className="text-xl">
          {introductionData.thingsToDo.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.howToReach}>
        <ul className="text-xl">
          {introductionData.howToReach.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.whereToStay}>
        <ul className="text-xl">
          {introductionData.whereToStay.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title={introductionData.sectionTitles.tips}>
        <ul className="text-xl">
          {introductionData.tips.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <h3 className="text-lg font-semibold mt-6">
        {introductionData.bottomTitle}
      </h3>
      <p>{introductionData.bottomButton}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-md">
        {introductionData.infoCards.map((card, i) => (
          <InfoCard key={i} label={card.label} value={card.value} />
        ))}
      </div>

    </div>
  );
};

export default Introduction;
