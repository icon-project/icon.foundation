import React from "react";
import Width from "../Width";
import ColorBlock from "../ColorBlock";
import { IColorBlock } from "../../types";

interface IProps {
  blocks: IColorBlock[];
}

export default function HomeBlocks({ blocks }: IProps) {
  return (
    <div className="home-blocks">
      <Width>
        <div className="home-blocks-flex">
          <div className="home-blocks-flex-left">
            <ColorBlock
              heading={blocks[0].heading}
              text={blocks[0].description}
              url={blocks[0].url}
              icon={blocks[0].icon}
              color={blocks[0].color}
            />
          </div>
          <div className="home-blocks-flex-right">
            {blocks.map((block, i) => {
              if (i === 0) return;

              return (
                <ColorBlock
                  key={i}
                  heading={blocks[i].heading}
                  text={blocks[i].description}
                  url={blocks[i].url}
                  icon={blocks[i].icon}
                  color={blocks[i].color}
                />
              );
            })}
          </div>
        </div>
      </Width>
    </div>
  );
}
