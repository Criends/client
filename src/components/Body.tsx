import React, { PropsWithChildren } from "react";

interface BodyProps {
  content?: string;
}

export default function Body({ children }: PropsWithChildren<BodyProps>) {
  return <div className="mx-4 md:mx-40">{children}</div>;
}
