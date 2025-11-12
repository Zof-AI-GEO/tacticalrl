import Header from "@/app/_components/header";
import type { Metadata } from "next";
import { Space_Grotesk, Newsreader } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "tacticalrl Intelligence Journal",
  description:
    "Adaptive QA intelligence, AI-assisted automation playbooks, and operating models for resilient delivery teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "relative min-h-screen bg-slate-950 text-slate-100 antialiased"
        )}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-[42rem] w-[42rem] rounded-full bg-indigo-500/30 blur-[160px]" />
          <div className="absolute -right-16 top-1/3 h-[36rem] w-[36rem] rounded-full bg-purple-600/30 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[180px]" />
        </div>
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-16 sm:px-8 lg:px-12">
          <Header />
          <main className="flex-1 pt-10 md:pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
