import React from "react";
import Width from "../Width";
import ColorBlock from "../ColorBlock";

interface IProps {}

export default function HomeBlocks({}: IProps) {
  return (
    <div className="home-blocks">
      <Width>
        <div className="home-blocks-flex">
          <div className="home-blocks-flex-left">
            <ColorBlock
              heading="About us"
              text="Learn more about Icon"
              url="/about"
              icon="/images/about.svg"
              color="gray"
            />
          </div>
          <div className="home-blocks-flex-right">
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
        </div>
      </Width>
    </div>
  );
}
