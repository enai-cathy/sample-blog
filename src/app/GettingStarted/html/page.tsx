export default function HTML() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Learn HTML</h1>
      <p className="text-lg mb-4 text-gray-700">
        HTML (HyperText Markup Language) is the foundation of the web. It's how
        we structure content and give meaning to what we display in the browser.
        Mastering HTML is the first step toward building websites.
      </p>
      <h2 className="text-2xl font-semibold mb-2">📘 Recommended Resources</h2>
      <ul className="list-disc list-inside text-purple-700 space-y-2">
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            MDN HTML Docs
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5"
            target="_blank"
          >
            freeCodeCamp - HTML Course
          </a>
        </li>
        <li>
          <a href="https://htmlreference.io/" target="_blank">
            HTML Reference
          </a>
        </li>
      </ul>
    </section>
  );
}
