// app/layout.js
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './css/card.scss';
import './css/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import NavbarWrapper from './components/Navbar/NavbarWrapper';
import StructuredData from './components/helper/StructuredData';

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
  title: 'Moinul Islam - Full Stack Developer | 3+ Years Experience | Dhaka',
  description: 'Moinul Islam - Professional Full Stack Software Developer with 3+ years in Python, JavaScript, React, Next.js, Node.js, and scalable web architectures. Specializing in modern web development, REST APIs, and cloud solutions. Based in Dhaka, Bangladesh.',
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/Moinul-Islam.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Moinul Islam - Full Stack Developer | 3+ Years Experience',
    description: 'Professional Full Stack Developer specializing in React, Next.js, Node.js, and Python. Building scalable web applications with modern technologies.',
    url: 'https://moinulislam7.github.io/',
    siteName: 'Moinul Islam Portfolio',
    images: [
      {
        url: 'https://moinulislam7.github.io/Moinul-Islam.png',
        width: 1200,
        height: 630,
        alt: 'Moinul Islam - Full Stack Software Developer Portfolio',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moinul Islam - Full Stack Developer',
    description: 'Professional Full Stack Developer with 3+ years of experience in modern web technologies. Python | JavaScript | React | Node.js | Next.js',
    site: '@MoinulIslam77',
    creator: '@MoinulIslam77',
    images: ['https://moinulislam7.github.io/Moinul-Islam.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d0700" />
        <meta name="color-scheme" content="dark" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <StructuredData />
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ToastContainer />
        <NavbarWrapper />
        <main className="pt-20 min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
