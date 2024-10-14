import { PropsWithChildren } from "react";

interface SectionProps {
  reverse?: boolean;
}

export default function Section({ children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="px-40 py-20 flex gap-10 justify-center">
      {children}
    </section>
  );
}
