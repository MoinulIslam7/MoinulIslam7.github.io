"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });
import imageD from '../../../../public/png/placeholder.png';

function Skills() {
  const [showFunFact, setShowFunFact] = useState(false);
  
  const funFacts = [
    "I learned JavaScript by breaking things and then fixing them",
    "My first React component was a button that did nothing",
    "I can center a div with my eyes closed",
    "I once spent 3 hours debugging a missing semicolon",
    "My CSS skills are 50% trial, 50% error",
    "I Google how to do basic things at least 5 times a day"
  ];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">skills.sh</span>
        </div>
        
        <div className="terminal-body">
          <p className="text-[var(--success-green)]">$ npm list --depth=0</p>
          
          <div className="my-6">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              className="skill-marquee"
            >
              {skillsData.map((skill, id) => (
                <div 
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer skill-item"
                  key={id}
                  title={skill}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <Image
                          src={skillsImage(skill)?.src || imageD}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-sm text-[var(--warning-yellow)] hover:text-[var(--error-red)]"
            >
              {showFunFact ? "Hide fun fact" : "How I really learned these skills"}
            </button>
            
            {showFunFact && (
              <div className="mt-2 p-3 bg-[#2a2a2a] rounded text-sm">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </div>
            )}
          </div>
          
          <div className="mt-6 p-3 bg-[#2a2a2a] rounded text-sm">
            <p className="text-[var(--success-green)]">$ npm outdated</p>
            <p className="text-white">
              Warning: 42 packages are looking for funding
            </p>
            <p className="text-[var(--warning-yellow)]">
              Run `npm fund` for details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;