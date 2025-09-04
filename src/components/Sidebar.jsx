import React, { useState } from "react";

const Sidebar = ({ setIsmodal }) => {
  const navItems = ["seanmitdesign", "About", "Design", "Music", "Videos"];
  const [isBorderBlinks, setBorderBlinks] = useState(false);

  const handleClick = (item) => {
    if (item === "About") setIsmodal(true);
  };

  const triggerBlink = () => {
    setBorderBlinks(true);
    setTimeout(() => setBorderBlinks(false), 1000);
  };

  return (
    <div
      className={`h-screen bg-white md:w-full sm:w-14 xs:w-12 
        ${isBorderBlinks ? "border-r animate-blink" : "border-r border-r-whit"} 
        flex flex-col items-center justify-between`}
    >
      <div className="flex flex-col w-full h-full bg-whit ">
        {navItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={triggerBlink}
            onMouseLeave={triggerBlink} 
            className={`flex flex-1 items-center justify-center w-full border-t border-gray-300 
              ${index === 0 ? "bg-[#000927]" : ""}`}
          >
            <span
              onClick={() => handleClick(item)}
              className={`transform -rotate-90 cursor-pointer text-xs 
                ${index === 0 ? "text-white" : "hover:text-blue-500"}`}
            >
              {item}
            </span>
          </div>
        ))}
        <div className="border-t border-gray-300"></div>
      </div>

      <div className="border-t w-full h-14 p-1">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000"
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;

