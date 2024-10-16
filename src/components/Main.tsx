import { PropsWithChildren } from "react";

interface MainProps {
  heading?: string;
}

export default function Main({
  children,
  heading,
}: PropsWithChildren<MainProps>) {
  return (
    <main className="min-h-screen py-5 mx-4 md:mx-40">
      <h1>{heading}</h1>
      {children}
    </main>
  );
}
