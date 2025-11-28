/* eslint-disable react/jsx-no-comment-textnodes */

"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  const [show404, setShow404] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setShow404(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-20">
      {show404 && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#0d0f1c]">
          <div className="terminal-container text-center p-8">
            <div className="terminal-header">
              <span className="terminal-title">error.js</span>
            </div>
            <div className="terminal-body">
              <p className="text-[var(--error-red)] text-2xl mb-4">404: Developer Not Found</p>
              <p className="text-[var(--warning-yellow)]">Booting up personality...</p>
              <div className="typewriter mt-4">Loading Moinul.exe</div>
            </div>
          </div>
        </div>
      )}

      <Image
        src="/hero-error.svg"
        alt="404 Human Not Found"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-50"
      />

      <div className="grid grid-cols-1 items-center justify-center w-[70%] text-center lg:grid-cols-1 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-center justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="pt-16 md:pt-0 lg:text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            <span className="text-[var(--error-red)]">$ </span>
            <span className="text-[var(--debug-blue)]">whoami</span>
            <span className="cursor">_</span>
          </h1>
          
          <div className="terminal-container my-6 max-w-2xl">
            <div className="terminal-header">
              <span className="terminal-title">moinul_profile.js</span>
            </div>
            <div className="terminal-body text-left">
              <p className="text-[var(--success-green)]">// Full Stack Developer | Coffee Enthusiast | Bug Creator</p>
              <p className="text-[var(--warning-yellow)] mt-2">// 3+ years of turning coffee into code</p>
              <p className="text-[var(--syntax-purple)] mt-2">// Specialties: JavaScript, React, Node.js, and pretending to know what I'm doing</p>
            </div>
          </div>

          <div className="my-8 flex flex-wrap justify-center gap-5">
            {[
              { icon: <BsGithub size={30} />, url: personalData.github, label: "npm install github" },
              { icon: <BsLinkedin size={30} />, url: personalData.linkedIn, label: "npm install linkedin" },
              { icon: <FaFacebook size={30} />, url: personalData.facebook, label: "npm install facebook" },
              { icon: <SiLeetcode size={30} />, url: personalData.leetcode, label: "npm install leetcode" },
              { icon: <FaTwitterSquare size={30} />, url: personalData.twitter, label: "npm install twitter" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300 relative group"
                title={item.label}
              >
                {item.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 group">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  $ mailto:moinul@example.com
                </span>
              </button>
            </Link>

            <Link 
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold relative group" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                wget moinul_resume.pdf
              </span>
            </Link>
          </div>

          <div className="mt-8 text-sm text-[var(--warning-yellow)]">
            <p>// Warning: May contain traces of sarcasm and bad puns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;