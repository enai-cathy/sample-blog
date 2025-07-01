"use client";
import Link from "next/link";

export default function HostingPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        🌐 Hosting & Deployment
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        Great projects deserve a great launch. Whether you're shipping a blog,
        SaaS app, or full-stack platform, hosting & deployment are key. This
        guide helps you choose the right platform and tools for speed,
        scalability, and ease.
      </p>

      <div className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">
          💡 Key Concepts to Understand:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Static vs dynamic hosting</li>
          <li>CDNs, caching & performance</li>
          <li>Serverless functions</li>
          <li>Continuous deployment (CI/CD)</li>
          <li>Domains & DNS setup</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-600">
          🔗 Top 10 Hosting Platforms & Tools
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://vercel.com/"
              target="_blank"
            >
              1. Vercel
            </a>{" "}
            – Best for Next.js apps, fast, serverless, and developer-friendly.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://netlify.com/"
              target="_blank"
            >
              2. Netlify
            </a>{" "}
            – Perfect for static sites and JAMstack apps with CI/CD built-in.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://render.com/"
              target="_blank"
            >
              3. Render
            </a>{" "}
            – Easy full-stack deployments with a generous free tier.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://railway.app/"
              target="_blank"
            >
              4. Railway
            </a>{" "}
            – Fast deploys for Node, databases, and more.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://supabase.com/"
              target="_blank"
            >
              5. Supabase
            </a>{" "}
            – Backend as a service + PostgreSQL hosting.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://cloudflare.com/"
              target="_blank"
            >
              6. Cloudflare Pages
            </a>{" "}
            – Fast, secure, global static hosting.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://glitch.com/"
              target="_blank"
            >
              7. Glitch
            </a>{" "}
            – Build and share full-stack apps in your browser.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://fly.io/"
              target="_blank"
            >
              8. Fly.io
            </a>{" "}
            – Run full apps near users on edge infrastructure.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://firebase.google.com/"
              target="_blank"
            >
              9. Firebase Hosting
            </a>{" "}
            – Great for static apps + real-time DBs.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://digitalocean.com/"
              target="_blank"
            >
              10. DigitalOcean
            </a>{" "}
            – More advanced VPS-level control with App Platform.
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-2">📦 Tip for Beginners:</h3>
        <p className="text-sm">
          Start with <strong>Vercel</strong> or <strong>Netlify</strong>. You
          can push to GitHub and your app deploys automatically. No server
          config. Perfect for portfolios, blogs, and side projects.
        </p>
      </div>
    </main>
  );
}
