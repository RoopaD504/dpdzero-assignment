import React from "react";

const InfoSection = ({ title, children }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export default InfoSection;
