import {motion} from "framer-motion";
import { Link2Icon } from "lucide-react";

export default function ContactHero(){
    return (
      <>
        <motion.section
          className="text-center mt-15 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className=" flex items-center justify-center gap-4 text-3xl sm:text-4xl font-extrabold text-purple-300 mt-6 mb-4">
            Let&apos;s Connect <Link2Icon className="w-8 h-8" />
          </h1>
          <p className="text-lg text-gray-300">
            Whether you have a project idea, collaboration, or just want to say
            hi. <br /> Let&apos;s connect.
          </p>
        </motion.section>
      </>
    );
}