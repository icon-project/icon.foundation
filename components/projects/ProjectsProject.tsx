import React from "react";

interface IProps {
  image: string;
  children: React.ReactNode;
}

export default function ProjectsProject({ children, image }: IProps) {
  return (
    <div className="projects-project">
      <div className="projects-project-left">
        <img src={image} alt="project image" />
      </div>
      <div className="projects-project-right">{children}</div>
    </div>
  );
}
