import React, { useState } from "react";
import { Maximize2, X } from "lucide-react"; // icons

const FullscreenImage = ({ src, alt = "Image", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg w-[600px] max-w-full cursor-pointer"
      />

      {/* View (expand) icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
      >
        <Maximize2 size={20} />
      </button>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default FullscreenImage;
