import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { InternalLink } from '../ui/InternalLink'
import { Reveal } from '../ui/Reveal'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="section-container">
        <Reveal className="section-heading projects-heading">
          <h2 id="projects-title">SELECTED<br />WORK<span>.</span></h2>
          <ArrowUpRight className="section-arrow" size={112} strokeWidth={1.5} aria-hidden="true" />
        </Reveal>
        <div className="featured-projects">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="more-projects">
          <Reveal><h3>그리고, 이런 경험들도</h3></Reveal>
          {projects.slice(2).map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article className="project-row">
                <div className="project-row-title">
                  <InternalLink href={'/projects/' + project.slug}><h4>{project.title}</h4></InternalLink>
                  <p>{project.subtitle}</p>
                </div>
                <p className="project-row-tech">{project.techStack.slice(0, 3).join(' · ')}</p>
                <InternalLink href={'/projects/' + project.slug} className="round-link" ariaLabel={project.title + ' 상세 보기'}>
                  <ArrowUpRight size={26} aria-hidden="true" />
                </InternalLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
