import React from "react";
import Width from "./Width";

interface IProps {
  children?: React.ReactNode;
}

export default function PageBody({ children }: IProps) {
  return (
    <div className="page-body">
      <Width>{children}</Width>
    </div>
  );
}
