"use client";
import Link from "next/link";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const HeadingTypewriter = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      autoStart: false,
      loop: false,
      cursor: "",
    });

    typewriter.pauseFor(1500).typeString("Hello new life...").start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <>
      <Link href="https://hellonew.life">
        <h1 id="typewriter" className=" text-4xl font-semibold sm:text-5xl xl:text-6xl"></h1>
      </Link>
    </>
  );
};

export default HeadingTypewriter;
