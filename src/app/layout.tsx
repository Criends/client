import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Criends",
  description: "Career friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-pretendard antialiased">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
