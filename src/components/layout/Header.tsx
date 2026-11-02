import { navigation, profile } from '../../data/profile'
import type { FormationId } from '../../types/shapes'
import { toneColor } from '../../utils/stage'
import { PieceShape } from '../shapes/pieces'

// 2×2 격자로 놓인 네 조각. 마우스를 올리면 각자 한 바퀴씩 돕니다.
const BRAND_PIECES = [
  { id: 'quarter', x: 32, y: 32, s: 0.5, tone: 'blue' },
  { id: 'dot', x: 88, y: 32, s: 1, tone: 'red' },
  { id: 'tri', x: 32, y: 88, s: 0.42, tone: 'yellow' },
  { id: 'square', x: 88, y: 88, s: 0.44, tone: 'ink' },
] as const

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      {BRAND_PIECES.map((piece) => (
        <g key={piece.id} transform={`translate(${piece.x} ${piece.y}) scale(${piece.s})`}>
          <g className="brand-piece" fill="currentColor" style={{ color: toneColor(piece.tone) }}>
            <PieceShape id={piece.id} />
          </g>
        </g>
      ))}
    </svg>
  )
}

export function Header({ active }: { active: FormationId }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name}, 맨 위로`}>
        <BrandMark />
        <span>{profile.name}</span>
      </a>
      <nav className="nav" aria-label="주요 메뉴">
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-current={item.steps.includes(active) ? 'true' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="button button-small" href="#contact">
          연락하기
        </a>
      </nav>
    </header>
  )
}
