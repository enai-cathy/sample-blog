import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <motion.section
        className="mb-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">👋 About Me</h2>
          <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
            I’m <strong>Ige-Edaba Enaikato Cathy</strong>, a frontend developer,
            product tinkerer, and the curious mind behind{" "}
            <strong>404-FOUND!</strong> — but my journey didn’t begin in code.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            I started in healthcare, drawn by a deep desire to help people, I
            discovered coding as a new form of creative problem-solving. One
            powered by logic, creativity, and pixels. Learning to code was like
            learning a new language, one where I could build things that
            mattered and share them with the world.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            <strong>404-FOUND!</strong> is more than a dev blog, it’s a digital
            reflection of my shift from saving lives to designing better digital
            experiences. It's a space where I share what I’m learning, building,
            and exploring.
          </p>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Outside of tech, I enjoy cooking, sci-fi films, and spontaneous
            creativity. If you're navigating your own path in tech, especially
            through a career pivot. you’re not alone. 
            <strong>You belong here.</strong>
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">⚡ Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Next.js + React</li>
            <li>Tailwind CSS</li>
            <li>Supabase / PostgreSQL</li>
            <li>OpenAI / API integrations</li>
            <li>Vercel Deployments</li>
          </ul>
        </div>
      </motion.section>
    </>
  );}