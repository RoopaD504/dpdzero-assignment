import React from "react";
import { FaCalendarAlt, FaBus, FaSuitcase, FaShoppingBag } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const iconMap = {
  calendar: FaCalendarAlt,
  bus: FaBus,
  bag: FaBagShopping,
};

const AdviceCard = ({ icon, title, points, linkText }) => {
  const IconComponent = iconMap[icon]; 

  return (
    <div className="bg-[#004d40] text-white  p-6 rounded-2xl shadow-md w-full">
      
      <div className="mb-4">
        <span className="bg-green-500 text-white p-3 rounded-full text-lg  flex items-center justify-center w-fit">
          {IconComponent && <IconComponent size={14} />}
        </span>
      </div>

      <h3 className="text-md font-semibold ">{title}</h3>

      <ul className="mb-4">
        {points.map((p, i) => (
          <li key={i} className="leading-relaxed text-xs">• {p}</li>
        ))}
      </ul>

      <p className="underline cursor-pointer">{linkText}</p>
    </div>
  );
};

export default AdviceCard;
