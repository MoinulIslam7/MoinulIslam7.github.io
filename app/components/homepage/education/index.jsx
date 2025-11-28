"use client";
import { useState, useEffect } from "react";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace, BsBook } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/GlowCard";
import lottieFile from '/public/lottie/study.json';

function Education() {
  const [showFunFact, setShowFunFact] = useState(false);
  const [coffeeData, setCoffeeData] = useState({});

  const funFacts = [
    "I aced all my coding exams but failed at making coffee",
    "My thesis was titled 'Why Does My Code Work? An Investigation'",
    "I learned more from Stack Overflow than from textbooks",
    "My favorite class was 'Advanced Procrastination'",
    "I once debugged a professor's code during an exam",
    "My GPA was directly proportional to coffee consumption"
  ];

  useEffect(() => {
    // Generate random coffee consumption numbers on the client
    const generated = {};
    educations.forEach(ed => {
      generated[ed.id] = Math.random().toFixed(2);
    });
    setCoffeeData(generated);
  }, []);

  return (
    <div id="education" className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">education.log</span>
        </div>
        
        <div className="terminal-body">
          <p className="text-[var(--success-green)]">$ cat academic_history.txt</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`} className="education-card">
                  <div className="p-3 relative">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        {education.type === 'degree' ? <BsPersonWorkspace size={36} /> : <BsBook size={36} />}
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
                        {education.gpa && (
                          <p className="text-xs text-[var(--warning-yellow)] mt-1">
                            GPA: {education.gpa} 
                            {coffeeData[education.id] !== undefined && (
                              <> (Coffee Consumption: {coffeeData[education.id]} cups/hour)</>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
            
            <div className="flex justify-center items-start">
              <div className="w-full h-full">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-sm text-[var(--warning-yellow)] hover:text-[var(--error-red)]"
            >
              {showFunFact ? "Hide fun fact" : "Show educational fun fact"}
            </button>
            
            {showFunFact && (
              <div className="mt-2 p-3 bg-[#2a2a2a] rounded text-sm">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </div>
            )}
          </div>
          
          <div className="mt-6 p-3 bg-[#2a2a2a] rounded text-sm">
            <p className="text-[var(--success-green)]">$ education --status</p>
            <p className="text-white">
              Current status: Lifelong learner (always Googling things)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
