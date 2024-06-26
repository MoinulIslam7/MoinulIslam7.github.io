// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="order-2 lg:order-2">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-1">
          <div className="w-full lg:w-[70%] h-full lg:h-[28rem]">
            <img src={personalData.profile} className="w-full h-full rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              alt="" />
          </div>
          {/* <Image
            src={personalData.profile}
            width={full}
            height={full}
            alt="Moinul Islam"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;