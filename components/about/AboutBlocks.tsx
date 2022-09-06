import React from "react";
import ColorBlock from "../ColorBlock";
import Width from "../Width";

export default function AboutBlocks() {
  return (
    <div className="about-blocks">
      <Width>
        <div className="about-blocks-flex">
          <ColorBlock
            heading="Build"
            text="Learn more about Icon"
            url="/about"
            icon="/images/build.svg"
            color="primary"
          />
          <ColorBlock
            heading="Grants"
            text="Learn more about Icon"
            url="/about"
            icon="/images/grants.svg"
            color="secondary"
          />
        </div>
      </Width>
    </div>
  );
}
