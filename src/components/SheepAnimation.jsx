import React, { useState, useRef } from "react";

const Sheep = () => {
  const [position, setPosition] = useState(0);
  const sheepRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sheepRef.current) {
      const rect = sheepRef.current.getBoundingClientRect();
      const mouseX = e.clientX;

      // Move left until mouse reaches sheep's back
      if (mouseX < rect.right) {
        setPosition((prev) => prev - 5);
      }
    }
  };

  const handleMouseLeave = () => {
    // Smoothly go back to start
    setPosition(0);
  };

  return (
    <img
      ref={sheepRef}
      src="/sheep.png"
      alt="sheep"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translateX(${position}px)`,
        transition: "transform 0.6s ease-in-out",
      }}
      className="w-32 cursor-pointer"
    />
  );
};

const SheepAnimation = () => {
  return (
    <div className=" w-full h-[400px] flex flex-col justify-center items-center gap-20">
      {/* Top sheep */}
      <Sheep />

      {/* Two sheep in the same row */}
      <div className="flex justify-center gap-20">
        <Sheep />
        <Sheep />
      </div>
    </div>
  );
};

export default SheepAnimation;
