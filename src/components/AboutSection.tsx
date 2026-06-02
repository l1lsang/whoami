import { aboutParagraphs } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="화면과 현실을 함께 이해하는 개발자"
          titleId="about-title"
          description="웹 서비스의 사용자 경험과 임베디드 시스템의 실제 동작 사이를 연결하는 방향으로 성장하고 있습니다."
        />
        <div className="mx-auto max-w-4xl rounded-[8px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
