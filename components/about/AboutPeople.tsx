import React from "react";
import Width from "../Width";
import AboutPerson from "./AboutPerson";

export default function AboutPeople() {
  return (
    <div className="about-people">
      <Width>
        <div className="about-people-flex">
          <div className="about-people-flex-left">
            <h2>Council Members</h2>
            <p>
              Council Members are the final approvers of grants delegated
              through the ICON Foundation
            </p>
          </div>
          <div className="about-people-flex-right">
            <AboutPerson
              name="Min Kim"
              role="President"
              photo="/images/min.jpg"
            />
            <AboutPerson
              name="Pascal Schmid"
              role="Vice-President"
              photo="/images/pascal.jpg"
            />
            <AboutPerson
              name="Kyoung June (KJ) Eee"
              role="Secretary"
              photo="/images/kyoung.jpg"
            />
          </div>
        </div>
      </Width>
    </div>
  );
}
