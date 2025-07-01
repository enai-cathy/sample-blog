"use client";
import Link from "next/link";

export default function AIToolsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
         AI Tools for Coding
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        AI is transforming how developers work — from autocompleting code to
        generating full applications, debugging, and even writing documentation.
        Whether you're a beginner or a senior dev, integrating AI tools into
        your workflow can 10x your productivity.
      </p>

      <div className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">
           What You Can Use AI For:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Write, refactor, and autocomplete code faster</li>
          <li>Generate unit tests and documentation</li>
          <li>Explain complex code in plain English</li>
          <li>Debug errors and optimize performance</li>
          <li>Automate repetitive tasks (e.g., scripts, configs)</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-600">
           Top 10 AI Coding Tools
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://github.com/features/copilot"
              target="_blank"
            >
              1. GitHub Copilot
            </a>{" "}
            – Autocompletes code using OpenAI Codex.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://codeium.com/"
              target="_blank"
            >
              2. Codeium
            </a>{" "}
            – Free AI autocomplete & chat assistant for devs.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://cursor.sh"
              target="_blank"
            >
              3. Cursor
            </a>{" "}
            – An AI-enhanced VS Code alternative.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://replit.com"
              target="_blank"
            >
              4. Replit Ghostwriter
            </a>{" "}
            – In-browser IDE with AI pair programming.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://www.sweep.dev/"
              target="_blank"
            >
              5. Sweep AI
            </a>{" "}
            – Write and refactor PRs from natural language.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://aicodeconvert.com/"
              target="_blank"
            >
              6. AI Code Convert
            </a>{" "}
            – Instantly convert code between languages.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://www.askcodi.com/"
              target="_blank"
            >
              7. AskCodi
            </a>{" "}
            – Generate code, tests, and SQL queries via prompts.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://www.tabnine.com/"
              target="_blank"
            >
              8. Tabnine
            </a>{" "}
            – AI autocomplete trained on private codebases.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://poe.com/"
              target="_blank"
            >
              9. Poe.com
            </a>{" "}
            – Chat with GPT-4 and Claude to debug and write logic.
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://flowgpt.com"
              target="_blank"
            >
              10. FlowGPT
            </a>{" "}
            – Browse top prompts to use in dev workflows.
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-purple-100 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-2">🎯 Tip:</h3>
        <p className="text-sm">
          Learn how to prompt well. Tools like GPT are only as good as the way
          you talk to them. Try using system prompts like:{" "}
          <code className="bg-white px-1 rounded text-purple-700">
            “You are a senior developer. Explain this code.”
          </code>
        </p>
      </div>
    </main>
  );
}
