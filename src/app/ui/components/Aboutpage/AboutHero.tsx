import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <>
    <motion.section
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl mt-5 sm:text-5xl font-extrabold text-gray-900 py-3">
              What to know about 404-FOUND!
            </h1>
            <p className="mt-4 text-lg text-gray-800 max-w-xl mx-auto">
              The dev blog that celebrates mistakes, breakthroughs & bold builds.
            </p>
          </motion.section>
    </>
  );
}
