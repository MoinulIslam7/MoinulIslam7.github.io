/* eslint-disable react/jsx-no-comment-textnodes */

"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useState } from "react";

function AboutSection() {
  const [showCoffeeStats, setShowCoffeeStats] = useState(false);
  
  const coffeeStats = {
    cupsPerDay: Math.floor(Math.random() * 10) + 3,
    linesPerCup: Math.floor(Math.random() * 500) + 100,
    bugsPerCup: Math.floor(Math.random() * 5) + 1
  };

  return (
    <div id="about" className="my-12 lg:my-16 relative terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button expand"></span>
        </div>
        <span className="terminal-title">about_me.sh</span>
      </div>
      
      <div className="terminal-body">
        <p className="text-[var(--success-green)]">$ whoami</p>
        <p className="text-xl font-bold text-white">{personalData.name}</p>
        
        <p className="text-[var(--success-green)] mt-4">$ cat bio.txt</p>
        <p className="text-gray-200">{personalData.description}</p>
        
        <div className="mt-6">
          <p className="text-[var(--success-green)]">$ coffee --stats</p>
          <button 
            onClick={() => setShowCoffeeStats(!showCoffeeStats)}
            className="text-[var(--warning-yellow)] hover:text-[var(--error-red)] transition-colors"
          >
            {showCoffeeStats ? "Hide coffee consumption stats" : "Reveal critical coffee stats"}
          </button>
          
          {showCoffeeStats && (
            <div className="mt-2 ml-4 text-sm">
              <p>☕ Cups per day: {coffeeStats.cupsPerDay}</p>
              <p>📝 Lines of code per cup: {coffeeStats.linesPerCup}</p>
              <p>🐞 Bugs introduced per cup: {coffeeStats.bugsPerCup}</p>
              <p className="text-[var(--error-red)] mt-1">Warning: High caffeine levels detected!</p>
            </div>
          )}
        </div>
        
        <p className="text-[var(--success-green)] mt-4">$ skills --list --all</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            'JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 
            'HTML/CSS', 'Git', 'REST APIs', 'Redux', 'Tailwind CSS',
            'MongoDB', 'Express', 'GraphQL', 'Docker', 'AWS',
            'Coffee Consumption', 'Stack Overflow', 'Googling Errors',
            'Debugging', 'Problem Solving', 'Teamwork', 'Communication',
            'Time Management', 'Rubber Duck Debugging'
          ].map(skill => (
            <span 
              key={skill} 
              className="skill-pill hover:animate-pulse"
              title={skill.includes('Coffee') ? "Certified Coffee Drinker" : undefined}
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-[var(--success-green)] mt-4">$ hobbies --list</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            'Coding', 'Gaming', 'Reading Tech Blogs', 'Breaking Production', 
            'Fixing What I Broke', 'Watching Tutorials', 'Attending Meetups',
            'Learning New Tech', 'Complaining About Tech', 'Pretending to Work',
            'Writing Bad Code', 'Refactoring Bad Code', 'Documenting (Just Kidding)'
          ].map(hobby => (
            <span 
              key={hobby} 
              className="skill-pill bg-[var(--syntax-purple)] bg-opacity-20 text-[var(--syntax-purple)]"
            >
              {hobby}
            </span>
          ))}
        </div>
        
        <p className="text-[var(--success-green)] mt-4">$ personality --traits</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            'Sarcastic', 'Curious', 'Persistent', 'Detail-Oriented',
            'Coffee-Dependent', 'Bug Magnet', 'Solution Finder',
            'Overly Excited About New Tech', 'Documentation Avoider',
            'Stack Overflow Copy-Paster', 'Console.Log Debugger',
            'Last-Minute Fixer', 'Works Best Under Pressure'
          ].map(trait => (
            <span 
              key={trait} 
              className="skill-pill bg-[var(--debug-blue)] bg-opacity-20 text-[var(--debug-blue)]"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <p className="text-[var(--warning-yellow)] mt-4 italic">
          // Note: Some traits may be exaggerated for comedic effect
        </p>
      </div>
    </div>
  );
};

export default AboutSection;