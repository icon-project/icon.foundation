import React from "react";
import Width from "../Width";
import ColorBlock from "../ColorBlock";
import { IColorBlock } from "../../types";

interface IProps {
  blocks: IColorBlock[];
}

export default function HomeBlocks({ blocks }: IProps) {
  const firstBlock = blocks.shift();

  return (
    <div className="home-blocks">
      <Width>
        <div className="home-blocks-flex">
          <div className="home-blocks-flex-left">
            {firstBlock && (
              <ColorBlock
                heading={firstBlock.heading}
                text={firstBlock.description}
                url={firstBlock.url}
                icon={firstBlock.icon}
                color={firstBlock.color}
              />
            )}
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
