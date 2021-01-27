import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-container">
      <h3 className="proj-title">{props.projectTitle}</h3>
      <p className="proj-brief">{props.projectBrief}</p>
    </div>
  );
};

export default ProjectCard;
