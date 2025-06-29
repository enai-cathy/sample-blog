
import { motion } from "framer-motion";
import { AsteriskIcon } from "lucide-react";

export default function ContactForm() {
  return (
    <>
      <motion.section
        className="bg-gray-50 p-8 rounded-xl shadow max-w-lg mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <form
          action="https://formspree.io/f/mgvyrkrg"
          method="POST"
          className="grid gap-8"
        >
          <div>
            <label className=" flex block text-sm font-medium text-gray-700">
              Name <AsteriskIcon className=" text-red-700 w-3 h-3" />
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="flex block text-sm font-medium text-gray-700">
              Email <AsteriskIcon className=" text-red-700 w-3 h-3" />
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="flex block text-sm font-medium text-gray-700">
              Message <AsteriskIcon className=" text-red-700 w-3 h-3" />
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project or idea..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold py-3 px-6 rounded hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </>
  );
}