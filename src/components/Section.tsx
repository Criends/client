import clsx from "clsx";
import { PropsWithChildren } from "react";

interface SectionProps {
  reverse?: boolean;
}

export default function Section({ children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="h-screen px-40 flex gap-10 items">{children}</section>
  );
}
