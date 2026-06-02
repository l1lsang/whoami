import { skillCategories } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="기술 스택"
          titleId="skills-title"
          description="웹 화면, 서버리스 백엔드, 임베디드 제어, 개발 도구를 카테고리별로 정리했습니다."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/60"
            >
              <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${category.title} 기술 목록`}>
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
