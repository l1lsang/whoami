import { useState } from 'react'
import { InlineStage } from '../components/shapes/InlineStage'
import { projects, type Project, type ProjectId } from '../data/projects'

// 대표 프로젝트의 구조: 화면 → 서버 → 데이터
function StackFlow() {
  return (
    <div className="stack-flow">
      <p className="stack-flow-line">React → Spring Boot → PostgreSQL</p>
      <p>Docker로 개발 환경을 구성하고, 프론트엔드는 Vercel, 백엔드는 AWS EC2에 배포합니다.</p>
    </div>
  )
}

// 펼쳤을 때만 내용을 그립니다. 닫힌 내용이 보이지 않는 자리를 차지하지 않도록요.
function ProjectDetails({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <details className="bar" open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>자세히 보기</summary>
      {open && (
        <div className="bar-body">
          <p>{project.description}</p>

          <h4>시작한 이유</h4>
          <p>{project.background}</p>

          <h4>주요 기능</h4>
          <ul className="features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {project.problems && (
            <>
              <h4>문제와 해결</h4>
              {project.problems.map((item) => (
                <div key={item.problem} className="problem">
                  <p>
                    <strong>문제</strong> {item.problem}
                  </p>
                  <p>
                    <strong>해결</strong> {item.solution}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </details>
  )
}

function ProjectArticle({ project }: { project: Project }) {
  const titleId = `${project.id}-title`
  const shots = project.screenshots ?? []

  return (
    <article id={project.id} data-step={project.id} className="step project" aria-labelledby={titleId}>
      <h3 id={titleId}>{project.title}</h3>
      <InlineStage formation={project.id} />
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-summary">{project.summary}</p>

      {project.featured && <StackFlow />}

      {shots.length > 0 && (
        <div className={`shots shots-${shots.length}`}>
          {shots.map((shot) => (
            <figure key={shot.src}>
              <a href={shot.src} target="_blank" rel="noreferrer">
                <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
              </a>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <dl className="facts">
        <div>
          <dt>역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>기술</dt>
          <dd>{project.techStack.join(', ')}</dd>
        </div>
        <div>
          <dt>상태</dt>
          <dd>{project.status}</dd>
        </div>
      </dl>

      {(project.githubUrl || project.demoUrl) && (
        <div className="actions">
          {project.demoUrl && (
            <a className="button" href={project.demoUrl} target="_blank" rel="noreferrer">
              서비스 열기
            </a>
          )}
          {project.githubUrl && (
            <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub 저장소
            </a>
          )}
        </div>
      )}

      <ProjectDetails project={project} />
    </article>
  )
}

type ProjectsProps = {
  onPreview: (id: ProjectId | null) => void // 목록에서 가리킨 프로젝트를 스테이지에 미리 보여 줍니다
}

function Projects({ onPreview }: ProjectsProps) {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects-intro">
        <h2 id="projects-title">만든 것들</h2>
        <p className="lead">지금 가장 집중하는 프로젝트부터 차례로 소개합니다.</p>
        <ol className="ledger" onMouseLeave={() => onPreview(null)}>
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                onMouseEnter={() => onPreview(project.id)}
                onFocus={() => onPreview(project.id)}
                onBlur={() => onPreview(null)}
              >
                <span className="ledger-name">{project.title}</span>
                <span className="ledger-kind">{project.kind}</span>
                <span className="ledger-status">{project.status}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
      {projects.map((project) => (
        <ProjectArticle key={project.id} project={project} />
      ))}
    </section>
  )
}

export default Projects
