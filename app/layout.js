// app/layout.js
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './css/card.scss';
import './css/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import NavbarWrapper from './components/Navbar/NavbarWrapper';
import StructuredData from './components/helper/StructuredData';
import MeshBackground from './components/helper/MeshBackground';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Moinul Islam - Full Stack Developer in Dhaka, Bangladesh',
  description: 'Moinul Islam is a Full Stack Software Developer in Dhaka, Bangladesh with 3+ years building fast, scalable web apps using React, Next.js, Node.js and Python.',
  keywords: [
    'Moinul Islam', 
    'Full Stack Developer',
    'Full Stack Software Developer', 
    'JavaScript Developer', 
    'Python Developer', 
    'React Developer', 
    'Next.js Developer',
    'Next.js Expert',
    'Vue.js Developer', 
    'Node.js Developer', 
    'Web Developer Dhaka',
    'Software Engineer Dhaka',
    'Software Architect', 
    'MoinulIslam7', 
    'Frontend Engineer', 
    'Backend Developer',
    'Web Application Developer',
    'REST API Developer',
    'Database Developer',
    'Software Development Dhaka',
    'Portfolio',
    'Freelance Developer',
    'Web Development',
    'Application Development'
  ],
  authors: [{ name: 'Moinul Islam', url: 'https://github.com/MoinulIslam7' }],
  creator: 'Moinul Islam',
  publisher: 'Moinul Islam',
  metadataBase: new URL('https://moinulislam7.github.io/'),
  alternates: {
    canonical: 'https://moinulislam7.github.io/',
    languages: {
      'en': 'https://moinulislam7.github.io/',
      'x-default': 'https://moinulislam7.github.io/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'KGkr5huMtGJtPFH76Q-CjfDRSZA6zSE3rXsBPzqBPOs',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  // Hides Google's "Translate this page" link in search results.
  other: {
    google: 'notranslate',
  },
  openGraph: {
    title: 'Moinul Islam - Full Stack Developer in Dhaka, Bangladesh',
    description: 'Moinul Islam is a Full Stack Software Developer in Dhaka, Bangladesh with 3+ years building fast, scalable web apps using React, Next.js, Node.js and Python.',
    url: 'https://moinulislam7.github.io/',
    siteName: 'Moinul Islam',
    images: [
      {
        url: 'https://moinulislam7.github.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moinul Islam - Full Stack Software Developer in Dhaka, Bangladesh',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moinul Islam - Full Stack Developer in Dhaka, Bangladesh',
    description: 'Moinul Islam is a Full Stack Software Developer in Dhaka, Bangladesh with 3+ years building fast, scalable web apps using React, Next.js, Node.js and Python.',
    site: '@MoinulIslam77',
    creator: '@MoinulIslam77',
    images: ['https://moinulislam7.github.io/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/Moinul-Islam.webp" type="image/webp" fetchPriority="high" />
        <meta name="theme-color" content="#0d0700" />
        <meta name="color-scheme" content="dark" />
        <StructuredData />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ToastContainer />
        <MeshBackground />
        <NavbarWrapper />
        <main className="pt-20 min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
