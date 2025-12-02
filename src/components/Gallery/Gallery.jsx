import React from "react";
import Masonry from "react-masonry-css";
import { FaPlay } from "react-icons/fa";
import { galleryImages } from "./galleryData";
import SectionTitle from "../common/SectionTitle";

const breakpoints = {
  default: 3,   
  1024: 3,      
  768: 2,       
  500: 1,       
};

const Gallery = ({title}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <SectionTitle title={title}/>

      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-2 sm:gap-4"
        columnClassName="masonry-column"
      >
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl shadow-md mb-4"
          >
            <img
              src={item.src}
              alt={item.alt || "Gallery image"}
              className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
            />

            {item.isVideo && (
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <FaPlay className="text-white text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3 bg-black/50 rounded-full" />
              </a>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
