"use client";
import React, { useState, FormEvent } from "react";
import { AsteriskIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SerenaAI() {
  const PROMPT =
    "You are a professional tech instructor and tech transition guru. Write about the question below.";
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setGenerating(true);
    setResponse(""); // clear previous response

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: PROMPT, question }),
      });

      const text = await res.text(); // first read as plain text
      console.log("Raw response:", text);

      if (!res.ok) throw new Error("Server error: " + res.status);

      const data = JSON.parse(text); 
      setResponse(data.result || "No result received.");
    } catch (err) {
      console.error("API error:", err);
      setResponse("⚠️ Something went wrong. Please try again.");
    } finally {
      setGenerating(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.section
        className="text-center mt-15 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="text-center mt-15">
          <h1 className=" flex items-center mt-15 pt-8 justify-center gap-4 text-3xl sm:text-4xl font-extrabold text-purple-300 mb-4">
            Serena AI{" "}
          </h1>
          <p className="text-lg text-gray-300">Your Tech Journey Guide</p>
        </div>
      </motion.section>
      <motion.section
        className="bg-gray-50 p-8 rounded-xl shadow max-w-lg mx-auto mt-15 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Need Additional Info?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex block text-sm font-medium text-gray-700">
              Ask Me Anything!
              <AsteriskIcon className="text-red-700 w-3 h-3 ml-1" />
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="How can I fast-track your tech journey today?"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 bg-purple-700 text-white font-semibold py-3 px-6 rounded hover:bg-purple-800 transition"
              disabled={generating}
            >
              {generating ? "Thinking..." : "Ask!"}
            </button>
          </div>

          {response && (
            <div>
              <label className="flex block text-sm font-medium text-gray-700 mt-6">
                AI Response
              </label>
              <textarea
                rows={6}
                value={response}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800"
              ></textarea>
            </div>
          )}
        </form>
      </motion.section>
    </div>
  );
}
