import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section paper">
      <Reveal className="section-container about-grid">
        <h2 id="about-title">화면부터 서버까지.<br />하나의 서비스로<span className="accent-dot">.</span></h2>
        <div className="about-copy">
          <p className="about-lead">실제 문제를 해결하는 제품을 만드는<br />풀스택 개발자, 장경민입니다.</p>
          <p>React와 TypeScript로 만드는 사용자 화면부터 Spring Boot REST API, PostgreSQL 데이터베이스까지. 각 계층을 연결해 하나의 서비스가 동작하는 전체 흐름을 설계하고 구현합니다.</p>
          <p>현재는 한성대학교 공간 예약 시스템에 집중하고 있습니다. Docker로 개발 환경을 구성하고, Vercel과 AWS EC2에 배포하며 사용자가 실제로 이용할 수 있는 서비스로 발전시키고 있습니다.</p>
        </div>
      </Reveal>
    </section>
  )
}
