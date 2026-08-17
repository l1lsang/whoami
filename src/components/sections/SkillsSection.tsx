import { skillGroups } from '../../data/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16 border-y border-ink/20 bg-surface px-4 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Capabilities / 04"
              title="기술보다, 기술로 구현하는 경험"
              titleId="skills-title"
              description="숙련도를 숫자로 표현하기보다 각 기술을 연결해 실제로 무엇을 만들 수 있는지 보여드립니다."
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {skillGroups.map((group, index) => (
              <article key={group.id} className="grid gap-6 border-t border-ink/20 py-8 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:gap-8">
                <div>
                  <span className="font-mono text-[10px] text-web">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">{group.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{group.description}</p>
                </div>
                <ul className="grid content-start gap-x-6 gap-y-3 sm:grid-cols-2" aria-label={`${group.title} 역량`}>
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-ink/10 pb-3 text-sm leading-6 text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
