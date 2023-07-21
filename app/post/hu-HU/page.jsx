import BlogCard from "./components/BlogCard.jsx";
import { about } from "../post/hu-HU/data/about.js";

export default function Home() {
  return (
    <div className=" mx-auto max-w-3xl ">
      <div className=" mt-10 space-y-6">
        <h1 className=" text-2xl">Hi I'm {about.nickName}</h1>
        <p className=" text-lg">{about.bio}</p>
      </div>

      <section className=" mt-20">
        <BlogCard />
      </section>
    </div>
  );
}
