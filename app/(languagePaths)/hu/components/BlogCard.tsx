import { groq } from "next-sanity";
import { client } from "../../../lib/sanity";
import Link from "next/link";
import { Post } from "@/app/lib/interface";

async function getData() {
  const query = groq`*[_type == "postHU"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogCard() {
  const data = (await getData()) as Post[];

  return (
    <div className=" mt-10">
      <div className=" mb-10">
        <h2 className=" text-4xl font-semibold sm:text-5xl xl:text-6xl">All Posts...</h2>
      </div>
      <ul className=" space-y-10">
        {data.map((post) => (
          <li key={post._id}>
            <p className=" text-xs font-semibold xl:text-sm">{post.createdAt}</p>
            <Link href={`/hu/post/${post.slug.current}`} prefetch>
              <article className=" max-w-2xl border border-slate-500 rounded-md bg-[#e788b9] shadow-md hover:shadow-none transition-shadow duration-500">
                <div className=" space-y-2 m-2">
                  <div>
                    <h2 className=" text-lg font-black border-b border-b-pink-200 inline-block xl:text-xl">
                      {post.title}
                    </h2>
                  </div>
                  <div>
                    <p className=" line-clamp-2 xl:text-lg">{post.overview}</p>
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
