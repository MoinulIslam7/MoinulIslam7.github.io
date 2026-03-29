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
  title: 'Moinul Islam - Full Stack Software Developer | JavaScript & Python Expert',
  description: 'Portfolio of Moinul Islam, a professional full stack software developer with 3+ years of experience. Specialist in React, Next.js, Vue, Node.js, Python, and scalable web architectures. Based in Dhaka, Bangladesh.',
  keywords: [
    'Moinul Islam', 'Software Engineer', 'Full Stack Developer', 'JavaScript Developer', 
    'Python Developer', 'React Developer', 'Next.js Expert', 'Vue.js Developer', 
    'Node.js Developer', 'Web Developer Dhaka', 'Portfolio', 'Software Architect', 
    'MoinulIslam7', 'Frontend Engineer', 'Backend Developer'
  ],
  authors: [{ name: 'Moinul Islam', url: 'https://github.com/MoinulIslam7' }],
  creator: 'Moinul Islam',
  publisher: 'Moinul Islam',
  metadataBase: new URL('https://moinulislam7.github.io/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'KGkr5huMtGJtPFH76Q-CjfDRSZA6zSE3rXsBPzqBPOs',
  },
  openGraph: {
    title: 'Moinul Islam | Full Stack Software Developer',
    description: 'Explore the artifacts, battle records, and technical insights of Moinul Islam. Building the web with precision and passion.',
    url: 'https://moinulislam7.github.io/',
    siteName: 'Moinul Islam Portfolio',
    images: [
      {
        url: 'https://moinulislam7.github.io/Moinul-Islam.png',
        width: 1200,
        height: 630,
        alt: 'Moinul Islam - Software Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moinul Islam | Software Developer',
    description: 'Passionate Full Stack Developer specialized in modern web technologies. Check out my latest quests and artifacts.',
    site: '@MoinulIslam77',
    creator: '@MoinulIslam77',
    images: ['https://moinulislam7.github.io/Moinul-Islam.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
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
