import React from "react";
import Width from "../Width";

export default function HomeTop({ heading }: { heading: string }) {
  return (
    <div className="home-top">
      <Width>
        <h1>{heading}</h1>
      </Width>
    </div>
  );
}
