import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { InternalLink } from '../ui/InternalLink'
import { Reveal } from '../ui/Reveal'
import { Spotlight } from '../ui/Spotlight'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <article className="featured-project">
      <Reveal className="project-preview-wrap">
        <Spotlight>
          <ProjectVisual project={project} />
        </Spotlight>
      </Reveal>
      <Reveal delay={100} className="project-copy">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-summary">{project.summary}</p>
        <div className="project-role">
          <p>
            {index === 0 ? (
              <>
                Frontend Development /<br />
                Product Design
              </>
            ) : (
              <>
                Mobile Development /<br />
                AI Interaction Design
              </>
            )}
          </p>
        </div>
        <ul className="tech-tags" aria-label={project.title + ' 핵심 기술'}>
          {project.techStack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <InternalLink
            href={'/projects/' + project.slug}
            className="button-primary"
            ariaLabel={project.title + ' 상세 보기'}
          >
            View project <ArrowUpRight size={14} />
          </InternalLink>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="text-link"
              target="_blank"
              rel="noreferrer"
              aria-label={project.title + ' GitHub 새 창에서 열기'}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="project-platform">iOS / Android</span>
          )}
        </div>
      </Reveal>
    </article>
  )
}
