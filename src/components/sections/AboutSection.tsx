import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-container about-section section-rule"
    >
      <Reveal>
        <div>
          <h2 id="about-title" className="about-statement">
            좋은 프론트엔드는 단순히 화면을 구현하는 것이 아니라
            <br className="desktop-break" /> 사용자가 서비스를{' '}
            <span>자연스럽게 이해하고</span>
            <br className="desktop-break" /> 사용할 수 있도록 만드는 것이라고
            생각합니다.
          </h2>
          <p className="about-description">
            사용자 인증부터 데이터베이스, 서버 로직, 배포까지.
            <br className="desktop-break" /> 서비스 전체의 흐름을 이해하고,
            필요한 기술을 배우며 더 나은 사용 경험을 고민합니다.
          </p>
          <div className="strengths">
            <span>서비스 전체를 보는 시야</span>
            <span>빠른 학습과 적용</span>
            <span>사용자 중심의 문제 해결</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
