import { header } from "../data/header.js";

export default function Header() {
  return (
    <header className=" py-6">
      <h1 className=" text-2xl">{header.title}</h1>
    </header>
  );
}
