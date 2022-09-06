import React from "react";

interface IProps {
  photo: string;
  name: string;
  role: string;
}

export default function AboutPerson({ name, photo, role }: IProps) {
  return (
    <div className="about-person">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <h4>{role}</h4>
    </div>
  );
}
