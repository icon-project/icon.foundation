import React from "react";
import { IPerson } from "../../types";
import Width from "../Width";
import AboutPerson from "./AboutPerson";

interface IProps {
  people: IPerson[];
  heading: string;
  text: string;
}

export default function AboutPeople({ people, heading, text }: IProps) {
  return (
    <div className="about-people">
      <Width>
        <div className="about-people-heading">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="about-people-people">
          {people.map((person, i) => {
            return (
              <AboutPerson
                key={i}
                name={person.name}
                role={person.role}
                photo={person.image}
              />
            );
          })}
        </div>
      </Width>
    </div>
  );
}
