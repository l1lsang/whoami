import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const characteristics = [
  {
    title: 'Interactive',
    description: '사용자가 직접 움직이고 선택하며 반응을 경험할 수 있는 기능을 구현합니다.',
    layout: 'md:col-span-9',
  },
  {
    title: 'Product',
    description: '아이디어를 단순한 연습 코드가 아닌 실제 사용 가능한 결과물로 발전시킵니다.',
    layout: 'md:col-span-8 md:col-start-5',
  },
  {
    title: 'Problem Solving',
    description: '개발 과정에서 발생하는 오류와 구조적 문제를 분석하고 해결합니다.',
    layout: 'md:col-span-10 md:col-start-2',
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 bg-surface px-4 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="About / 02" title="아이디어를 실제 경험으로 구현합니다." titleId="about-title" />
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">One experience / two platforms</p>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-10 tracking-[-0.02em] text-ink sm:text-3xl sm:leading-[1.4]">
              저는 새로운 아이디어를 실제로 동작하는 결과물로 구현하는 과정을 좋아합니다.
            </p>
            <p>
              Unity에서는 캐릭터와 오브젝트가 상호작용하는 게임을 만들고, 웹에서는 사용자가 직접 이용할 수 있는 서비스를 개발합니다.
            </p>
            <p>
              기획, UI 구성, 기능 구현, 데이터 관리, 배포까지 전 과정을 경험하며 단순히 기능이 작동하는 것을 넘어 사용자가 자연스럽게 사용할 수 있는 흐름을 고민합니다.
            </p>
            <blockquote className="mt-8 border-l-2 border-web pl-6 text-base leading-8 text-ink">
              코드를 작성하는 것에서 끝나지 않고, 사용자가 실제로 클릭하고 움직이고 경험할 수 있는 결과물을 만드는 것을 중요하게 생각합니다.
            </blockquote>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12">
          {characteristics.map((item, index) => (
            <article key={item.title} className={`grid gap-4 border-t border-ink/20 py-8 md:grid-cols-[80px_200px_1fr] md:items-baseline ${item.layout}`}>
              <span className="font-mono text-[10px] text-web">0{index + 1}</span>
              <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-ink">{item.title}</h3>
              <p className="max-w-md text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
