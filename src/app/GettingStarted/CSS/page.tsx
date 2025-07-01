

export default function LearnCSS() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Learn CSS</h1>
      <p className="text-lg mb-4 text-gray-700">
        CSS (Cascading Style Sheets) is how we make the web beautiful. From layouts to animations, it's the design language of the frontend. Master it and bring your interfaces to life.
      </p>
      <h2 className="text-2xl font-semibold mb-2">📘 Recommended Resources</h2>
      <ul className="list-disc list-inside text-purple-700 space-y-2">
        <li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></li>
        <li><a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Docs</a></li>
        <li><a href="https://web.dev/learn/css/" target="_blank">Google Web.Dev CSS Learning Path</a></li>
      </ul>
    </section>
  );
}