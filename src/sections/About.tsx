import { FORMATIONS } from '../components/shapes/formations'
import { InlineStage } from '../components/shapes/InlineStage'
import { PieceShape } from '../components/shapes/pieces'
import { letter } from '../data/about'
import { profile } from '../data/profile'
import type { PieceId } from '../types/shapes'
import { toneColor, toTransform } from '../utils/stage'

// 첫 화면 자화상에서 얼굴 조각만 잘라 온 작은 초상
const FACE: PieceId[] = ['disc', 'half', 'pill', 'ring', 'dot']

function Portrait() {
  const poses = FORMATIONS.hero.poses
  return (
    <svg className="portrait stage-scope" viewBox="190 125 220 220" aria-hidden="true" focusable="false">
      <rect x={190} y={125} width={220} height={220} fill="var(--stage-bg)" />
      {FACE.map((id) => (
        <g key={id} fill="currentColor" style={{ transform: toTransform(poses[id]), color: toneColor(poses[id].c) }}>
          <PieceShape id={id} />
        </g>
      ))}
    </svg>
  )
}

function About() {
  return (
    <section id="about" data-step="about" className="step" aria-labelledby="about-title">
      <h2 id="about-title">화면부터 서버까지</h2>
      <InlineStage formation="about" />
      <div className="letter">
        <Portrait />
        {letter.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="signoff">
          <strong>{profile.name}</strong>
          <span>프론트엔드 개발자</span>
        </p>
      </div>
    </section>
  )
}

export default About
