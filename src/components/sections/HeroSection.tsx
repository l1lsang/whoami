import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { GitHubIcon } from '../ui/GitHubIcon'
import { InternalLink } from '../ui/InternalLink'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="border-b border-ink/20 bg-canvas pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid grid-cols-4 gap-x-4 sm:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-full flex items-center justify-between border-t border-ink/20 pt-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-web">01 / Portfolio</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{portfolioConfig.role}</p>
          </div>

          <h1
            id="hero-title"
            className="col-span-full mt-12 max-w-5xl font-display text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.06em] text-ink lg:col-span-9"
          >
            게임과 웹을 넘나들며
            <br />
            사용자가 직접 <span className="inline-block whitespace-nowrap"><span className="text-unity">경험</span>하는</span>
            <br />
            서비스를 만듭니다.
          </h1>

          <div className="col-span-4 col-start-1 mt-10 sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10 lg:mt-16 lg:self-end">
            <p className="text-base leading-8 text-muted">
              Unity와 C#으로 인터랙티브 콘텐츠를 개발하고, React와 Firebase로 실제 사용 가능한 웹 서비스를 구현합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={portfolioConfig.resumePath}
                download={portfolioConfig.resumeFilename}
                className="group inline-flex min-h-12 items-center gap-2 bg-ink px-5 text-sm font-semibold text-panel transition-colors duration-200 hover:bg-web focus:outline-none focus-visible:ring-2 focus-visible:ring-unity focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                aria-label="장경민 이력서 PDF 다운로드"
              >
                <Download aria-hidden="true" size={16} />
                이력서 다운로드
              </a>
              <InternalLink
                href="/#projects"
                className="group inline-flex min-h-12 items-center gap-2 border-b border-ink/30 text-sm font-semibold text-ink transition-colors duration-200 hover:border-web hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              >
                프로젝트 보기
                <ArrowRight aria-hidden="true" size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </InternalLink>
            </div>
          </div>

          <div className="col-span-3 col-start-1 mt-16 hidden self-end lg:block">
            <p className="max-w-xs border-l border-web pl-4 text-sm leading-7 text-muted">
              기획에서 배포까지, 아이디어를 사용자가 클릭하고 움직일 수 있는 결과물로 완성합니다.
            </p>
            <a
              href={portfolioConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
            >
              <GitHubIcon aria-hidden="true" size={16} />
              GitHub 방문
            </a>
          </div>

          <div className="col-span-full mt-12 lg:col-span-9 lg:col-start-4 lg:mt-16">
            <HeroVisual />
          </div>

          <InternalLink
            href="/#about"
            className="col-span-full mt-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web lg:col-start-4"
          >
            Scroll to explore <ArrowDown aria-hidden="true" size={16} />
          </InternalLink>
        </div>
      </div>
    </section>
  )
}
