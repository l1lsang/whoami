import { ArrowRight, CheckCircle2, Clock3, ExternalLink } from 'lucide-react'
import type { Project, ProjectAccent } from '../../data/projects'
import { GitHubIcon } from '../ui/GitHubIcon'
import { InternalLink } from '../ui/InternalLink'
import { ProjectVisual } from './ProjectVisual'

type ProjectCardProps = {
  project: Project
  index: number
  featured?: boolean
}

const accentStyles = {
  unity: {
    label: 'text-unity',
    border: 'hover:border-unity/45',
    tag: 'border-unity/30 bg-unity/[0.04] text-unity',
  },
  web: {
    label: 'text-web',
    border: 'hover:border-web/40',
    tag: 'border-web/25 bg-web/[0.04] text-web',
  },
  bot: {
    label: 'text-[#d6b26e]',
    border: 'hover:border-[#d6b26e]/40',
    tag: 'border-[#d6b26e]/20 bg-[#d6b26e]/[0.06] text-[#d6b26e]',
  },
} satisfies Record<ProjectAccent, { label: string; border: string; tag: string }>

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const accent = accentStyles[project.accent]
  const isCompleted = project.status === 'Completed'

  return (
    <article className={`group overflow-hidden border border-white/10 bg-panel transition duration-300 ${accent.border} ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={featured ? 'grid min-h-full lg:grid-cols-[1.08fr_0.92fr]' : 'flex h-full flex-col'}>
        <ProjectVisual project={project} className={featured ? 'min-h-[300px] lg:min-h-[420px]' : 'aspect-[16/10]'} />

        <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8 lg:p-10' : 'p-6 sm:p-7'}`}>
          <div className="flex items-center justify-between gap-4">
            <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${accent.label}`}>
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-muted">0{index + 1}</span>
          </div>

          <h3 className={`mt-6 font-semibold leading-tight tracking-[-0.03em] text-ink ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} 핵심 기술`}>
            {project.techStack.slice(0, featured ? 5 : 3).map((tech) => (
              <li key={tech} className={`border px-2.5 py-1 font-mono text-[10px] ${accent.tag}`}>
                {tech}
              </li>
            ))}
          </ul>

          {featured ? (
            <p className="mt-6 border-l border-white/12 pl-4 text-sm leading-6 text-muted transition duration-300 group-hover:border-white/25 group-hover:text-ink">
              {project.description}
            </p>
          ) : null}

          <div className="mt-auto pt-8">
            <div className="flex items-center gap-2 text-xs text-muted">
              {isCompleted ? <CheckCircle2 aria-hidden="true" size={15} className="text-web" /> : <Clock3 aria-hidden="true" size={15} className="text-[#d6b26e]" />}
              <span>{project.status}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 border border-white/12 px-3.5 text-xs font-medium text-ink transition hover:border-white/30 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                  aria-label={`${project.title} GitHub 새 창에서 열기`}
                >
                  <GitHubIcon aria-hidden="true" size={15} /> GitHub
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 border border-white/12 px-3.5 text-xs font-medium text-ink transition hover:border-white/30 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                  aria-label={`${project.title} 데모 새 창에서 열기`}
                >
                  <ExternalLink aria-hidden="true" size={14} /> Demo
                </a>
              ) : null}
              <InternalLink
                href={`/projects/${project.slug}`}
                className="ml-auto inline-flex min-h-10 items-center gap-2 px-1 text-xs font-semibold text-ink transition focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                ariaLabel={`${project.title} 상세 보기`}
              >
                자세히 보기
                <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
