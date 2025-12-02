import React from "react";

export const Hero = ({ image, title, subtitle }) => {
  return (
    <section
      className="
        relative w-full 
        h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] 
        flex items-center justify-center 
        mt-16
      "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1
          className="
            font-bold drop-shadow-lg
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-3 md:mt-4 
            text-base sm:text-lg md:text-xl lg:text-2xl 
            drop-shadow-lg
          "
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};
