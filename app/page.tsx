import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsList } from "@/components/skills-list";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsList />
      </main>
      <Footer />
    </div>
  );
}
