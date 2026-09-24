import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { InternalLink } from '../ui/InternalLink'
import { Reveal } from '../ui/Reveal'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-container projects-section section-rule"
    >
      <Reveal className="section-grid section-heading">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <div className="projects-heading">
          <h2 id="projects-title">
            Selected Projects<span className="accent-dot">.</span>
          </h2>
          <span>IDEAS INTO REALITY ↗</span>
        </div>
      </Reveal>
      {projects.slice(0, 2).map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
      <div className="more-projects">
        <Reveal>
          <h3>
            More projects <span>03</span>
          </h3>
        </Reveal>
        {projects.slice(2).map((project, index) => (
          <Reveal key={project.slug} delay={index * 60}>
            <article className="project-row">
              <span className="project-number">0{index + 3}</span>
              <div className="project-row-title">
                <InternalLink href={'/projects/' + project.slug}>
                  <h4>{project.title}</h4>
                </InternalLink>
                <p>{project.subtitle}</p>
              </div>
              <div className="project-row-tech">
                <p>{project.techStack.slice(0, 3).join(' / ')}</p>
                <span>{project.category}</span>
              </div>
              <div className="project-row-links">
                <InternalLink
                  href={'/projects/' + project.slug}
                  className="text-link"
                  ariaLabel={project.title + ' 상세 보기'}
                >
                  View project <ArrowUpRight size={13} />
                </InternalLink>
                <a
                  className="text-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title + ' GitHub 새 창에서 열기'}
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
