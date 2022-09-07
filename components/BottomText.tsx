import React, { Children } from "react";
import Width from "./Width";

interface IProps {}

export default function BottomText({}: IProps) {
  return (
    <div className="bottom-text">
      <Width>
        <div className="bottom-text-text">
          {" "}
          <h2>We are invested in Creativity and Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectut faciant aligna magna lorem
            ipsum dolor sit amet consectut faciant aligna magna.
          </p>
        </div>
      </Width>
    </div>
  );
}
