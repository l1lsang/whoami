import { InlineStage } from '../components/shapes/InlineStage'
import { primarySkills, skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" data-step="skills" className="step skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="giant-word">
        기술
      </h2>
      <InlineStage formation="skills" />
      <p className="lead">
        주력은 {primarySkills.join(', ')}입니다. 필요한 만큼 범위를 넓혀 갑니다.
      </p>

      <ul className="skill-bars">
        {skillGroups.map((group) => (
          <li key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-items">
              {group.items.map((item) => (
                <li key={item} className={primarySkills.includes(item) ? 'is-primary' : undefined}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
