import { motion } from "framer-motion";

export default function ContactTestimonial() {
  return (
    <>
      <motion.section
        className="mb-20 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">
          What People Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="bg-purple-50 p-6 rounded-lg shadow">
            <p className="italic text-gray-700">
              “Cathy understood our vision and delivered a seamless experience —
              fast, friendly, and technically sharp.”
            </p>
            <footer className="mt-2 text-right text-sm text-gray-500">
              — Client X
            </footer>
          </blockquote>
          <blockquote className="bg-purple-50 p-6 rounded-lg shadow">
            <p className="italic text-gray-700">
              “Working with 404-FOUND! was like working with a design + code
              wizard. Real magic in every detail.”
            </p>
            <footer className="mt-2 text-right text-sm text-gray-500">
              — Product Manager Y
            </footer>
          </blockquote>
        </div>
      </motion.section>
    </>
  );
}
