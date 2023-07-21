import Link from "next/link";
import { client } from "../.././lib/sanity";
import { groq } from "next-sanity";

async function getPosts() {
  const query = groq`*[_type == "post"]`;
  const data = await client.fetch(query);

  return data;
}

export default async function BlogCard() {
  const data = await getPosts();
  return (
    <div>
      <div className=" mb-6">
        <h2 className=" text-4xl text-pink-600">All Posts</h2>
      </div>
      <ul className=" space-y-6">
        {data.map((post) => (
          <li key={post._id}>
            <p className=" text-xs mb-4">{post.createdAt}</p>
            <Link href={`hu-HU/post/${post.slug.current}`} prefetch>
              <article>
                <div className=" space-y-2">
                  <h2 className=" text-2xl max-w-fit border-b-2 border-pink-500">{post.title}</h2>
                  <div>
                    <p>{post.overview}</p>
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
