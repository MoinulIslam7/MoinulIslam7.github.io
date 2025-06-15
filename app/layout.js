// app/layout.js or app/layout.tsx
import { Inter } from 'next/font/google';
import './css/card.scss';
import './css/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import NavbarWrapper from './components/Navbar/NavbarWrapper';
import StructuredData from './components/helper/StructuredData';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moinul Islam - Full Stack Software Developer',
  description: 'Portfolio of Moinul Islam, a full stack developer with 3 years of experience. Skilled in JavaScript, Vue, React, Node.js, and modern web technologies.',
  keywords: ['Moinul Islam', 'Software Engineer', 'Full Stack Developer', 'JavaScript Developer', 'Moinul Portfolio', 'Moinul Islam Dev', 'Web Developer', 'React Developer', 'Vue.js Developer', 'Node.js Developer'],
  authors: [{ name: 'Moinul Islam' }],
  creator: 'Moinul Islam',
  themeColor: '#0a192f',
  metadataBase: new URL('https://moinulislam7.vercel.app/'),
  openGraph: {
    title: 'Moinul Islam - Software Engineer',
    description: 'Explore the portfolio and blog of Moinul Islam, a skilled full stack developer.',
    url: 'https://moinulislam7.vercel.app/',
    siteName: 'Moinul Islam Portfolio',
    images: [
      {
        url: 'https://moinulislam7.vercel.app/profile.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moinul Islam - Full Stack Developer',
    description: 'Official portfolio and projects of Moinul Islam.',
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
    images: ['https://yourdomain.com/og-image.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="KGkr5huMtGJtPFH76Q-CjfDRSZA6zSE3rXsBPzqBPOs" />
      </Head>
      <StructuredData />
      <body className={inter.className}>
        <ToastContainer />
        <NavbarWrapper />
        <main className="pt-20 min-h-screen relative container z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
