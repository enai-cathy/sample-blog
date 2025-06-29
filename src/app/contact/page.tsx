"use client";

import ContactHero from "../ui/components/Contactpage/ContactHero";
import ContactForm from "../ui/components/Contactpage/ContactForm";
import ContactTestimonial from "../ui/components/Contactpage/ContactTestimonial";
import ContactCTA from "../ui/components/Contactpage/ContactCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Form */}
      <ContactForm />
      {/* Testimonials */}
      <ContactTestimonial/>
      {/* Call to Action */}
      <ContactCTA/>
    </main>
  );
}
