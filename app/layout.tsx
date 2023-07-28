import "./globals.css";
import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import Providers from "./components/Providers";

const specialElite = Special_Elite({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hello New Life",
  description:
    "Discover a Joyful Journey: Join me at Hello New Life, a captivating bilingual blog, as I share inspiring stories of transformation and growth after embracing Christianity. Explore the beauty of a fresh perspective and find hope in a newfound faith. Share in my extraordinary adventure today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${specialElite.className} container mx-auto max-w-5xl px-4 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 text-slate-700 selection:bg-pink-300 selection:text-slate-100`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
