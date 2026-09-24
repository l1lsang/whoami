import { skillGroups } from '../../data/skills'
import { Reveal } from '../ui/Reveal'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="skills-section">
      <div className="section-container">
        <Reveal className="section-heading">
          <h2 id="skills-title">MY TOOLBOX<span>.</span></h2>
          <span className="toolbox-flower" aria-hidden="true">✳</span>
        </Reveal>
        <Reveal className="primary-skill-list">
          <span>React</span><span>TypeScript</span><span>JavaScript</span>
        </Reveal>
        <div className="skill-rows">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60} className="skill-row">
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
