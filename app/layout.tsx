import type { Metadata } from "next";
import "./globals.css";
import "@/styles/sections.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "George Githii",
  description: "A tribute to George Githii",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
