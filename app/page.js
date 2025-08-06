import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import axios from 'axios';


async function getData() {
  try {
    const res = await axios.get(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    const filtered = res.data
      .filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    console.error("Failed to fetch blogs from dev.to API:", error.message);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};