import BlogCard from "./components/BlogCard.jsx";
import { about } from "./data/about.js";

export default function Home() {
  return (
    <div className=" mx-auto max-w-6xl ">
      <h1>Hi I'm {about.nickName}</h1>
      <p>{about.bio}</p>

      <section className=" mt-20">
        <BlogCard />
      </section>
    </div>
  );
}
