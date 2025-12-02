import React, { useRef } from "react";
import HeroTabs from "../components/common/Hero/HeroTabs";
import Introduction from "../components/common/Hero/Introduction";
import Attractions from "./Attractions";
import NearbySection from "../components/NearbyPlaces/NearbySection";
import Gallery from "../components/Gallery/Gallery";
import PracticalAdviceSection from "../components/Advice/PracticalAdviceSection";
import { adviceData } from "../components/constants/adviceConstants";
import { nearbyData } from "../components/constants/nearbyConstants";
import { galleryTitle } from "../components/constants/galleryConstants";

const tabs = [
  "Overview",
  "Attractions",
  "Practical Advice for Visiting Hampi",
  "Nearby Destinations",
  "Gallery",
];

const Destinations = () => {
  const overviewRef = useRef(null);
  const attractionsRef = useRef(null);
  const adviceRef = useRef(null);
  const nearbyRef = useRef(null);
  const galleryRef = useRef(null);

  const sections = [
    overviewRef,
    attractionsRef,
    adviceRef,
    nearbyRef,
    galleryRef
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8">

      <HeroTabs tabs={tabs} sections={sections} />

      <section ref={overviewRef} className="mt-8">
        <Introduction />
      </section>

      <section ref={attractionsRef} className="mt-12">
        <Attractions />
      </section>

      <section ref={adviceRef} className="mt-12">
        <PracticalAdviceSection  title={adviceData.sectionTitle} />
      </section>

      <section ref={nearbyRef} className="mt-12">
        <NearbySection title={nearbyData.sectionTitle} />
      </section>

      <section ref={galleryRef} className="mt-12">
        <Gallery title={galleryTitle.sectionTitle}/>
      </section>

    </div>
  );
};

export default Destinations;
