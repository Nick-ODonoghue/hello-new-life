import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getPost(slug: string) {
  const query = groq`*[_type == "postHU" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as Post;

  const myPortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <Image
            src={urlFor(value.asset._ref).url()}
            alt={value.alt}
            className=" rounded-xl"
            width={360}
            height={360}
          />
        );
      },
    },
  };

  return (
    <>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div className=" space-y-6 prose">
        <PortableText value={post.content} components={myPortableTextComponent} />
      </div>
    </>
  );
}
