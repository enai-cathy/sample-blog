"use client";
import Link from "next/link";
import {
  BriefcaseIcon,
  ArrowLeft,
  LightbulbIcon,
  BookOpenCheckIcon,
  Brain,
} from "lucide-react";

export default function Business() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-purple-400 mb-3">
          <BriefcaseIcon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">
            Learn Business & Strategy
          </h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          Whether you&apos;re launching a startup, freelancing as a developer,
          or building digital products — business strategy is essential. Learn
          how to define customer value, validate ideas, price your services, and
          think like a builder.
        </p>
      </section>

      <section className="mb-12">
        <h2 className=" flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <Brain className="w-6 h-6" /> Core Business Concepts for Developers
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base list-disc list-inside">
          <li>Value proposition & user psychology</li>
          <li>Lean startup & MVP validation</li>
          <li>Customer journey mapping</li>
          <li>Positioning, branding, and storytelling</li>
          <li>Pricing strategy & monetization</li>
          <li>Business models (B2B, SaaS, Creator)</li>
          <li>Freelance & consulting frameworks</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className=" flex items-center gap-3 text-2xl font-semibold text-purple-400 mb-4">
          <BookOpenCheckIcon className="w-6 h-6" /> Recommended Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "Y Combinator Startup Library",
              link: "https://www.ycombinator.com/library",
              desc: "Free guides and videos on launching and scaling startups.",
            },
            {
              name: "Value Proposition Design",
              link: "https://www.strategyzer.com/books/value-proposition-design",
              desc: "Master how to design products people want.",
            },
            {
              name: "Product Strategy Playbooks",
              link: "https://www.notion.so/Product-Playbooks-5fdfcc9f4e1e46b487d7a663ff998fa5",
              desc: "Curated Notion guides for product thinking.",
            },
            {
              name: "The Mom Test (Book)",
              link: "https://momtestbook.com/",
              desc: "Learn how to talk to users and validate ideas without bias.",
            },
            {
              name: "Indie Hackers",
              link: "https://www.indiehackers.com/",
              desc: "Community and interviews for bootstrapped entrepreneurs.",
            },
            {
              name: "Pricing Freelance Projects",
              link: "https://doubleyourfreelancing.com/",
              desc: "Tips on pricing and selling yourself as a developer.",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-purple-300 text-purple-900 p-4 rounded-xl shadow-sm"
            >
              <a
                href={r.link}
                target="_blank"
                className="font-semibold hover:underline"
              >
                {r.name}
              </a>
              <p className="text-sm mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          🛠 Starter Skills for Beginners
        </h2>
        <div className="bg-purple-100 p-6 rounded-xl text-gray-800 shadow-sm grid gap-3 text-sm sm:text-base">
          <p>
            If you&apos;re just getting started, focus on learning these first:
          </p>
          <ul className="list-disc list-inside">
            <li>What makes a good product (product-market fit)</li>
            <li>How to define your audience and niche</li>
            <li>Basic UX principles and how people use software</li>
            <li>Freemium vs paid models</li>
            <li>How to write clear, value-driven landing pages</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 to-purple-500 border border-purple-200 p-6 rounded-xl shadow-sm mb-16">
        <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center gap-2">
          <LightbulbIcon className="w-5 h-5" />
          Pro Tip
        </h3>
        <p className="text-sm text-gray-700">
          Many developers build products no one wants. Business thinking helps
          you avoid that. Before writing code, validate the *problem*, talk to
          users, and test demand — even with a simple landing page or form.
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
