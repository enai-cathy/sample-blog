"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string
};

export default function Carousel() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/carousel")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % posts.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + posts.length) % posts.length);

  if (posts.length === 0) return <p className="text-center">Loading...</p>;
  
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <h2>{typeof posts[current].title === "string" ? posts[current].title :"No title"}
</h2>
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={`${posts[current].image}.jpg`}
          width={1000}
          height={400}
          alt={posts[current].title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />

        <div className="absolute inset-0  flex flex-col justify-end p-6 text-white">
          <div className="cursor-pointer bg-black/50 px-2 py-1 rounded-lg ">
            <h2 className="text-2xl text-purple-300 font-bold">
              {posts[current].title}
            </h2>
            <p className="text-sm">{posts[current].description}</p>
          </div>
          <a
            href={`/blog/posts/${posts[current].slug}`}
            className="mt-3 max-w-lg inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
          >
            Read More
          </a>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        ❯
      </button>
    </div>
  );
}
