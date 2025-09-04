import React, { useState, useRef, useEffect } from "react";

const Sheep = () => {
  const [position, setPosition] = useState(0);
  const [target, setTarget] = useState(null);
  const sheepRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const moveSheep = () => {
      if (sheepRef.current && target !== null) {
        const sheepRect = sheepRef.current.getBoundingClientRect();
        const sheepFront = sheepRect.left + sheepRect.width; 
        const diff = target - sheepFront;

        if (Math.abs(diff) > 2) {
        
          setPosition((prev) => prev + Math.sign(diff) * 3);
          animationFrame = requestAnimationFrame(moveSheep);
        }
      } else if (sheepRef.current && target === null) {
        
        if (position !== 0) {
          setPosition((prev) => {
            const step = prev > 0 ? -3 : 3;
            const next = prev + step;
            return Math.abs(next) < 3 ? 0 : next;
          });
          animationFrame = requestAnimationFrame(moveSheep);
        }
      }
    };

    animationFrame = requestAnimationFrame(moveSheep);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, position]);

  const handleMouseMove = (e) => {
    if (sheepRef.current) {
      setTarget(e.clientX); // follow mouse front
    }
  };

  const handleMouseLeave = () => {
    setTarget(null); // reset to original
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
      }}
      className=" w-16  md:w-32 cursor-pointer select-none"
    />
  );
};

const SheepAnimation = () => {
  return (
    <div className="w-full  md:h-[380px] flex flex-col justify-center items-center gap-20 overflow-hidden">
      <Sheep />
      <div className="flex justify-center gap-20">
        <Sheep />
        <Sheep />
      </div>
    </div>
  );
};

export default SheepAnimation;
