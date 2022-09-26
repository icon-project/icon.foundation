import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Arrow from "../public/images/arrow-top-right.svg";

interface IProps {
  heading: string;
  icon: string;
  text: string;
  url: string;
  color: "gray" | "secondary" | "primary";
}

export default function ColorBlock({
  heading,
  icon,
  text,
  url,
  color,
}: IProps) {
  const b =
    url.indexOf("build.icon.foundation") > -1 ||
    url.indexOf("build.icon.foundation/grants") > -1;

  return (
    <Link href={url}>
      <a
        target={b ? "_blank" : undefined}
        className={classNames("color-block", color)}
      >
        <span className="color-block-header">
          <img src={icon} alt={heading} />
          <h2>{heading}</h2>
          <Arrow />
        </span>
        <p>{text}</p>
      </a>
    </Link>
  );
}
