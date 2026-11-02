import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useReassemble } from '../../hooks/useReassemble'
import type { FormationId } from '../../types/shapes'
import { FORMATIONS } from './formations'
import { ShapeStage } from './ShapeStage'

// 모바일: 스테이지를 각 섹션 안에 하나씩 둡니다.
// 화면에 들어오면 조각이 모이고, 그림이나 버튼을 누르면 흩어졌다가 다시 조립됩니다.
export function InlineStage({ formation, className = '' }: { formation: FormationId; className?: string }) {
  const isDesktop = useMediaQuery('(min-width: 960px)')
  if (isDesktop) return null
  return <InlineStageBody formation={formation} className={className} />
}

function InlineStageBody({ formation, className }: { formation: FormationId; className: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.35 })
  const { burstSeed, reassemble } = useReassemble()

  return (
    <div ref={ref} className={`stage-panel stage-inline ${className}`}>
      {/* 그림 어디를 눌러도 되지만, 키보드로는 아래 버튼을 씁니다 */}
      <div className="stage-art stage-tap" onClick={reassemble}>
        <ShapeStage formation={formation} assembled={inView} burstSeed={burstSeed} />
      </div>
      <div className="stage-bar">
        <p>{FORMATIONS[formation].caption}</p>
        <button type="button" className="button button-small" onClick={reassemble}>
          다시 조립
        </button>
      </div>
    </div>
  )
}
