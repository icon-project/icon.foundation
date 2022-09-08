import classNames from "classnames";
import React from "react";

interface IProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({ children, fullWidth }: IProps) {
  return (
    <span className={classNames("button", { fullWidth })}>{children}</span>
  );
}
