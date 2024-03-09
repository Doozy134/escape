import type { Metadata } from "next";
import "./globals.css";
import { JejuHallasan } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JejuHallasan.className} h-screen text-white`}>
        {children}
      </body>
    </html>
  );
}
