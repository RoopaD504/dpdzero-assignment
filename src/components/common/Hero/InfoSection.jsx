import React from "react";

const InfoSection = ({ title, children }) => {
  return (
    <div className="mt-6 px-4 sm:px-6 md:px-0">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
        {title}
      </h3>
      <div className="space-y-1 sm:space-y-2 md:space-y-3">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
