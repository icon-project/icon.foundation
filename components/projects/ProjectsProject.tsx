import React from "react";

interface IProps {
  image: string;
  logo: string;
  logo_width: number;
  children: React.ReactNode;
}

export default function ProjectsProject({
  children,
  image,
  logo,
  logo_width,
}: IProps) {
  return (
    <div className="projects-project">
      <div className="projects-project-left">
        <img src={image} alt="project image" />
        <div className="projects-project-logo">
          <img style={{ width: logo_width }} src={logo} alt="project logo" />
        </div>
      </div>
      <div className="projects-project-right">{children}</div>
    </div>
  );
}
