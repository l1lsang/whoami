import { ArrowDown, ArrowRight } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { GitHubIcon } from '../ui/GitHubIcon'
import { InternalLink } from '../ui/InternalLink'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-white/8 bg-canvas pt-[72px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-px bg-white/[0.04] lg:left-[7%]" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/[0.04] lg:right-[7%]" />
        <div className="absolute left-[7%] top-[24%] size-1 bg-unity/80" />
        <div className="absolute bottom-[18%] right-[7%] size-1 bg-web/80" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-unity to-web" aria-hidden="true" />
            {portfolioConfig.role}
          </p>
          <h1 id="hero-title" className="mt-7 text-[clamp(2rem,6vw,5.4rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-ink">
            게임과 웹을 넘나들며
            <br />
            사용자가 직접 <span className="text-unity">경험</span>하는
            <br />
            서비스를 만듭니다.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Unity와 C#으로 인터랙티브 콘텐츠를 개발하고,
            <br className="hidden sm:block" /> React와 Firebase를 활용해 실제 사용 가능한 웹 서비스를 구현합니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <InternalLink
              href="/#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-canvas transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-web focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              프로젝트 보기
              <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
            </InternalLink>
            <a
              href={portfolioConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/15 bg-white/[0.025] px-6 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
            >
              <GitHubIcon aria-hidden="true" size={17} />
              GitHub 방문
            </a>
          </div>
          <p className="mt-10 max-w-lg border-l border-web/50 pl-4 text-sm leading-6 text-muted">
            기획에서 배포까지, 아이디어를 사용자가 클릭하고 움직일 수 있는 결과물로 완성합니다.
          </p>
        </div>

        <HeroVisual />

        <InternalLink
          href="/#about"
          className="absolute bottom-7 left-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web lg:flex"
        >
          Scroll to explore <ArrowDown aria-hidden="true" size={13} />
        </InternalLink>
      </div>
    </section>
  )
}
