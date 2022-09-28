import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface IProps {
  photo: string;
  name: string;
  role: string;
}

export default function AboutPerson({ name, photo, role }: IProps) {
  return (
    <div className="about-person">
      <div className="about-person-flex">
        <div className="about-person-image">
          <img src={photo} alt={name} />
        </div>
        <div className="about-person-text">
          <h3>{name}</h3>
          <h4>{role}</h4>
        </div>
      </div>
    </div>
  );
}
