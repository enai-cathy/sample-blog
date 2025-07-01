"use client";
import { CodeIcon, BookOpenIcon, ArrowLeft, BrainIcon } from "lucide-react";
import Link from "next/link";

export default function HTMLPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-purple-400 mb-3">
          <CodeIcon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">Learn HTML</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          HTML (HyperText Markup Language) is the backbone of every website.
          It's how we structure content — from headings and paragraphs to links,
          images, and layout containers. Learning HTML is the first step toward
          building the web.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <BrainIcon className="w-6 h-6" /> Core Concepts to Know
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base list-disc list-inside">
          <li>HTML tags and elements</li>
          <li>Headings, paragraphs, and semantic structure</li>
          <li>Links, images, and multimedia</li>
          <li>Forms and input elements</li>
          <li>Divs, spans, and layout containers</li>
          <li>Meta tags and SEO-friendly structure</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <BookOpenIcon className="w-6 h-6" /> Recommended HTML Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "MDN HTML Docs",
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              desc: "The most trusted and detailed HTML documentation.",
            },
            {
              title: "freeCodeCamp – HTML",
              link: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5",
              desc: "Interactive course covering HTML and HTML5 basics.",
            },
            {
              title: "HTML Reference",
              link: "https://htmlreference.io/",
              desc: "A visual reference guide for HTML tags and use cases.",
            },
            {
              title: "W3Schools – HTML Tutorial",
              link: "https://www.w3schools.com/html/",
              desc: "Simple tutorials and live examples for every tag.",
            },
          ].map((res, idx) => (
            <div
              key={idx}
              className="border border-purple-400 bg-purple-300 text-purple-900 rounded-xl p-4 hover:shadow-sm transition"
            >
              <a
                href={res.link}
                target="_blank"
                className="font-semibold hover:underline"
              >
                {idx + 1}. {res.title}
              </a>
              <p className="text-sm mt-1">{res.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 to-purple-300 text-gray-800 border border-purple-200 p-6 rounded-xl shadow-sm mb-16">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
          <BookOpenIcon className="w-5 h-5 text-purple-700" />
          Beginner Tip
        </h3>
        <p className="text-sm">
          Focus on writing clean, semantic HTML. Use proper tags like{" "}
          <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">
            section
          </code>
          ,{" "}
          <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">
            header
          </code>
          , and{" "}
          <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">
            article
          </code>{" "}
          instead of only{" "}
          <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">
            div
          </code>
          . It improves accessibility, SEO, and future teamwork.
        </p>
      </section>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-purple-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </main>
  );
}
