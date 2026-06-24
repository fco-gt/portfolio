import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
