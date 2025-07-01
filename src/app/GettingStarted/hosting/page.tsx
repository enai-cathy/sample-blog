"use client";
import Link from "next/link";
import { ArrowLeft, GlobeIcon, ServerIcon,LightbulbIcon,InfoIcon } from "lucide-react";

export default function HostingPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-purple-400 mb-3">
          <GlobeIcon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hosting & Deployment
          </h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          Great projects deserve a great launch. Whether you&apos;re shipping a
          blog, SaaS app, or full-stack platform, hosting & deployment are key.
          This guide helps you choose the right platform and tools for speed,
          scalability, and ease.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <LightbulbIcon className="w-6 h-6" /> Key Concepts to Understand
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base list-disc list-inside">
          <li>Static vs dynamic hosting</li>
          <li>CDNs, caching & performance</li>
          <li>Serverless functions</li>
          <li>Continuous deployment (CI/CD)</li>
          <li>Domains & DNS setup</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-400 mb-4">
          <ServerIcon className="w-6 h-6" /> Top 10 Hosting Platforms
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "Vercel",
              link: "https://vercel.com/",
              desc: "Best for Next.js apps, fast, serverless, and developer-friendly.",
            },
            {
              name: "Netlify",
              link: "https://netlify.com/",
              desc: "Perfect for static sites and JAMstack apps with CI/CD built-in.",
            },
            {
              name: "Render",
              link: "https://render.com/",
              desc: "Easy full-stack deployments with a generous free tier.",
            },
            {
              name: "Railway",
              link: "https://railway.app/",
              desc: "Fast deploys for Node, databases, and more.",
            },
            {
              name: "Supabase",
              link: "https://supabase.com/",
              desc: "Backend-as-a-Service with PostgreSQL hosting & auth.",
            },
            {
              name: "Cloudflare Pages",
              link: "https://cloudflare.com/",
              desc: "Global static hosting with CDN and edge functions.",
            },
            {
              name: "Glitch",
              link: "https://glitch.com/",
              desc: "Build and remix full-stack apps in your browser.",
            },
            {
              name: "Fly.io",
              link: "https://fly.io/",
              desc: "Run full apps near users on edge infrastructure.",
            },
            {
              name: "Firebase Hosting",
              link: "https://firebase.google.com/",
              desc: "Great for static apps + real-time databases & auth.",
            },
            {
              name: "DigitalOcean",
              link: "https://digitalocean.com/",
              desc: "More advanced control with their App Platform or VPS.",
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="border border-purple-400 bg-purple-300 text-purple-900 rounded-xl p-4 hover:shadow-sm transition"
            >
              <a
                href={tool.link}
                target="_blank"
                className="font-semibold hover:underline"
              >
                {idx + 1}. {tool.name}
              </a>
              <p className="text-sm mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-200 p-6 rounded-xl text-gray-800 shadow-sm mb-16">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
          <InfoIcon className="w-5 h-5 text-blue-700" />
          Tip for Beginners
        </h3>
        <p className="text-sm">
          Start with <strong>Vercel</strong> or <strong>Netlify</strong>. You
          can connect a GitHub repo and your app deploys automatically. No
          server config needed. Perfect for portfolios, blogs, and side
          projects.
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
