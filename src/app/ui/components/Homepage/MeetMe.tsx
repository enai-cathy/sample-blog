'use client'
import {motion } from "framer-motion";
import Link from "next/link";

export default function MeetMe(){ 
return( 
<section className="bg-gray-950 py-20 px-4 text-center">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-3xl font-bold mb-4"> Meet the Creator</h2>
    <p className="text-gray-400 text-lg mb-6">
      I am Enaikato Cathy, a frontend dev and product tinkerer who pivoted from
      healthcare to code. I build ideas in public and share what I learn — bugs
      and all.
    </p>
    <Link
      href="/about"
      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition"
    >
      Read My Story →
    </Link>
  </motion.div>
</section>);}
