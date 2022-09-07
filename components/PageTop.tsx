import React from "react";
import Width from "./Width";

interface IProps {
  children?: React.ReactNode;
}

export default function PageTop({ children }: IProps) {
  return (
    <div className="page-top">
      <Width>
        <div className="page-top-text">{children}</div>
      </Width>
    </div>
  );
}
