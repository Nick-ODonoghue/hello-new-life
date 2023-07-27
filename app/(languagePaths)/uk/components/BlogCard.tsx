import { groq } from "next-sanity";
import { client } from "../../../lib/sanity";
import Link from "next/link";
import { Post } from "@/app/lib/interface";

async function getData() {
  const query = groq`*[_type == "postEN"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogCard() {
  const data = (await getData()) as Post[];
  return (
    <div>
      <div>
        <h2>All Posts</h2>
      </div>
      <ul>
        {data.map((post) => (
          <li key={post._id}>
            <p>{post.createdAt}</p>
            <Link href={`/post/en/${post.slug.current}`} prefetch>
              <article>
                <div>
                  <h2>{post.title}</h2>
                  <div>
                    <p>{post.overview}</p>
                  </div>
                </div>
              </article>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
