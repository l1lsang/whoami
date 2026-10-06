import { ArrowDown, Database, Layers3, Monitor, Server } from 'lucide-react'

const layers = [
  { label: 'Frontend', name: 'React + TypeScript', detail: 'Vercel · 공간 탐색과 예약 화면', icon: Monitor },
  { label: 'Backend', name: 'Spring Boot', detail: 'AWS EC2 · Java REST API', icon: Server },
  { label: 'Database', name: 'PostgreSQL', detail: '사용자 · 공간 · 예약 데이터', icon: Database },
]

export function HansungArchitecture({ className = '' }: { className?: string }) {
  return (
    <figure className={`hansung-architecture ${className}`} aria-label="Hansung Space 시스템 구조">
      <figcaption className="architecture-heading">
        <span className="architecture-eyebrow">FULL-STACK ARCHITECTURE</span>
        <strong>HANSUNG<br />SPACE<span>.</span></strong>
        <span className="architecture-description">교내 공간을 하나의 서비스로 연결하다</span>
      </figcaption>
      <ol className="architecture-layers">
        {layers.map(({ label, name, detail, icon: Icon }, index) => (
          <li key={label}>
            {index > 0 ? <ArrowDown className="architecture-arrow" size={18} aria-hidden="true" /> : null}
            <div className="architecture-node">
              <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <span className="architecture-layer-label">0{index + 1} / {label}</span>
                <strong>{name}</strong>
                <span className="architecture-layer-detail">{detail}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="architecture-footer"><Layers3 size={17} aria-hidden="true" /> Docker 기반 개발 환경</p>
    </figure>
  )
}
