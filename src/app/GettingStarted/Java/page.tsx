"use client";
import Link from "next/link";
import { Code2Icon, ArrowLeft, LightbulbIcon } from "lucide-react";

export default function JavaScriptPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-yellow-400 mb-3">
          <Code2Icon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">Learn JavaScript</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          JavaScript powers the web — from interactive websites to backend
          servers. It’s one of the most in-demand languages and essential for
          web developers. Mastering JavaScript opens up front-end, full-stack,
          and even mobile app opportunities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          🔑 Core JavaScript Concepts
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base list-disc list-inside">
          <li>Variables (let, const) & data types</li>
          <li>Functions & arrow syntax</li>
          <li>Arrays, objects & loops</li>
          <li>DOM manipulation</li>
          <li>Events, forms, and input handling</li>
          <li>Asynchronous JS: callbacks, promises, async/await</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          📘 Recommended Learning Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "JavaScript.info",
              link: "https://javascript.info/",
              desc: "Comprehensive guide covering all modern JS topics.",
            },
            {
              title: "freeCodeCamp JS Track",
              link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
              desc: "Hands-on beginner-to-advanced JavaScript practice.",
            },
            {
              title: "MDN JavaScript Docs",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              desc: "Trusted documentation and tutorials from Mozilla.",
            },
            {
              title: "Eloquent JavaScript (Book)",
              link: "https://eloquentjavascript.net/",
              desc: "A deep dive into the language with elegant examples.",
            },
          ].map((res, idx) => (
            <div
              key={idx}
              className="border border-yellow-400 bg-yellow-200 text-yellow-900 rounded-xl p-4 hover:shadow-sm transition"
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

      <section className="bg-gradient-to-br from-yellow-100 to-yellow-300 text-gray-800 border border-yellow-200 p-6 rounded-xl shadow-sm mb-16">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
          <LightbulbIcon className="w-5 h-5 text-yellow-600" />
          Beginner Tip
        </h3>
        <p className="text-sm">
          Focus on learning by building small projects like a calculator, to-do
          app, or weather widget. Use <strong>console.log</strong> often to
          debug and understand what your code is doing step-by-step.
        </p>
      </section>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </main>
  );
}
