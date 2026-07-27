import { Braces, CodeXml, Database, Gamepad2 } from 'lucide-react'
import { skillGroups, type SkillGroupId } from '../../data/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const skillIcons = {
  unity: Gamepad2,
  frontend: CodeXml,
  backend: Database,
  tools: Braces,
} satisfies Record<SkillGroupId, typeof Gamepad2>

const skillAccents = {
  unity: 'text-unity border-unity/25',
  frontend: 'text-web border-web/25',
  backend: 'text-web border-web/25',
  tools: 'text-[#d6b26e] border-[#d6b26e]/25',
} satisfies Record<SkillGroupId, string>

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 border-y border-white/8 bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Capabilities / 03"
              title="기술보다, 기술로 구현하는 경험"
              titleId="skills-title"
              description="숙련도를 숫자로 표현하기보다 각 기술을 연결해 실제로 무엇을 만들 수 있는지 보여드립니다."
            />
            <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-unity via-web to-transparent lg:block" aria-hidden="true" />
          </div>

          <div className="grid border-l border-t border-white/8 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[group.id]
              return (
                <article key={group.id} className="border-b border-r border-white/8 bg-canvas/30 p-6 transition hover:bg-white/[0.02] sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`grid size-11 place-items-center border ${skillAccents[group.id]}`}>
                      <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-ink">{group.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-7 text-muted">{group.description}</p>
                  <ul className="mt-6 space-y-3" aria-label={`${group.title} 역량`}>
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/80">
                        <span className={`mt-2.5 size-1 flex-none ${group.id === 'unity' ? 'bg-unity' : group.id === 'tools' ? 'bg-[#d6b26e]' : 'bg-web'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
