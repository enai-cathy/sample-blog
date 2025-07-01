'use client'
import {motion} from "framer-motion";
import Link from "next/link";


export default function FeaturedProjectsAbout(){ 
return( 
<section className="max-w-6xl mx-auto py-20 px-4">
  <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Backline",
        desc: "Football betting insights platform with dynamic data.",
        link: "/projects/backline",
      },
      {
        title: "Mint Mogul",
        desc: "A finance discovery site using APIs & affiliate content.",
        link: "/projects/mint-mogul",
      },
      {
        title: "Petal Punch",
        desc: "Premium wellness juice brand built with strategy.",
        link: "/projects/petal-punch",
      },
    ].map((proj) => (
      <motion.div
        key={proj.title}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition"
      >
        <h3 className="text-xl font-bold mb-2 text-purple-400">{proj.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>
        <Link
          href={proj.link}
          className="text-purple-500 hover:underline text-sm"
        >
          View Project →
        </Link>
      </motion.div>
    ))}
  </div>
</section>
);}
