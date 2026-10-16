import type { Metadata } from "next";
import "../src/styles/index.css";
import { SmoothScroll } from "../src/app/components/SmoothScroll";

export const metadata: Metadata = {
  title: "NativeTalk",
  description: "Powering communications across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="nt-app">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
