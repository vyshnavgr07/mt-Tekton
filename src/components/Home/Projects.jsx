import React from "react";
import ProjectCard from "../ProjectCard";


const Projects = () => {
  // Dummy projects data
  const projects = [
    {
      id: 1,
      image: "https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png",
      title: "Paper-Pals",
      description: "Extending product life through packaging",
      href:"/toy"
    },
    {
      id: 2,
      image: "https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png",
      title: "EcoTrack",
      description: "Track and reduce your carbon footprint",
    },
    {
      id: 3,
      image: "https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png",
      title: "FoodSaver",
      description: "Smart storage system to reduce food waste",
    },
    {
      id: 4,
      image: "https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png",
      title: "GreenWheels",
      description: "Eco-friendly ride-sharing platform",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:px-8 gap-6 px-4 mt-4 ">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          href={project.href}
        />
      ))}
    </div>
  );
};

export default Projects;
