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
        {projects.map((project, i) => {
          return (
            <ProjectsProject
              logo_width={project.logo_width}
              key={i}
              image={project.image}
              logo={project.logo}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link href={project.url}>
                <a>
                  <Button>
                    Visit
                    <Arrow />
                  </Button>
                </a>
              </Link>
            </ProjectsProject>
          );
        })}
      </Width>
    </div>
  );
}
