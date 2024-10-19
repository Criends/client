import { PropsWithChildren } from "react";

interface MainProps {
  heading?: string;
}

export default function Main({
  children,
  heading,
}: PropsWithChildren<MainProps>) {
  return (
    <main className="min-h-screen px-5 md:px-20 lg:px-32 xl:px-40">
      <h1>{heading}</h1>
      {children}
    </main>
  );
}
