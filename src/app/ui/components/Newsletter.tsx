'use client'
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter logic here (e.g., API call to ConvertKit, Buttondown, etc.)
    alert(`Subscribed: ${email}`);
    setEmail("");
  };
return (
  <div className="mx-auto text-white py-16 px-6 bg-gradient-to-br from-purple-200 to-purple-800 max-w-lg justify-center bg-gray-800 rounded-xl p-6 shadow-lg text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
      Join the Dev Dispatch
    </h2>
    <p className="mb-6 text-sm sm:text-base">
      Get exclusive insights, real-world builds, and developer goodies —
      straight to your inbox.
    </p>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@email.com"
        className="w-full sm:w-auto px-10 border-1 border-purple-300 py-2 rounded-lg text-black bg-purple-100 text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="text-purple-900 bg-white hover:bg-purple-700 hover:text-white px-5 py-1 rounded-lg transition font-semibold"
      >
        Subscribe
      </button>
    </form>
  </div>
);}
