"use client";
import Link from "next/link";
import { Wand2Icon, ArrowLeft, TargetIcon  } from "lucide-react";

export default function AIToolsPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white bg-gray-900">
      <section className="mb-12">
        <div className="flex items-center gap-2 text-purple-700 mb-3">
          <Wand2Icon className="w-6 h-6" />
          <h1 className="text-3xl sm:text-4xl font-bold">
            AI Tools for Coding
          </h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          AI is transforming how developers work — from autocompleting code to
          debugging, generating full apps, and writing docs. Whether you're a
          beginner or a senior dev, integrating AI tools into your workflow can
          10x your productivity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          What You Can Use AI For
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base list-disc list-inside">
          <li>Write, refactor, and autocomplete code faster</li>
          <li>Generate unit tests and documentation</li>
          <li>Explain complex code in plain English</li>
          <li>Debug errors and optimize performance</li>
          <li>Automate repetitive tasks (e.g., scripts, configs)</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          🛠️ Top 10 AI Coding Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "GitHub Copilot",
              link: "https://github.com/features/copilot",
              desc: "Autocompletes code using OpenAI Codex.",
            },
            {
              name: "Codeium",
              link: "https://codeium.com/",
              desc: "Free AI autocomplete & dev chat assistant.",
            },
            {
              name: "Cursor",
              link: "https://cursor.sh",
              desc: "AI-enhanced VS Code alternative.",
            },
            {
              name: "Replit Ghostwriter",
              link: "https://replit.com",
              desc: "In-browser IDE with AI pair programming.",
            },
            {
              name: "Sweep AI",
              link: "https://www.sweep.dev/",
              desc: "Write/refactor PRs from natural language.",
            },
            {
              name: "AI Code Convert",
              link: "https://aicodeconvert.com/",
              desc: "Convert code between languages instantly.",
            },
            {
              name: "AskCodi",
              link: "https://www.askcodi.com/",
              desc: "Generate code, tests, and SQL with prompts.",
            },
            {
              name: "Tabnine",
              link: "https://www.tabnine.com/",
              desc: "AI autocomplete trained on your codebase.",
            },
            {
              name: "Poe.com",
              link: "https://poe.com/",
              desc: "Chat with GPT-4 or Claude to debug code.",
            },
            {
              name: "FlowGPT",
              link: "https://flowgpt.com",
              desc: "Discover top dev-focused AI prompts.",
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="border border-1 border-purple-400 bg-purple-300 rounded-xl p-4 hover:shadow-sm transition"
            >
              <a
                href={tool.link}
                target="_blank"
                className="text-purple-800 font-semibold hover:underline"
              >
                {idx + 1}. {tool.name}
              </a>
              <p className="text-sm  mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 to-purple-500 border border-1 border-purple-100 p-6 rounded-xl shadow-sm mb-16">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          <TargetIcon className="w-6 h-6" /> Pro Tip
        </h3>
        <p className="text-sm text-gray-700">
          Learn how to prompt well. AI tools like GPT are only as good as how
          you talk to them. Try system prompts like:{" "}
          <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">
            “You are a senior dev. Explain this code in steps.”
          </code>
        </p>
      </section>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-purple-700 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </main>
  );
}
