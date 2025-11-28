import Link from 'next/link';
import { FaArrowLeft, FaHome, FaRandom } from 'react-icons/fa';

export default function NotFound() {
  const funny404Messages = [
    "You found a memory leak!",
    "This route doesn't exist. Did you mean /home?",
    "404: Page Not Found (but I found your patience)",
    "This is not the page you're looking for *waves hand*",
    "The page you seek has gone on vacation",
    "Error 404: Witty comment not found"
  ];

  const randomMessage = funny404Messages[Math.floor(Math.random() * funny404Messages.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">404.js</span>
      </div>
      
      <div className="terminal-body text-center">
        <h2 className="text-4xl font-bold text-[var(--error-red)] mb-4">404: Page Not Found</h2>
        <p className="text-xl mb-6">{randomMessage}</p>
        
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
          <Link href="/" className="bg-[var(--debug-blue)] text-white px-6 py-3 rounded flex items-center justify-center gap-2">
            <FaHome /> Go Home
          </Link>
          <button 
            onClick={() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            className="bg-[var(--syntax-purple)] text-white px-6 py-3 rounded flex items-center justify-center gap-2"
          >
            <FaRandom /> Click for Solution
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>// Pro tip: The back button usually works</p>
          <p>// Unless you came here from the "Click for Solution" button above</p>
        </div>
      </div>
    </div>
  );
}