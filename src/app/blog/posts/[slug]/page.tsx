// app/blog/posts/[slug]/page.tsx
import { connectToDB } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const sql = connectToDB();
  const result = await sql`
    SELECT * FROM posts WHERE slug = ${slug} LIMIT 1;
  `;

  const post = result[0];

  if (!post) return notFound();

  return (
    <div className="max-w-3xl my-10 mx-auto px-4 py-12">
      <Image
        src={`${post.image}.jpg`}
        alt={post.title}
        width={400}
        height={250}
        className="rounded-lg mb-6 w-full h-auto"
      />
      <h1 className="text-4xl text-purple-800 font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.date} • {post.author}
      </p>
      <div className="prose prose-purple max-w-none whitespace-pre-wrap"
      dangerouslySetInnerHTML={{__html: post.content}}>
       
      </div>
    </div>
  );
}
