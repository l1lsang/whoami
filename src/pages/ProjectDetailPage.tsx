import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { ProjectVisual } from '../components/projects/ProjectVisual'
import { GitHubIcon } from '../components/ui/GitHubIcon'
import { InternalLink } from '../components/ui/InternalLink'
import type { Project, ProjectAccent } from '../data/projects'

type ProjectDetailPageProps = {
  project: Project
}

const accentStyles = {
  unity: { text: 'text-unity', border: 'border-unity/30', background: 'bg-unity/[0.06]' },
  web: { text: 'text-web', border: 'border-web/30', background: 'bg-web/[0.06]' },
  bot: { text: 'text-[#d6b26e]', border: 'border-[#d6b26e]/30', background: 'bg-[#d6b26e]/[0.06]' },
} satisfies Record<ProjectAccent, { text: string; border: string; background: string }>

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const accent = accentStyles[project.accent]
  const hasRetrospective = project.challenges.length > 0 && project.solutions.length > 0

  return (
    <main className="bg-canvas pt-[72px]">
      <article>
        <header className="border-b border-white/8 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <InternalLink
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
            >
              <ArrowLeft aria-hidden="true" size={16} className="transition-transform group-hover:-translate-x-1" />
              프로젝트 목록으로
            </InternalLink>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${accent.text}`}>{project.category}</p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-6xl">{project.title}</h1>
                <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">{project.subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`border px-3 py-1.5 font-mono text-[10px] ${accent.border} ${accent.background} ${accent.text}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ProjectVisual project={project} className="aspect-[16/9] border border-white/10" />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <section aria-labelledby="overview-title">
                <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${accent.text}`}>Overview / 01</p>
                <h2 id="overview-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">프로젝트 개요</h2>
                <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{project.description}</p>
              </section>

              <section aria-labelledby="background-title" className="mt-16 border-t border-white/8 pt-16">
                <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${accent.text}`}>Background / 02</p>
                <h2 id="background-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">개발 배경</h2>
                <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{project.background}</p>
              </section>

              <section aria-labelledby="features-title" className="mt-16 border-t border-white/8 pt-16">
                <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${accent.text}`}>Features / 03</p>
                <h2 id="features-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">주요 기능</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex min-h-14 items-start gap-3 border border-white/8 bg-surface/60 p-4 text-sm leading-6 text-ink/85">
                      <Check aria-hidden="true" size={15} className={`mt-1 flex-none ${accent.text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="retrospective-title" className="mt-16 border-t border-white/8 pt-16">
                <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${accent.text}`}>Problem & Solution / 04</p>
                <h2 id="retrospective-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">문제와 해결</h2>
                {hasRetrospective ? (
                  <div className="mt-7 grid gap-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={challenge} className="grid border border-white/8 sm:grid-cols-2">
                        <div className="border-b border-white/8 bg-surface/70 p-5 sm:border-b-0 sm:border-r">
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Challenge</p>
                          <p className="mt-3 text-sm leading-7 text-ink/85">{challenge}</p>
                        </div>
                        <div className={`${accent.background} p-5`}>
                          <p className={`font-mono text-[9px] uppercase tracking-[0.16em] ${accent.text}`}>Solution</p>
                          <p className="mt-3 text-sm leading-7 text-ink/85">{project.solutions[index]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-7 border border-dashed border-white/15 bg-surface/40 p-6 text-sm leading-7 text-muted">
                    추후 프로젝트 회고 내용을 추가할 예정입니다. 확인되지 않은 문제 해결 사례는 작성하지 않았습니다.
                  </div>
                )}
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="프로젝트 정보">
              <div className="border border-white/10 bg-panel p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-ink">Project Information</h2>
                <dl className="mt-7 space-y-6">
                  <div className="border-b border-white/8 pb-5">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Status</dt>
                    <dd className={`mt-2 text-sm font-medium ${accent.text}`}>{project.status}</dd>
                  </div>
                  <div className="border-b border-white/8 pb-5">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Role</dt>
                    <dd className="mt-2 text-sm leading-7 text-ink/85">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Tech Stack</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="border border-white/10 px-2.5 py-1 text-xs text-ink/80">{tech}</span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 space-y-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-12 items-center justify-center gap-2 bg-ink px-4 text-sm font-semibold text-canvas transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                    >
                      <GitHubIcon aria-hidden="true" size={17} /> GitHub 보기 <ExternalLink aria-hidden="true" size={13} />
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-12 items-center justify-center gap-2 border border-white/15 px-4 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                    >
                      데모 보기 <ArrowRight aria-hidden="true" size={15} />
                    </a>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 border-t border-white/8 pt-8">
            <InternalLink
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
            >
              <ArrowLeft aria-hidden="true" size={16} className="transition-transform group-hover:-translate-x-1" />
              프로젝트 목록으로 돌아가기
            </InternalLink>
          </div>
        </div>
      </article>
    </main>
  )
}
