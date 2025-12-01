import React from "react";
import Masonry from "react-masonry-css";
import { FaPlay } from "react-icons/fa";
import { galleryImages } from "./galleryData";

const breakpoints = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

const Gallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-teal-800 mb-6">Gallery</h2>

      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl shadow-md mb-4"
          >
            <img
              src={item.src}
              alt=""
              className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
            />

            {item.isVideo && (
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <FaPlay className="text-white text-4xl p-3 bg-black/50 rounded-full" />
              </a>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
