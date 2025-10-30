import AnimatedBackground from "@/components/AnimatedBackground";
import { AppSidebar } from "@/components/AppSidebar";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const halenoir = localFont({
  src: "../../public/font/HalenoirCompact-Regular.otf",
  display: "swap",
  variable: "--font-halenoir",
});

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
    <html lang="en" className={halenoir.variable}>
      <body>
        <AnimatedBackground />
       
        <div className="flex">
          <AppSidebar />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}