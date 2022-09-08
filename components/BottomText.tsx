import React, { Children } from "react";
import Width from "./Width";

interface IProps {
  heading: string;
  text: string;
}

export default function BottomText({ heading, text }: IProps) {
  return (
    <div className="bottom-text">
      <Width>
        <div className="bottom-text-text">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </Width>
    </div>
  );
}
