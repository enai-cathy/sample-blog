"use client";
import Link from "next/link";
import {
  BrainCircuit,
  Keyboard,
  DollarSign,
  Server,
  CodeXml,
  Paintbrush,
  Computer,
} from "lucide-react";

export default function GetStartedStrip() {
  const topics = [
    {
      icon: <BrainCircuit size={24} />,
      label: "AI Tools",
      href: "/GettingStarted/ai",
    },
    {
      icon: <DollarSign size={24} />,
      label: "Business",
      href: "/GettingStarted/Business",
    },

    {
      icon: <Server size={24} />,
      label: "Hosting",
      href: "/GettingStarted/hosting",
    },
    {
      icon: <CodeXml size={24} />,
      label: "HTML",
      href: "/GettingStarted/html",
    },
    {
      icon: <Computer size={24} />,
      label: "Java",
      href: "/GettingStarted/Java",
    },
    {
      icon: <Paintbrush size={24} />,
      label: "CSS",
      href: "/GettingStarted/CSS",
    },
  ];

  return (
    <section className="w-full border-t border-b bg-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center font-semibold text-lg text-gray-700 mb-4">
          Get Started <span className="text-blue-600">Learning About</span>
        </h2>

        {/* Icon Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {topics.map((topic) => (
            <Link
              href={topic.href}
              key={topic.label}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-600 transition"
            >
              <div className="mb-1">{topic.icon}</div>
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
