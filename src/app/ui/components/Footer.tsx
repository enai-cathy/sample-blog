"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter logic here (e.g., API call to ConvertKit, Buttondown, etc.)
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Newsletter Signup */}
       

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              404-FOUND!
            </h3>
            <p className="text-sm text-gray-400">
              A dev blog for the curious, the pivoting, and the persistent.
              Built with love, bugs, and bold ideas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-purple-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="mailto:enaikatoigeedaba@gmail.com"
                className="hover:text-purple-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/enai-cathy"
                target="_blank"
                className="hover:text-purple-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="hover:text-purple-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} 404-FOUND! — Built by Me-Enai, with Next.js,
          TailwindCSS, and spicy code 🌶️
        </div>
      </motion.div>
    </footer>
  );
}
