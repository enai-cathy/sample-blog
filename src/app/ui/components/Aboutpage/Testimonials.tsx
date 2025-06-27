import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <>
      <motion.section
        className="mb-20 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          💬 Testimonials
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="bg-purple-50 p-6 rounded-lg shadow">
            <p className="italic text-gray-700">
              “They turned our concept into a slick, high-converting site in a
              week. Best dev I’ve worked with.”
            </p>
            <footer className="mt-2 text-right text-sm text-gray-500">
              — Client A
            </footer>
          </blockquote>
          <blockquote className="bg-purple-50 p-6 rounded-lg shadow">
            <p className="italic text-gray-700">
              “Incredibly thoughtful work and communication. Brought life to our
              brand with real technical depth.”
            </p>
            <footer className="mt-2 text-right text-sm text-gray-500">
              — Client B
            </footer>
          </blockquote>
        </div>
      </motion.section>
    </>
  );
}
