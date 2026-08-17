import { ArrowUpRight, Download } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-ink px-4 py-20 text-panel sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8ab8a4]">Contact / 06</p>
            <h2 id="contact-title" className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              새로운 경험을
              <br />
              함께 만들고 싶습니다.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
              Unity 게임 개발, 웹 서비스 개발, 인터랙티브 프로젝트에 관심이 있습니다. 프로젝트 또는 협업에 관한 이야기를 편하게 남겨주세요.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">Email</p>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="group mt-3 flex items-end justify-between gap-4 border-b border-white/30 pb-4 text-lg transition-colors duration-200 hover:border-unity hover:text-unity focus:outline-none focus-visible:ring-2 focus-visible:ring-unity"
            >
              <span className="min-w-0 break-all">{portfolioConfig.email}</span>
              <ArrowUpRight aria-hidden="true" size={20} className="flex-none transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={portfolioConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ab8a4]"
                aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
              >
                <GitHubIcon aria-hidden="true" size={16} />
                GitHub
              </a>
              {portfolioConfig.resumePath ? (
                <a
                  href={portfolioConfig.resumePath}
                  download={portfolioConfig.resumeFilename}
                  className="inline-flex min-h-12 items-center gap-2 bg-unity px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#ba452c] focus:outline-none focus-visible:ring-2 focus-visible:ring-unity focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  aria-label={`${portfolioConfig.name} 이력서 PDF 다운로드`}
                >
                  <Download aria-hidden="true" size={16} /> 이력서 다운로드
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
