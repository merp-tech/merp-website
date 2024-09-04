import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merp",
  description: "Manufacturing made easy",
};

const avenir = localFont({
  src: [
    {
      path: "../public/fonts/AvenirNext-UltraLight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/AvenirNext-Regular.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/AvenirNext-Medium.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/AvenirNext-DemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/AvenirNext-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
