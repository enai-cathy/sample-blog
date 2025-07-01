import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <motion.section
        className="text-center bg-gradient-to-br from-purple-300 to-purple-800 text-white py-16 px-6 rounded-xl max-w-4xl mx-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Together
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-purple-100">
          If you are a founder, startup, or collaborator looking for clean,
          purposeful frontend work — I&apos;m ready.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-purple-800 font-semibold py-3 px-6 rounded hover:bg-purple-100 transition"
        >
          Contact Me →
        </Link>
      </motion.section>
    </>
  );
}
