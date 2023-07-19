import { PortableText } from "@portabletext/react";
import { client } from "../../lib/sanity";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }) {
  const post = await getPost(params.slug);

  const myPortableTextComponent = {
    types: {
      image: ({ value }) => {
        return <Image src={urlFor(value.asset._ref).url()} alt={value.alt} width={540} height={360} />;
      },
    },
  };

  return (
    <>
      <div className=" mb-6">
        <h1 className=" text-2xl max-w-fit border-b-2 border-pink-500">{post.title}</h1>
      </div>
      <div className=" space-y-6 prose prose-headings:text-pink-600 prose-img:rounded-2xl dark:prose-invert">
        <PortableText value={post.content} components={myPortableTextComponent} />
      </div>
    </>
  );
}
