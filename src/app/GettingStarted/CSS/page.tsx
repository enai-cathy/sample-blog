"use client";
import Link from "next/link";
import {
  ArrowLeft,
  PaintbrushIcon,
  SparklesIcon,
  LightbulbIcon,
  BookOpenCheckIcon,
  Brain,
} from "lucide-react";

export default function CSSPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-purple-400 mb-3">
          <PaintbrushIcon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">Learn CSS</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          CSS (Cascading Style Sheets) is what makes the web beautiful.
          It&apos;s responsible for layout, colors, responsiveness, animations,
          and overall UI. Learning CSS gives you control over how your app or
          site looks and feels — and is a must-have for any frontend dev.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <SparklesIcon className="w-6 h-6" /> What You’ll Use CSS For
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base list-disc list-inside">
          <li>Customizing layout, fonts, and colors</li>
          <li>Making websites responsive across devices</li>
          <li>Building animations and transitions</li>
          <li>Creating dark/light themes and modern UIs</li>
          <li>Using frameworks like Tailwind, Bootstrap</li>
          <li>Handling design tokens and accessibility</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <BookOpenCheckIcon className="w-6 h-6" />
          Recommended CSS Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "CSS Tricks Almanac",
              link: "https://css-tricks.com/almanac/",
              desc: "Comprehensive CSS reference and practical guides.",
            },
            {
              name: "MDN CSS Docs",
              link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              desc: "Official and trusted documentation for all CSS rules.",
            },
            {
              name: "Frontend Masters - CSS Grid & Flexbox",
              link: "https://frontendmasters.com/courses/css-grid-flexbox-v2/",
              desc: "Deep dive into layout systems with interactive lessons.",
            },
            {
              name: "Tailwind CSS Docs",
              link: "https://tailwindcss.com/docs",
              desc: "Utility-first CSS framework for rapid design.",
            },
            {
              name: "YouTube - Kevin Powell",
              link: "https://www.youtube.com/c/KevinPowell",
              desc: "Popular CSS teacher with step-by-step video tutorials.",
            },
            {
              name: "CSSBattle.dev",
              link: "https://cssbattle.dev",
              desc: "Fun CSS challenges to sharpen your skills through play.",
            },
          ].map((res, i) => (
            <div
              key={i}
              className="bg-purple-300 text-purple-900 p-4 rounded-xl shadow-sm"
            >
              <a
                href={res.link}
                target="_blank"
                className="font-semibold hover:underline"
              >
                {res.name}
              </a>
              <p className="text-sm mt-1">{res.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <Brain className="w-6 h-6" /> CSS Starter Tips for Beginners
        </h2>
        <div className="bg-purple-100 p-6 rounded-xl text-gray-800 shadow-sm grid gap-3 text-sm sm:text-base">
          <p>New to CSS? Here&apos;s how to start:</p>
          <ul className="list-disc list-inside">
            <li>Start with Flexbox and Grid layout systems</li>
            <li>Practice by cloning simple websites</li>
            <li>Use browser dev tools to inspect styles</li>
            <li>Learn how the cascade and specificity work</li>
            <li>Try Tailwind CSS for faster styling workflows</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 to-purple-500 border border-purple-200 p-6 rounded-xl shadow-sm mb-16">
        <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center gap-2">
          <LightbulbIcon className="w-5 h-5" />
          Pro Tip
        </h3>
        <p className="text-sm text-gray-700">
          Struggling with layouts? Focus on mastering <b>Flexbox</b> first, then
          dive into <b>CSS Grid</b>. Also, try building a simple responsive
          portfolio page — it’s the fastest way to learn layout, colors, and
          typography together.
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
