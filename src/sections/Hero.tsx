import { InlineStage } from '../components/shapes/InlineStage'
import { Arrow } from '../components/ui/Arrow'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="top" data-step="hero" className="step hero" aria-labelledby="hero-title">
      <InlineStage formation="hero" className="stage-hero" />

      <div className="hero-copy">
        <h1 id="hero-title">
          프론트엔드 개발자
          <br />
          {profile.name}
        </h1>
        <p className="hero-lead">
          React 화면부터 Spring Boot 서버, PostgreSQL 데이터베이스와 배포까지. 흩어진 조각을 하나의 서비스로
          조립합니다.
        </p>
        <div className="actions">
          <a className="button" href="#projects">
            프로젝트 보기 <Arrow direction="down-right" />
          </a>
          <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
