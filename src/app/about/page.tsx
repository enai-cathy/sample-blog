"use client";
import AboutMe from "../ui/components/Aboutpage/AboutMe";
import AboutBlog from "../ui/components/Aboutpage/AboutBlog";
import FeaturedProjects from "../ui/components/Aboutpage/FeaturedProjects";
import AboutHero from "../ui/components/Aboutpage/AboutHero";
import Testimonials from "../ui/components/Aboutpage/Testimonials";
import CTA from "../ui/components/Aboutpage/CTA";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    {/* Background Image Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    ></div>

    {/* Foreground Content */}
    <main className="relative z-10 bg-white/20 backdrop-blur-sm  py-16 px-4 sm:px-6 lg:px-8">
           
      {/* Hero */}
      <AboutHero/>
      {/* About Me */}
      <AboutMe/>

      {/* About the Blog */}
      <AboutBlog/>
      {/* Projects */}
     <FeaturedProjects />

      {/* Testimonials */}
     <Testimonials/>
      {/* Call to Action */}
      <CTA/>
     </main>
    </div>
  );
}
