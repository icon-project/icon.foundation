import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function Width({ children }: IProps) {
  return <div className="width">{children}</div>;
}
