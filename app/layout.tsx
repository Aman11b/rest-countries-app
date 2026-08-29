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
  title: {
    default: "Where in the World?",
    template: "%s | Where in the World?",
  },
  description:
    "Explore countries around the world. Search countries, filter by region, and discover detailed country information.",
  keywords: [
    "countries",
    "country information",
    "world countries",
    "country explorer",
    "REST Countries",
  ],
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
