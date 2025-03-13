import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={link}
        className="mt-4 inline-block text-blue-700 hover:text-blue-950 font-medium"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
