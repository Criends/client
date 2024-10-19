import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/contexts/auth.context";

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
      <body className="flex flex-col min-h-screen">
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
