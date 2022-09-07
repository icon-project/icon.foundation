import classNames from "classnames";
import React from "react";

interface IProps {
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({ href, children, fullWidth }: IProps) {
  return (
    <a className={classNames("button", { fullWidth })} href={href}>
      {children}
    </a>
  );
}
