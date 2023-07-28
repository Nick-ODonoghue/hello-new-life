import Link from "next/link";
import HeadingTypewriter from "./components/HeadingTypewriter";

export default function Home() {
  return (
    <div className=" flex flex-col gap-20 justify-center items-center min-h-screen">
      <HeadingTypewriter />
      <div className=" flex gap-8 justify-center items-center max-w-sm">
        <Link href="/en" prefetch className=" text-xl font-medium sm:text-2xl">
          Enter
        </Link>
        <div className=" text-4xl font-thin">|</div>
        <Link href="/hu" prefetch className=" text-xl font-medium sm:text-2xl">
          Lépj be
        </Link>
      </div>
    </div>
  );
}
