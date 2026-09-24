import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { ProjectVisual } from '../components/projects/ProjectVisual'
import { GitHubIcon } from '../components/ui/GitHubIcon'
import { InternalLink } from '../components/ui/InternalLink'
import type { Project } from '../data/projects'

type ProjectDetailPageProps = {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const hasRetrospective = project.challenges.length > 0 && project.solutions.length > 0

  return (
    <main className="bg-canvas pt-16">
      <article>
        <header className="border-b border-ink/20 px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="border-t border-ink/20 pt-4">
              <InternalLink
                href="/#projects"
                className="group inline-flex min-h-10 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              >
                <ArrowLeft aria-hidden="true" size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
                프로젝트 목록으로
              </InternalLink>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-web">{project.category}</p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
              </div>
              <div className="lg:col-span-3 lg:col-start-10 lg:self-end">
                <p className="font-display text-xl leading-8 tracking-[-0.02em] text-ink">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                  {project.techStack.map((tech, index) => (
                    <span key={tech} className="flex items-center gap-3">
                      {index > 0 ? <span className="text-ink/30">/</span> : null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-10 lg:col-start-3">
                <ProjectVisual project={project} className="aspect-[16/9]" />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7 lg:col-start-2">
            <section aria-labelledby="overview-title" className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-web">01 / Overview</p>
              <div>
                <h2 id="overview-title" className="font-display text-4xl font-medium tracking-[-0.04em] text-ink">프로젝트 개요</h2>
                <p className="mt-6 text-base leading-8 text-muted">{project.description}</p>
              </div>
            </section>

            <section aria-labelledby="background-title" className="mt-16 grid gap-4 border-t border-ink/20 pt-16 sm:grid-cols-[80px_1fr]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-web">02 / Background</p>
              <div>
                <h2 id="background-title" className="font-display text-4xl font-medium tracking-[-0.04em] text-ink">개발 배경</h2>
                <p className="mt-6 text-base leading-8 text-muted">{project.background}</p>
              </div>
            </section>

            <section aria-labelledby="features-title" className="mt-16 border-t border-ink/20 pt-16">
              <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-web">03 / Features</p>
                <h2 id="features-title" className="font-display text-4xl font-medium tracking-[-0.04em] text-ink">주요 기능</h2>
              </div>
              <ol className="mt-8 grid border-t border-ink/15 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={feature} className="grid min-h-16 grid-cols-[32px_1fr] items-start gap-3 border-b border-ink/15 py-4 text-sm leading-6 text-ink/80 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    <span className="font-mono text-[9px] text-unity">{String(index + 1).padStart(2, '0')}</span>
                    {feature}
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="retrospective-title" className="mt-16 border-t border-ink/20 pt-16">
              <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-web">04 / Review</p>
                <h2 id="retrospective-title" className="font-display text-4xl font-medium tracking-[-0.04em] text-ink">문제와 해결</h2>
              </div>
              {hasRetrospective ? (
                <div className="mt-8 border-t border-ink/20">
                  {project.challenges.map((challenge, index) => (
                    <div key={challenge} className="grid gap-6 border-b border-ink/20 py-8 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Challenge</p>
                        <p className="mt-3 text-sm leading-7 text-ink/80">{challenge}</p>
                      </div>
                      <div className="border-l border-web pl-6">
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-web">Solution</p>
                        <p className="mt-3 text-sm leading-7 text-ink/80">{project.solutions[index]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 border-y border-ink/20 py-6 text-sm leading-7 text-muted">
                  추후 프로젝트 회고 내용을 추가할 예정입니다. 확인되지 않은 문제 해결 사례는 작성하지 않았습니다.
                </div>
              )}
            </section>
          </div>

          <aside className="lg:col-span-3 lg:col-start-10 lg:sticky lg:top-28 lg:self-start" aria-label="프로젝트 정보">
            <div className="border-t border-ink/30 pt-4">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Project Information</h2>
              <dl className="mt-6">
                <div className="border-b border-ink/15 py-5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Status</dt>
                  <dd className="mt-2 text-sm font-medium text-web">{project.status}</dd>
                </div>
                <div className="border-b border-ink/15 py-5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Role</dt>
                  <dd className="mt-2 text-sm leading-7 text-ink/80">{project.role}</dd>
                </div>
                <div className="border-b border-ink/15 py-5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Tech Stack</dt>
                  <dd className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs text-ink/80">
                    {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 space-y-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 bg-ink px-4 text-sm font-semibold text-panel transition-colors duration-200 hover:bg-web focus:outline-none focus-visible:ring-2 focus-visible:ring-unity"
                  >
                    <GitHubIcon aria-hidden="true" size={16} /> GitHub 보기 <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 border border-ink/25 px-4 text-sm font-semibold text-ink transition-colors duration-200 hover:border-web hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                  >
                    데모 보기 <ArrowRight aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </aside>

          <div className="border-t border-ink/20 pt-8 lg:col-span-11 lg:col-start-2">
            <InternalLink
              href="/#projects"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
            >
              <ArrowLeft aria-hidden="true" size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              프로젝트 목록으로 돌아가기
            </InternalLink>
          </div>
        </div>
      </article>
    </main>
  )
}
