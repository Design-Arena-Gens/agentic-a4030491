import Link from 'next/link';

const highlights = [
  { label: 'Instant greetings', icon: '👋' },
  { label: 'Zero friction onboarding', icon: '⚡️' },
  { label: 'Vercel ready', icon: '▲' }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>
          Hi there<span aria-hidden> 👋</span>
        </h1>
        <p>
          Welcome to a lightning-fast hello from your agentic teammate. Fine-tuned for rapid
          deployment and effortless collaboration.
        </p>
        <Link className="cta" href="https://nextjs.org" target="_blank" rel="noreferrer">
          Explore Next.js
        </Link>
        <div className="meta" aria-label="Key highlights">
          {highlights.map((item) => (
            <span key={item.label}>
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
