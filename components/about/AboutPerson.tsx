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
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <h4>{role}</h4>
      </AnimationOnScroll>
    </div>
  );
}
