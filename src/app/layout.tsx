import type { Metadata } from "next";
import { Alef as RootFont } from "next/font/google";
import "./globals.css";

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const rootFont = RootFont({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Demiya",
  description: "Official website for Demiya restaurant. Order online and check hours here!",
  keywords: ["Demiya", "Japanese Restaurant", "Japanese Curry", "Katsu", "Cupertino", "Dublin", "San Jose", "Saratoga", "Fremont"],
  icons: ["./logo.jpeg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rootFont.className}>
        <Header />      
          {children}
        <Footer />
      </body>
    </html>
  );
}
