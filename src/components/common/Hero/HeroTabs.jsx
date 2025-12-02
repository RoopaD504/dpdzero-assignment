import React, { useState } from "react";

const HeroTabs = ({ tabs, sections }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Scroll to selected section
    sections[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10 py-3 sm:py-4 mt-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`
              text-sm sm:text-base md:text-lg font-medium px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-all
              ${activeTab === index
                ? "text-[#004D40] border-2 border-[#004D40] bg-[#004D4010]"
                : "text-black border border-transparent hover:border-gray-300"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroTabs;
