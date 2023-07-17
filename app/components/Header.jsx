import Link from "next/link";
import { header } from "../data/header.js";
import ThemeButton from "./ThemeButton.jsx";

export default function Header() {
  return (
    <header className=" py-6">
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-2xl">{header.title}</h1>
        </Link>
        <ThemeButton />
      </nav>
    </header>
  );
}
