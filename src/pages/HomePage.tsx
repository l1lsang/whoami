import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { Reveal } from '../components/ui/Reveal'
import '../styles/motion.css'

export function HomePage() {
  return (
    <main id="main-content" className="portfolio-home" tabIndex={-1}>
      <HeroSection />
      <Reveal className="craft-ribbon">
        <div className="craft-ribbon-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="craft-ribbon-group" key={copy}>
              <span>THOUGHTFUL DESIGN</span>
              <i>✳</i>
              <span>MEANINGFUL INTERACTION</span>
              <i>✳</i>
              <span>CAREFUL DEVELOPMENT</span>
              <i>✳</i>
            </div>
          ))}
        </div>
      </Reveal>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
