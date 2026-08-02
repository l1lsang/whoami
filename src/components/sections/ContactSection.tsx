import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-white/8 bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-white/10 bg-panel px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute right-0 top-0 size-40 border-b border-l border-web/10" aria-hidden="true" />
          <div className="pointer-events-none absolute right-8 top-8 size-2 bg-web/70" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-web">Contact / 05</p>
              <h2 id="contact-title" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
                새로운 경험을
                <br />
                함께 만들고 싶습니다.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Unity 게임 개발, 웹 서비스 개발, 인터랙티브 프로젝트에 관심이 있습니다. 프로젝트 또는 협업에 관한 이야기를 편하게 남겨주세요.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="group flex min-h-16 items-center justify-between border border-white/12 bg-white/[0.02] px-5 text-ink transition hover:border-web/45 hover:bg-web/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              >
                <span className="flex items-center gap-3">
                  <Mail aria-hidden="true" size={18} className="text-web" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Email</span>
                    <span className="mt-1 block text-sm font-medium">{portfolioConfig.email}</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={portfolioConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-16 items-center justify-between border border-white/12 bg-white/[0.02] px-5 text-ink transition hover:border-unity/45 hover:bg-unity/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-unity"
                aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon aria-hidden="true" size={18} className="text-unity" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-muted">GitHub</span>
                    <span className="mt-1 block text-sm font-medium">github.com/USERNAME</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              {portfolioConfig.resumePath ? (
                <a
                  href={portfolioConfig.resumePath}
                  download={portfolioConfig.resumeFilename}
                  className="flex min-h-14 items-center justify-center gap-2 bg-web px-5 text-sm font-bold text-canvas shadow-[0_0_28px_rgba(69,214,168,0.14)] transition hover:bg-[#6ee5bd] hover:shadow-[0_0_36px_rgba(69,214,168,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-web focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
                  aria-label={`${portfolioConfig.name} 이력서 PDF 다운로드`}
                >
                  <Download aria-hidden="true" size={17} /> 이력서 다운로드
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
