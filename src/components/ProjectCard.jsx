import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, description,href }) => {
  const navigate=useNavigate()
  return (
    <div 
    onClick={()=>navigate(href)}
    className="
    max-w-2xl bg-white  overflow-hidden  transform transition-transform duration-500 ease-in-out hover:scale-105">
   
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
