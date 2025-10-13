import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenQuanta",
  description: "A Next.js template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}