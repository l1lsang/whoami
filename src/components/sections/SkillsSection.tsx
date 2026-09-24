import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { Reveal } from '../ui/Reveal'

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-container skills-section section-rule"
    >
      <Reveal className="section-grid section-heading">
        <p className="eyebrow">02 / CAPABILITIES</p>
        <h2 id="skills-title">
          Tools for building<span className="accent-dot">.</span>
        </h2>
      </Reveal>
      <Reveal className="primary-skills section-grid">
        <p className="eyebrow">PRIMARY / FRONTEND</p>
        <div className="primary-skill-list">
          <span>React</span>
          <i>/</i>
          <span>TypeScript</span>
          <i>/</i>
          <span>JavaScript</span>
        </div>
        <span className="skills-orbit" aria-hidden="true">
          ✳
        </span>
      </Reveal>
      <div className="skill-rows">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 70}
            className="skill-row section-grid"
          >
            <h3>{group.title}</h3>
            <div className="skill-detail">
              <p>{group.items.join(' / ')}</p>
              <span>{group.description}</span>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
