import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      <h1>Omg, thanks!</h1>
    </main>
  );
}