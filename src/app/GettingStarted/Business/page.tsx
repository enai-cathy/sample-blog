export default function Business() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mt-3 text-purple-700 mb-6">
        Learn Business & Strategy
      </h1>
      <p className="text-lg mb-4 text-gray-700">
        Whether you're launching a startup or freelancing as a dev, business
        thinking is key. Learn how to define value, understand users, validate
        ideas, and grow smart.
      </p>
      <h2 className="text-2xl font-semibold mb-2">📘 Recommended Resources</h2>
      <ul className="list-disc list-inside text-purple-700 space-y-2">
        <li>
          <a href="https://www.ycombinator.com/library" target="_blank">
            Y Combinator Startup Library
          </a>
        </li>
        <li>
          <a
            href="https://www.strategyzer.com/books/value-proposition-design"
            target="_blank"
          >
            Value Proposition Design by Strategyzer
          </a>
        </li>
        <li>
          <a
            href="https://www.notion.so/Product-Playbooks-5fdfcc9f4e1e46b487d7a663ff998fa5"
            target="_blank"
          >
            Product Strategy Playbooks (Notion)
          </a>
        </li>
      </ul>
    </section>
  );
}
