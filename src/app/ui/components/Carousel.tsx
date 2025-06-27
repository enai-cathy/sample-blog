"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
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
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={`${posts[current].image}.jpg`}
          width={100}
          height={400}
          alt={posts[current].title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl text-purple-700 font-bold">{posts[current].title}</h2>
          <p className="text-sm">{posts[current].description}</p>
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
