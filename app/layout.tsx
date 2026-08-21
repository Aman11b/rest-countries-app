import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import Header from "./components/Header";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});
export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Explore countries around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
