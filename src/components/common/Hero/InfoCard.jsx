import React from "react";

const InfoCard = ({ label, value }) => {
  return (
    <div className="border-2 border-[#004D40] p-4 rounded-lg bg-gray-50 
                    w-full sm:w-auto flex-1 
                    flex flex-col justify-between ">
      <div>
        <p className="text-[#004D40] font-semibold text-sm sm:text-base">{label}</p>
        <p className="text-[#004D40] font-bold text-lg sm:text-xl mt-1">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
