import { PropsWithChildren } from "react";

interface SectionProps {
  reverse?: boolean;
}

export default function Section({ children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20 flex gap-10 justify-center">
      {children}
    </section>
  );
}
