import React from "react";
import { IColorBlock } from "../../types";
import ColorBlock from "../ColorBlock";
import Width from "../Width";

interface IProps {
  blocks: IColorBlock[];
}

export default function BottomBlocks({ blocks }: IProps) {
  console.log(blocks);
  return (
    <div className="bottom-blocks">
      <Width>
        <div className="bottom-blocks-flex">
          {blocks.map((block) => {
            return (
              <ColorBlock
                heading={block.heading}
                text={block.description}
                url={block.url}
                icon={block.icon}
                color={block.color}
              />
            );
          })}
        </div>
      </Width>
    </div>
  );
}
