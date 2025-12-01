import React from "react";

const InfoCard = ({ label, value }) => {
  return (
    <div className="border-2 border-[#004D40] p-4  rounded-lg bg-gray-50 w-full">
      <p className="text-[#004D40]  font-semibold text-sm">{label}</p>
      <p className="text-[#004D40] font-bold text-lg">{value}</p>
    </div>
  );
};

export default InfoCard;
