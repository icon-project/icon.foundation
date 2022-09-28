import classNames from "classnames";
import React from "react";

interface IProps {
  children: React.ReactNode;
  wide?: boolean;
}

export default function Width({ children, wide }: IProps) {
  return <div className={classNames("width", { wide })}>{children}</div>;
}
