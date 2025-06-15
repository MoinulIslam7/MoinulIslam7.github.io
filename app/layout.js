// app/layout.js or app/layout.tsx
import { Inter } from 'next/font/google';
import './css/card.scss';
import './css/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import NavbarWrapper from './components/Navbar/NavbarWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moinul Islam - Software Developer',
  description: 'This is the portfolio of Moinul Islam. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
