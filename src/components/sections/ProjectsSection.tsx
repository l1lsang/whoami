import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 bg-canvas px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Projects / 02"
            title="플레이와 서비스, 경험을 완성한 프로젝트"
            titleId="projects-title"
            description="게임의 즉각적인 피드백부터 웹 서비스의 데이터 흐름까지, 서로 다른 환경에서 사용자가 직접 경험하는 결과물을 만들었습니다."
          />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Selected work · 04</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} featured={index < 2} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
