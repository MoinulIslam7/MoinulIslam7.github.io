"use client";
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin, BiMailSend } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaRegLaughSquint } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import ContactForm from './contact-form';
import { useState } from 'react';

function ContactSection() {
  const [showFunFact, setShowFunFact] = useState(false);
  
  const funFacts = [
    "I respond faster to memes than to formal emails",
    "My inbox is 90% spam, 9% newsletters, 1% actual messages",
    "I once replied to an email with just 'LGTM' and got the job",
    "I have a special folder for recruiter emails with 'Urgent' in the subject",
    "My email response time is inversely proportional to coffee intake",
    "I judge people who don't use dark mode in their email clients"
  ];

  return (
    <div id="contact" className="my-12 lg:my-24 relative mt-24">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">contact.sh</span>
        </div>
        
        <div className="terminal-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <p className="text-[var(--success-green)]">$ ./contact_info</p>
              
              <div className="flex flex-col gap-5 lg:gap-6 mt-4">
                <p className="text-sm md:text-base flex items-center gap-3">
                  <BiMailSend
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.email}</span>
                </p>
                
                <p className="text-sm md:text-base flex items-center gap-3">
                  <IoMdCall
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.phone}</span>
                </p>
                
                <p className="text-sm md:text-base flex items-center gap-3">
                  <CiLocationOn
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.address}</span>
                </p>
              </div>
              
              <div className="mt-8 lg:mt-10">
                <p className="text-[var(--success-green)]">$ ./social_links</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {[
                    { icon: <IoLogoGithub size={28} />, url: personalData.github, label: "GitHub" },
                    { icon: <BiLogoLinkedin size={28} />, url: personalData.linkedIn, label: "LinkedIn" },
                    { icon: <FaXTwitter size={28} />, url: personalData.twitter, label: "Twitter" },
                    { icon: <FaStackOverflow size={28} />, url: personalData.stackOverflow, label: "StackOverflow" },
                    { icon: <FaFacebook size={28} />, url: personalData.facebook, label: "Facebook" }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      target="_blank"
                      className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer flex items-center justify-center"
                      title={item.label}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => setShowFunFact(!showFunFact)}
                  className="text-sm text-[var(--warning-yellow)] hover:text-[var(--error-red)] flex items-center gap-1"
                >
                  <FaRegLaughSquint />
                  {showFunFact ? "Hide contact fun fact" : "Show contact fun fact"}
                </button>
                
                {showFunFact && (
                  <div className="mt-2 p-3 bg-[#2a2a2a] rounded text-sm">
                    {funFacts[Math.floor(Math.random() * funFacts.length)]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;