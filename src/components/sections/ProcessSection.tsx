import { developmentProcess } from '../../data/process'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="bg-canvas px-4 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Development Process / 05" title="아이디어를 끝까지 동작하게 만드는 과정" titleId="process-title" />
          </div>
          <p className="max-w-md border-l border-web pl-5 text-base leading-8 text-muted lg:col-span-4 lg:col-start-9">
            좋은 아이디어를 떠올리는 것보다, 그 아이디어가 실제로 동작하도록 끝까지 구현하는 과정을 중요하게 생각합니다.
          </p>
        </div>

        <ol className="mt-16 border-t border-ink/20">
          {developmentProcess.map((step, index) => (
            <li
              key={step.number}
              className={`grid gap-4 border-b border-ink/20 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-x-8 ${index % 2 === 1 ? 'sm:pl-8 lg:pl-16' : ''}`}
            >
              <span className="font-mono text-[10px] text-web sm:col-span-1">{step.number}</span>
              <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-ink sm:col-span-4">{step.title}</h3>
              <p className="max-w-xl text-sm leading-7 text-muted sm:col-span-6">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
