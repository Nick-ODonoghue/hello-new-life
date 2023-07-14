// import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
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
    <html lang="en">
      <body className={`${inter.className} container mx-auto px-4 `}>
        <Header />
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
