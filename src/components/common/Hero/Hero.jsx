import React from "react";

export const Hero = ({ image, title, subtitle }) => {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center mt-16"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-7xl font-bold drop-shadow-lg">{title}</h1>
        <p className="mt-4 text-xl drop-shadow-lg">{subtitle}</p>
      </div>
    </section>
  );
};
