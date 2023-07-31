import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getPost(slug: string) {
  const query = groq`*[_type == "postEN" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: (await getPost(params.slug)).title,
    description: (await getPost(params.slug)).overview,
  };
}

export async function generateStaticParams() {
  const query = groq`*[_type == "postEN"]{slug}`;
  const data = await client.fetch(query);
  return data.map((post: { slug: string }) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
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
      <div className=" mt-10">
        <h1 className=" text-xl font-extrabold md:text-2xl xl:text-3xl">{post.title}</h1>
      </div>
      <div className=" space-y-6 my-10 px-2 py-4 prose prose-h2:text-2xl max-w-6xl border border-slate-500 rounded-md bg-[#e788b9] shadow-md sm:p-4 md:p-6 lg:p8">
        <PortableText value={post.content} components={myPortableTextComponent} />
      </div>
    </>
  );
}
