import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection(){
    return (
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 lg:px-8">
        <Image
          src="/hero-image2.jpg"
          alt="Background"
          fill
          priority
          className="absolute inset-0 object-cover opacity-10"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Welcome to <span className="text-purple-500">404-FOUND!</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-300 text-lg">
            Where bugs become breakthroughs. A dev blog for the curious and the
            creative.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Read the Blog →
          </Link>
        </motion.div>
      </section>
    );
}