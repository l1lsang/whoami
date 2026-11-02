import { useEffect, useState } from 'react'
import { useReassemble } from '../../hooks/useReassemble'
import type { FormationId } from '../../types/shapes'
import { FORMATIONS } from './formations'
import { ShapeStage } from './ShapeStage'

// 데스크톱: 오른쪽에 고정된 패널. 스크롤 위치에 따라 조각이 재조립됩니다.
export function StickyStage({ formation }: { formation: FormationId }) {
  const [assembled, setAssembled] = useState(false)
  const { burstSeed, reassemble } = useReassemble()

  // 첫 화면에서 흩어진 조각이 날아와 모이도록 아주 잠깐 기다립니다.
  useEffect(() => {
    const timer = window.setTimeout(() => setAssembled(true), 200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <aside className="stage-col" aria-label="도형 스테이지">
      <div className="stage-panel">
        <div className="stage-art">
          <ShapeStage formation={formation} assembled={assembled} burstSeed={burstSeed} draggable />
        </div>
        <div className="stage-bar">
          <p>{FORMATIONS[formation].caption}</p>
          <button type="button" className="button button-small" onClick={reassemble}>
            다시 조립
          </button>
        </div>
      </div>
    </aside>
  )
}
