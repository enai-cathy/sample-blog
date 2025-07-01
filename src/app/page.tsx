import Carousel from "./ui/components/Homepage/Carousel";
import HeroSection from "./ui/components/Homepage/HeroSection";
import GetStarted from "./ui/components/Homepage/GetStarted";
import Newsletter from "./ui/components/Newsletter";
import FeaturedProjectsAbout from "./ui/components/Homepage/FeaturedProjectsAbout";
import MeetMe from "./ui/components/Homepage/MeetMe";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white min-h-screen font-sans">
        <HeroSection />
        <GetStarted />
        <FeaturedProjectsAbout />
        <Carousel />
        <MeetMe />
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-20 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Dive Into Real-World Dev?
          </h2>
          <p className="mb-6 max-w-xl mx-auto">
            Check out experiments, breakdowns, and honest lessons from someone
            building and learning in public.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-800 font-semibold py-3 px-6 rounded hover:bg-purple-100 transition"
          >
            Explore the Blog →
          </Link>
        </section>
        <Newsletter />
      </main>
    </>
  );
}
