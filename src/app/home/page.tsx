"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 lg:px-8">
        <Image
          src="/hero-image2.jpg"
          alt="Background"
          fill
          priority
          className="absolute inset-0 object-cover opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Welcome to <span className="text-purple-500">404-FOUND!</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-300 text-lg">
            Where bugs become breakthroughs. A dev blog for the curious and the
            creative.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Read the Blog →
          </Link>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
           Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Backline",
              desc: "Football betting insights platform with dynamic data.",
              link: "/projects/backline",
            },
            {
              title: "Mint Mogul",
              desc: "A finance discovery site using APIs & affiliate content.",
              link: "/projects/mint-mogul",
            },
            {
              title: "Petal Punch",
              desc: "Premium wellness juice brand built with strategy.",
              link: "/projects/petal-punch",
            },
          ].map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2 text-purple-400">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>
              <Link
                href={proj.link}
                className="text-purple-500 hover:underline text-sm"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Callout */}
      <section className="bg-gray-950 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4"> Meet the Creator</h2>
          <p className="text-gray-400 text-lg mb-6">
            I'm Enaikato Cathy, a frontend dev and product tinkerer who pivoted
            from healthcare to code. I build ideas in public and share what I
            learn — bugs and all.
          </p>
          <Link
            href="/about"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            Read My Story →
          </Link>
        </motion.div>
      </section>

      {/* Blog CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-20 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Dive Into Real-World Dev?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Check out experiments, breakdowns, and honest lessons from someone
          building and learning in public.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-white text-purple-800 font-semibold py-3 px-6 rounded hover:bg-purple-100 transition"
        >
          Explore the Blog →
        </Link>
      </section>
    </main>
  );
}
