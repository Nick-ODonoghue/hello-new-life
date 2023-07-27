import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";

async function getPost(slug: string) {
  const query = groq`*[_type == "postHU" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as Post;

  console.log(post);

  return (
    <>
      <div>
        <h1>{post.title}</h1>
      </div>
    </>
  );
}
