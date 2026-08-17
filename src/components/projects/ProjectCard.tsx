import { ArrowRight, CheckCircle2, Clock3, ExternalLink } from 'lucide-react'
import type { Project } from '../../data/projects'
import { GitHubIcon } from '../ui/GitHubIcon'
import { InternalLink } from '../ui/InternalLink'
import { ProjectVisual } from './ProjectVisual'

type ProjectCardProps = {
  project: Project
  index: number
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, index, featured = false, className = '' }: ProjectCardProps) {
  const isCompleted = project.status === 'Completed'

  return (
    <article className={`group border-t border-ink/30 pt-4 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-web">{project.category}</span>
        <span className="font-mono text-[10px] text-muted">0{index + 1} / 04</span>
      </div>

      <div className={`mt-4 ${featured ? 'grid gap-8 lg:grid-cols-[1.28fr_0.72fr] lg:items-stretch' : ''}`}>
        <ProjectVisual project={project} className={featured ? 'min-h-[320px] lg:min-h-[480px]' : 'aspect-[16/10] border border-ink/20'} />

        <div className={`flex flex-col ${featured ? 'border-t border-ink/20 pt-6 lg:border-t-0 lg:pt-0' : 'pt-6'}`}>
          <h3 className={`font-display font-medium leading-[1.12] tracking-[-0.04em] text-ink ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted" aria-label={`${project.title} 핵심 기술`}>
            {project.techStack.slice(0, featured ? 5 : 4).map((tech, techIndex) => (
              <li key={tech} className="flex items-center gap-3">
                {techIndex > 0 ? <span aria-hidden="true" className="text-ink/30">/</span> : null}
                {tech}
              </li>
            ))}
          </ul>

          {featured ? <p className="mt-8 text-sm leading-7 text-muted">{project.description}</p> : null}

          <div className="mt-auto pt-8">
            <div className="flex items-center gap-2 text-xs text-muted">
              {isCompleted ? <CheckCircle2 aria-hidden="true" size={16} className="text-web" /> : <Clock3 aria-hidden="true" size={16} className="text-unity" />}
              <span>{project.status}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/15 pt-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-xs font-medium text-muted transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                  aria-label={`${project.title} GitHub 새 창에서 열기`}
                >
                  <GitHubIcon aria-hidden="true" size={16} /> GitHub
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-xs font-medium text-muted transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                  aria-label={`${project.title} 데모 새 창에서 열기`}
                >
                  <ExternalLink aria-hidden="true" size={16} /> Demo
                </a>
              ) : null}
              <InternalLink
                href={`/projects/${project.slug}`}
                className="group/link ml-auto inline-flex min-h-10 items-center gap-2 border-b border-ink/30 text-xs font-semibold text-ink transition-colors duration-200 hover:border-web hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                ariaLabel={`${project.title} 상세 보기`}
              >
                자세히 보기
                <ArrowRight aria-hidden="true" size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
