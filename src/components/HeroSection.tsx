import { profile } from '../data/portfolio'
import { HeroGraphic } from './HeroGraphic'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-100/60 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
            Web Data Experience + Embedded Reality
          </p>
          <h1 className="mt-7 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.subheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              프로젝트 보기
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              GitHub 보기
            </a>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
