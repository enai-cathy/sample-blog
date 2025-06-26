

export default function HeroSection(){
    return (
      <section
        className="relative mt-15 py-16 min-h-[calc(100vh-theme(spacing.16))] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col top-40 items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to 404-FOUND!
          </h1>
          <p className="text-lg md:text-2xl max-w-xl">
            Discover deep tech insights, guides, and tools for modern
            developers.
          </p>
          <a
            href="/blog"
            className="mt-6 bg-purple-700 hover:bg-purple-500 text-white px-6 py-3 rounded shadow-lg transition"
          >
            Explore the Blog
          </a>
        </div>
      </section>
    );
}