import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <title>Italian Dynamism</title>
        <meta name="description" content="Italy has always been full of creative builders, we need to put the spotlight on them for the next generations." />
      </head>
      <body className={inter.className + " dark"}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
