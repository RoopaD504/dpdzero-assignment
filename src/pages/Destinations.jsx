import React from "react";
import HeroTabs from "../components/common/Hero/HeroTabs";
import Introduction from "../components/common/Hero/Introduction";

const tabs = [
  "Overview",
  "Attractions",
  "Practical Advice for Visiting Hampi",
  "Nearby Destinations",
  "Gallery",
];

const Destinations = () => {
  return (
    <div>
      <HeroTabs tabs={tabs} />
      <Introduction/>
    </div>
  );
};

export default Destinations;
