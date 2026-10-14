import Link from 'next/link';

export const metadata = {
  title: 'Page not found - Moinul Islam',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8">
      <h1 className="section-title font-heading">404 - Page not found</h1>
      <p style={{ color: 'var(--text-dim)', marginTop: '0.75rem' }}>
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="footer-brand__name" style={{ marginTop: '1.5rem' }}>
        Back to home
      </Link>
    </section>
  );
}
