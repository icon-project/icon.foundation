import React from "react";
import Button from "../Button";
import Arrow from "../../public/images/arrow-top-right.svg";
import Link from "next/link";
import ProjectsProject from "./ProjectsProject";
import Width from "../Width";

export default function ProjectsProjects() {
  return (
    <div className="projects-projects">
      <Width>
        <ProjectsProject image="/images/project-placeholder.jpg">
          <h2>Blockchain Transmission Protocol (BTP)</h2>
          <p>
            Blockchain Transmission Protocol is a general purpose,
            blockchain-agnostic protocol for sending messages across independent
            blockchain.
          </p>
          <Link href="/">
            <Button>
              Visit
              <Arrow />
            </Button>
          </Link>
        </ProjectsProject>
        <ProjectsProject image="/images/project-placeholder.jpg">
          <h2>Blockchain Transmission Protocol (BTP)</h2>
          <p>
            Blockchain Transmission Protocol is a general purpose,
            blockchain-agnostic protocol for sending messages across independent
            blockchain.
          </p>
          <Link href="/">
            <Button>
              Visit
              <Arrow />
            </Button>
          </Link>
        </ProjectsProject>
        <ProjectsProject image="/images/project-placeholder.jpg">
          <h2>Blockchain Transmission Protocol (BTP)</h2>
          <p>
            Blockchain Transmission Protocol is a general purpose,
            blockchain-agnostic protocol for sending messages across independent
            blockchain.
          </p>
          <Link href="/">
            <Button>
              Visit
              <Arrow />
            </Button>
          </Link>
        </ProjectsProject>
      </Width>
    </div>
  );
}
