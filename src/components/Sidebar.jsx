import React from "react";

const Sidebar = ({setIsmodal}) => {
  const navItems = ["seanmitdesign", "About", "Design", "Music", "Videos"];

  const handleClick = (item) => {
    console.log(item, "----");
    if (item === "About") {
      setIsmodal(true); 
    }
  };

  return (
    <div className="  h-screen bg-white w-16 border-r flex flex-col items-center justify-between z-50 ">

  <div className="flex flex-col w-full h-full bg-white  ">
  {navItems.map((item, index) => (
    <div
      key={index}
      className={`flex flex-1 items-center justify-center w-full border-t border-gray-300 
        ${index === 0 ? "bg-[#000927]" : ""}`}
    >
      <span
       onClick={() => handleClick(item)} 
        className={`text-xs transform -rotate-90 cursor-pointer 
          ${index === 0 ? "text-white" : "hover:text-blue-500"}`}
      >
        {item}
      </span>
    </div>
  ))}
  {/* Bottom border */}
  <div className="border-t border-gray-300"></div>
</div>



      {/* Profile Image */}

<div className=" border-t w-full h-14 p-1  ">
<img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
</div>



    </div>
  );
};

export default Sidebar;
