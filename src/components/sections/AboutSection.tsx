import { MousePointerClick, PackageCheck, Wrench } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const characteristics = [
  {
    title: 'Interactive',
    description: '사용자가 직접 움직이고 선택하며 반응을 경험할 수 있는 기능을 구현합니다.',
    icon: MousePointerClick,
    accent: 'text-unity border-unity/25',
  },
  {
    title: 'Product',
    description: '아이디어를 단순한 연습 코드가 아닌 실제 사용 가능한 결과물로 발전시킵니다.',
    icon: PackageCheck,
    accent: 'text-web border-web/25',
  },
  {
    title: 'Problem Solving',
    description: '개발 과정에서 발생하는 오류와 구조적 문제를 분석하고 해결합니다.',
    icon: Wrench,
    accent: 'text-[#d6b26e] border-[#d6b26e]/25',
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About / 01" title="아이디어를 실제 경험으로 구현합니다." titleId="about-title" />
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span className="h-px w-10 bg-gradient-to-r from-unity to-web" />
              One experience, two platforms
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
              저는 새로운 아이디어를 실제로 동작하는 결과물로 구현하는 과정을 좋아합니다.
            </p>
            <p>
              Unity에서는 캐릭터와 오브젝트가 상호작용하는 게임을 만들고, 웹에서는 사용자가 직접 이용할 수 있는 서비스를 개발합니다.
            </p>
            <p>
              기획, UI 구성, 기능 구현, 데이터 관리, 배포까지 전 과정을 경험하며 단순히 기능이 작동하는 것을 넘어 사용자가 자연스럽게 사용할 수 있는 흐름을 고민합니다.
            </p>
            <blockquote className="border-l-2 border-web/60 bg-white/[0.025] px-5 py-4 text-base leading-7 text-ink/90">
              코드를 작성하는 것에서 끝나지 않고, 사용자가 실제로 클릭하고 움직이고 경험할 수 있는 결과물을 만드는 것을 중요하게 생각합니다.
            </blockquote>
          </div>
        </div>

        <div className="mt-16 grid border-l border-t border-white/8 md:grid-cols-3">
          {characteristics.map((item, index) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group border-b border-r border-white/8 bg-canvas/30 p-6 transition hover:bg-white/[0.025] sm:p-8">
                <div className="flex items-start justify-between">
                  <span className={`grid size-11 place-items-center border ${item.accent}`}>
                    <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
