import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStackGrid() {

  return (
    <>
      <motion.section
        className="mb-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: "/react-illustration.png",
              title: "Next.js + React",
              desc: "The modern framework powering this site. I use Next.js for lightning-fast performance, SEO optimization, and full-stack flexibility — all built on the reliable foundation of React.",
            },
            {
              title: "OpenAI / API integrations",
              desc: "I integrate AI capabilities like content generation, personalization, or automation using OpenAI's APIs, while also working comfortably with third-party REST or GraphQL APIs.",
              image: "/ai-illustration.png",
            },
            {
              title: "MongoDB / PostgreSQL",
              desc: "A powerful backend-as-a-service I use for real-time data, user authentication, and storage — all backed by PostgreSQL, the gold standard in relational databases.",
              image: "/database-illustration.jpg",
            },
            {
              title: "Tailwind CSS",
              desc: "Utility-first CSS framework that helps me design beautiful, responsive interfaces without writing bloated styles. Fast, consistent, and pixel-perfect.",
              image: "/css-illustration.jpg",
            },
            {
              title: "Git & Version Control",
              desc: "I manage all my codebases using Git, ensuring clean commits, collaborative development, and safe rollbacks. It’s how I stay organized and ship with confidence.",
              image: "/git-illustration.jpg",
            },
            {
              image: "/figma-illustration.jpg",
              title: "Figma",
              desc: "My go-to for wireframing, prototyping, and visual design. I use Figma to craft intuitive interfaces, collaborate in real-time, and bring structure to creativity before writing a single line of code.",
            },
          ].map((proj) => (
            <div
              key={proj.title}
              className="border-1 border-purple-300 rounded-xl p-5 bg-purple-200 shadow hover:shadow-lg hover:bg-purple-100 transition"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                className="w-full h-50 mb-4 object-contain"
              />

              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );}