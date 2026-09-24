import { ArrowDown, ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero section-container"
    >
      <HeroVisual />
      <div className="hero-main">
        <p className="eyebrow hero-enter">
          <span className="status-dot" /> FRONTEND DEVELOPER
        </p>
        <h1 id="hero-title" className="hero-name hero-enter">
          장경민<span className="name-period">.</span>
        </h1>
        <p className="hero-statement hero-enter">
          사용자의 경험을 고민하고,
          <br />
          아이디어를 실제 서비스로
          <br />
          구현하는 프론트엔드 개발자.
        </p>
        <div className="hero-links hero-enter">
          <a
            className="text-link"
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
          <InternalLink className="text-link" href="/#projects">
            Projects <ArrowDown size={15} />
          </InternalLink>
          <InternalLink className="text-link" href="/#contact">
            Contact <ArrowUpRight size={15} />
          </InternalLink>
        </div>
      </div>
      <div className="hero-description hero-enter">
        <span className="hero-asterisk" aria-hidden="true">
          ✳
        </span>
        <p>
          React와 TypeScript를 중심으로 웹 서비스를 개발하며,
          <br className="desktop-break" /> UI뿐 아니라 데이터 흐름과 서비스
          구조까지 이해하고
          <br className="desktop-break" /> 사용자에게 자연스러운 경험을 만드는
          것을 목표로 합니다.
        </p>
        <a
          className="resume-link text-link"
          href={portfolioConfig.resumePath}
          download={portfolioConfig.resumeFilename}
        >
          <Download size={14} /> 이력서 다운로드 <span>PDF</span>
        </a>
      </div>
      <div className="hero-bottom" aria-hidden="true">
        <span>THOUGHTFUL INTERFACES. USEFUL EXPERIENCES.</span>
        <ArrowDownRight size={21} />
      </div>
    </section>
  )
}
