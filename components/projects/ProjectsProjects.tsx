import React from "react";
import Button from "../Button";
import Arrow from "../../public/images/arrow-top-right.svg";
import Link from "next/link";
import ProjectsProject from "./ProjectsProject";
import Width from "../Width";
import { IProject } from "../../types";

interface IProps {
  projects: IProject[];
}

export default function ProjectsProjects({ projects }: IProps) {
  return (
    <div className="projects-projects">
      <Width>
        {projects.map((project) => {
          return (
            <ProjectsProject image={project.image}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link href={project.url}>
                <Button>
                  Visit
                  <Arrow />
                </Button>
              </Link>
            </ProjectsProject>
          );
        })}
      </Width>
    </div>
  );
}
