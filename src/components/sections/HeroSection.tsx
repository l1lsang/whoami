import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'
import { Magnetic } from '../ui/Magnetic'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero paper">
      <div className="section-container hero-layout">
        <div className="hero-main">
          <h1 id="hero-title" className="hero-title hero-enter">
            IDEAS<br />
            TO LIFE<span className="hero-period">.</span>
          </h1>
          <p className="hero-intro hero-enter">
            아이디어를 살아 있는 경험으로.<br />
            프론트엔드 개발자 <strong>장경민</strong>입니다.
          </p>
          <div className="hero-links hero-enter">
            <Magnetic>
              <InternalLink className="button-primary" href="/#projects">
                프로젝트 보기 <ArrowDownRight size={22} aria-hidden="true" />
              </InternalLink>
            </Magnetic>
            <a className="text-link" href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroVisual />
          <InternalLink className="hello-sticker" href="/#contact" ariaLabel="연락처로 이동">
            LET’S<br />TALK <ArrowUpRight size={28} aria-hidden="true" />
          </InternalLink>
        </div>
      </div>
    </section>
  )
}
