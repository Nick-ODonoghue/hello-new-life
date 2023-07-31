import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hello New Life.",
    template: "%s | Hello New Life",
  },
  description:
    "Discover a Joyful Journey: Join me at Hello New Life, a captivating bilingual blog, as I share inspiring stories of transformation and growth after embracing Christianity. Explore the beauty of a fresh perspective and find hope in a newfound faith. Share in my extraordinary adventure today!",
};

export default function UkLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
