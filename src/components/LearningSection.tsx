import { learningItems } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function LearningSection() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Learning"
          title="최근 공부하는 내용"
          titleId="learning-title"
          description="웹 서비스 구현과 임베디드 제어를 함께 익히기 위해 현재 집중하고 있는 주제들입니다."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/60"
            >
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
