import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section paper">
      <Reveal className="section-container about-grid">
        <h2 id="about-title">보기 좋게.<br />쓰기는 더 좋게<span className="accent-dot">.</span></h2>
        <div className="about-copy">
          <p className="about-lead">화면 너머의 경험까지<br />생각하는 개발자, 장경민입니다.</p>
          <p>React와 TypeScript를 중심으로, 아이디어가 실제 서비스로 이어지는 과정을 만듭니다. 사용자가 자연스럽게 이해하고 편하게 사용할 수 있는 인터페이스를 고민합니다.</p>
          <p>사용자 인증부터 데이터베이스, 서버 로직, 배포까지. 서비스 전체의 흐름을 이해하고 필요한 기술을 배우며 더 나은 경험을 만들어갑니다.</p>
        </div>
      </Reveal>
    </section>
  )
}
