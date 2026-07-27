import { Bug, DraftingCompass, Lightbulb, PackageCheck, PanelsTopLeft, Rocket } from 'lucide-react'
import { developmentProcess } from '../../data/process'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const processIcons = [Lightbulb, DraftingCompass, PanelsTopLeft, PackageCheck, Bug, Rocket]

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="bg-canvas px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading
            eyebrow="Development Process / 04"
            title="아이디어를 끝까지 동작하게 만드는 과정"
            titleId="process-title"
          />
          <p className="border-l border-web/50 pl-5 text-base leading-8 text-muted lg:mb-1">
            좋은 아이디어를 떠올리는 것보다, 그 아이디어가 실제로 동작하도록 끝까지 구현하는 과정을 중요하게 생각합니다.
          </p>
        </div>

        <ol className="relative mt-16 grid border-l border-t border-white/8 md:grid-cols-2 lg:grid-cols-3">
          {developmentProcess.map((step, index) => {
            const Icon = processIcons[index]
            return (
              <li key={step.number} className="group relative min-h-56 border-b border-r border-white/8 bg-surface/50 p-6 transition hover:bg-white/[0.025] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-web">STEP {step.number}</span>
                  <Icon aria-hidden="true" size={19} strokeWidth={1.5} className={index < 3 ? 'text-unity/80' : 'text-web/80'} />
                </div>
                <h3 className="mt-10 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                <span className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${index < 3 ? 'bg-unity/60' : 'bg-web/60'}`} aria-hidden="true" />
              </li>
            )
          })}
        </ol>
      </Reveal>
    </section>
  )
}
