import { client } from "../../lib/sanity";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }) {
  const post = await getPost(params.slug);
  return (
    <>
      <div className=" space-y-2">
        <h1 className=" text-2xl max-w-fit border-b-2 border-pink-500">{post.title}</h1>
      </div>
    </>
  );
}
