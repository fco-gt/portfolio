import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsList } from "@/components/skills-list";
import { ProjectsSection } from "@/components/projects-section";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="diagonal-right">
          <ExperienceSection />
        </div>
        <div className="diagonal-left">
          <SkillsList />
        </div>
        <div className="diagonal-right">
          <ProjectsSection />
        </div>
        <div className="diagonal-left">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
