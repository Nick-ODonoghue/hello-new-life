// import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Providers from "./components/Providers";
import { about } from "./data/about.js";
import { metaData } from "./data/meta.js";
import "./globals.css";
import { Raleway, Merriweather, Lobster } from "next/font/google";

const railway = Raleway({ subsets: ["latin"], style: ["italic", "normal"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: `${metaData.siteTitle} | ${metaData.siteAuthor}`,
  description: `${metaData.siteDescription}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lobster.className} container mx-auto max-w-5xl px-4 bg-slate-100 text-black/90 selection:bg-pink-600 selection:text-slate-200 dark:bg-black/80 dark:text-slate-200 dark:selection:text-black/80 `}
      >
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
