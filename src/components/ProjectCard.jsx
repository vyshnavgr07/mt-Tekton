import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="max-w-2xl bg-white  overflow-hidden  transform transition-transform duration-500 ease-in-out hover:scale-105 rounded-xl">
   
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </div>

 
      <div className="p-3 bg-white">
        <h3 className="text-sm  font-medium text-gray-500">{title}</h3>
        <p className="text-gray-800 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
