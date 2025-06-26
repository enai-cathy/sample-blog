import HeroSection from "./ui/components/HeroSection";

export default function Home() {
  return (
    <> <HeroSection />
    <main className="flex items-center justify-center min-h-screen bg-gray-50 mt-15">
     
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Welcome</h1>
            <p className="text-3xl text-blue mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci. dfkjgkj.
            </p>
            <a
              href="/blog/posts"
              className="outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto"
            >
              Go to Blog
            </a>
          </div>
        </div>
      </div>
      <p>
        <a href="https://www.freepik.com/free-vector/blue-3d-particles-background-design_3086334.htm">
          Image by starline on Freepik
        </a>
      </p>
    </main>
    </>
  );
}
