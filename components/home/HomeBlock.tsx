import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface IProps {
  heading: string;
  icon: string;
  text: string;
  url: string;
  color: "gray" | "secondary" | "primary";
}

export default function HomeBlock({ heading, icon, text, url, color }: IProps) {
  return (
    <Link href={url}>
      <a className={classNames("home-block", color)}>
        <span className="home-block-header">
          <img src={icon} alt={heading} />
          <h2>{heading}</h2>
        </span>
        <p>{text}</p>
      </a>
    </Link>
  );
}
