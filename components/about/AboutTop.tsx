import React from "react";
import Width from "../Width";
import Icon from "../../public/images/icon-placeholder.svg";

export default function AboutTop() {
  return (
    <div className="about-top">
      <Width>
        <div className="about-top-text">
          <h1>Building the future, today.</h1>
          <p>
            The <Icon /> ICON Foundation is not the ICON Project. The ICON
            Foundation is a public-benefit, non-profit <Icon /> organization
            that supports open development of decentralized technologies by
            providing financial support and by advising on business and
            technology development practices.
          </p>
        </div>
      </Width>
    </div>
  );
}
