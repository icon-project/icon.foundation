import React from "react";
import ColorBlock from "../ColorBlock";
import Width from "../Width";

export default function BottomBlocks() {
  return (
    <div className="bottom-blocks">
      <Width>
        <div className="bottom-blocks-flex">
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
