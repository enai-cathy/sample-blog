import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <>
      <motion.section
        className="mb-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
           Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Backline",
              desc: "Football betting insights platform built with dynamic data and charts.",
              link: "/projects/backline",
            },
            {
              title: "Mint Mogul",
              desc: "A finance tools discovery site using APIs and affiliate content.",
              link: "/projects/mint-mogul",
            },
            {
              title: "Petal Punch",
              desc: "A premium wellness brand powered by beautiful design and strategy.",
              link: "/projects/petal-punch",
            },
            {
              title: "MyPortfolio",
              desc: "A premium wellness brand powered by beautiful design and strategy.",
              link: "/projects/petal-punch",
            },
          ].map((proj) => (
            <div
              key={proj.title}
              className="border rounded-xl p-5 bg-white shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
              <Link
                href={proj.link}
                className="text-purple-600 mt-2 inline-block text-sm hover:underline"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
