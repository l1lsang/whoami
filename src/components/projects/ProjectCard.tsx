import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { InternalLink } from '../ui/InternalLink'
import { Reveal } from '../ui/Reveal'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={'project-card project-card-' + index} delay={index * 100}>
      <article>
        <div className="project-preview-wrap">
          <ProjectVisual project={project} />
        </div>
        <div className="project-copy">
          <div className="project-title-row">
            <h3>{project.title}</h3>
            <InternalLink href={'/projects/' + project.slug} className="round-link" ariaLabel={project.title + ' 상세 보기'}>
              <ArrowUpRight size={28} aria-hidden="true" />
            </InternalLink>
          </div>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-summary">{project.summary}</p>
          <ul className="tech-tags" aria-label={project.title + ' 핵심 기술'}>
            {project.techStack.slice(0, 3).map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
          <div className="project-actions">
            <InternalLink href={'/projects/' + project.slug} className="text-link">
              프로젝트 보기 <ArrowUpRight size={18} aria-hidden="true" />
            </InternalLink>
            {project.githubUrl ? (
              <a href={project.githubUrl} className="text-link" target="_blank" rel="noreferrer" aria-label={project.title + ' GitHub 새 창에서 열기'}>
                GitHub <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
