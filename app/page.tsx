import Image from "next/image";
import ThemeButton from "./components/ThemeButton";
import Link from "next/link";
import HeadingTypewriter from "./components/HeadingTypewriter";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center min-h-screen">
      {/* <ThemeButton /> */}
      <HeadingTypewriter />
      <div className=" flex gap-8 justify-center items-center max-w-sm">
        <Link href="/uk" className=" text-xl font-medium">
          Enter
        </Link>
        <div className=" text-4xl font-thin">|</div>
        <Link href="/hu" className=" text-xl font-medium">
          Lépj be
        </Link>
      </div>
    </div>
  );
}
