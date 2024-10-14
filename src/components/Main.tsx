import { PropsWithChildren } from "react";

interface MainProps {
  heading?: string;
}

export default function Main({
  children,
  heading,
}: PropsWithChildren<MainProps>) {
  return (
    <main className="min-h-screen pt-[5rem] py-5">
      <h1>{heading}</h1>
      {children}
    </main>
  );
}
