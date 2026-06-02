import type { Project } from '../data/portfolio'
import { projects } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

type ProjectActionProps = {
  href?: string
  label: string
  projectName: string
}

function ProjectAction({ href, label, projectName }: ProjectActionProps) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-label={`${projectName} ${label} 링크 준비 중`}
        className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400"
      >
        {label}
      </button>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${projectName} ${label} 열기`}
      className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
    >
      {label}
    </a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60">
      <div>
        <h3 className="text-2xl font-bold text-slate-950">{project.name}</h3>
        <p className="mt-2 text-base leading-7 text-slate-600">{project.description}</p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} 사용 기술`}>
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-800 ring-1 ring-cyan-100"
          >
            {tech}
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3 pt-7">
        <ProjectAction href={project.githubUrl} label="GitHub" projectName={project.name} />
        <ProjectAction href={project.demoUrl} label="Demo" projectName={project.name} />
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="앞으로 채워갈 프로젝트"
          titleId="projects-title"
          description="현재는 포트폴리오 틀을 먼저 만들고, 실제 링크와 상세 결과물은 프로젝트가 정리되는 대로 추가할 수 있게 구성했습니다."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
