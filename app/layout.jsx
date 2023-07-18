// import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Providers from "./components/Providers";
import { about } from "./data/about.js";
import { metaData } from "./data/meta.js";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${metaData.siteTitle} | ${metaData.siteAuthor}`,
  description: `${metaData.siteDescription}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} container mx-auto px-4 bg-slate-100 text-black/90 selection:bg-pink-600 selection:text-slate-200 dark:bg-black/80 dark:text-slate-200 dark:selection:text-black/80 `}
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
