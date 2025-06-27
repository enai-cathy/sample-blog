// app/blog/page.tsx
import { connectToDB, getPosts } from "@/app/lib/data";
// import { posts } from "@/app/lib/placeholder-data";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const client = await connectToDB;
  const posts = await getPosts();

  return (
    <>
      <main className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 md:px-12 lg:px-24">
        {/* {(await client()) && (
          <p className=" text-green-500"> Connected to database</p>
        )} */}
        <h1 className="text-3xl font-bold text-center mb-12 text-purple-800">
          Latest Blog Posts
        </h1>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col"
            >
              <Image
                src={`${post.image}.jpg`}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-48"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.description}</p>

              <div className="mt-auto flex justify-between items-center">
                <p className="text-xs text-gray-400">by {post.author}</p>
                <Link
                  href={`/blog/posts/${post.slug}`}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
