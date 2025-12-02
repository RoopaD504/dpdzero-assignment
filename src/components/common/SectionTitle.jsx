import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   pb-2 sm:pb-3 md:pb-4 
                   m-2 sm:m-4 md:m-6 
                   font-bold text-[#027764] text-start">
      {title}
    </h2>
  );
};

export default SectionTitle;
