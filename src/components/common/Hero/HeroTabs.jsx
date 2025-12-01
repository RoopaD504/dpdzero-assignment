import React, { useState } from "react";

const HeroTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex justify-center gap-10 py-4  mt-1">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-lg font-medium px-2 py-1 rounded-full transition-all
                ${
                  isActive
                    ? "text-[#004D40] border-2 border-[#004D40]"
                    : "text-black"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTabs;
