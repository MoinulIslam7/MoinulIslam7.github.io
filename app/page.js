import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername.toLowerCase()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getBlogs();
  
  return (
    <main className="min-h-screen relative mx-auto px-8 lg:max-w-[1440px] w-full">
      {/* Introduction */}
      <HeroSection />

      {/* Chapter 01: The Beginning */}
      <AboutSection />

      {/* Chapter 02: Skill Tree (What I've learned) */}
      <Skills />

      {/* Chapter 03: Artifacts (What I've built) */}
      <Projects />

      {/* Chapter 04: Battle Record (Where I've fought) */}
      <Experience />

      {/* Chapter 05: Lore Scrolls (Formal training) */}
      <Education />

      {/* Chapter 06: Fresh Brews (Blog posts) */}
      <Blog blogs={blogs} />

      {/* Chapter 07: The Next Quest (Contact) */}
      <ContactSection />
    </main>
  )
};