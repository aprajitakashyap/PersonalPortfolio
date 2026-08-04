import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ExperienceSection } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <FeaturedProject />
        <ProjectGallery />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
