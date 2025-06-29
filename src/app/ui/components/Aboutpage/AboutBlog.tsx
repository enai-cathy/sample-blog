import { motion } from "framer-motion";

export default function AboutBlog() {
  return (
    <>
      <motion.section
        className="mb-20 max-w-3xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-3xl font-semibold mb-4">💡 About the Blog</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>404-FOUND!</strong> flips the script on traditional tech
          blogs. It’s not just a showcase — it’s a behind-the-scenes lab. I
          document what I’m building, breaking, and fixing in public.
          <br />
          <br />
          You’ll find real-world builds, dev struggles, component drops, and
          tools that can help you ship faster and smarter.
        </p>
      </motion.section>
    </>
  );
}
