import { about } from "./data/about.js";

export default function Home() {
  return (
    <main className=" mx-auto max-w-6xl ">
      <h1>Hi I'm {about.nickName}</h1>
      <p>{about.bio}</p>
    </main>
  );
}
