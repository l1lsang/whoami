import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const projectLayouts = [
  'lg:col-span-10',
  'lg:col-span-7 lg:col-start-6',
  'lg:col-span-5 lg:col-start-2',
  'lg:col-span-7 lg:col-start-6',
]

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 bg-canvas px-4 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Selected Work / 03"
              title="플레이와 서비스, 경험을 완성한 프로젝트"
              titleId="projects-title"
              description="게임의 즉각적인 피드백부터 웹 서비스의 데이터 흐름까지, 서로 다른 환경에서 사용자가 직접 경험하는 결과물을 만들었습니다."
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted lg:col-span-3 lg:col-start-10 lg:text-right">Projects · 04</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={index === 0}
              className={projectLayouts[index]}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
