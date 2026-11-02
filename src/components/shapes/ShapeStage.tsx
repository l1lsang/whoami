import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { PIECE_IDS, type FormationId, type PieceId } from '../../types/shapes'
import { scatterPoses, toneColor, toTransform } from '../../utils/stage'
import { FORMATIONS } from './formations'
import { PieceShape } from './pieces'

type Drag = { id: PieceId; dx: number; dy: number }
type DragStart = { id: PieceId; x: number; y: number; unit: number }

type ShapeStageProps = {
  formation: FormationId
  assembled?: boolean // false면 조각이 흩어진 채 보이지 않는 상태 (등장 전)
  burstSeed?: number | null // 값이 있으면 그 seed로 잠깐 흩어짐
  draggable?: boolean
  className?: string
}

export function ShapeStage({
  formation,
  assembled = true,
  burstSeed = null,
  draggable = false,
  className = '',
}: ShapeStageProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const dragStart = useRef<DragStart | null>(null)
  const [drag, setDrag] = useState<Drag | null>(null)
  const [released, setReleased] = useState<PieceId | null>(null)

  const target = FORMATIONS[formation].poses
  const poses = !assembled
    ? scatterPoses(7, target, true)
    : burstSeed !== null
      ? scatterPoses(burstSeed, target)
      : target

  function startDrag(event: PointerEvent<SVGGElement>, id: PieceId) {
    // 터치에서는 스크롤을 막지 않도록 마우스·펜만 드래그를 허용합니다.
    if (!draggable || event.pointerType === 'touch' || !svgRef.current) return
    event.preventDefault()
    svgRef.current.setPointerCapture(event.pointerId)
    const rect = svgRef.current.getBoundingClientRect()
    dragStart.current = { id, x: event.clientX, y: event.clientY, unit: 600 / rect.width }
    setDrag({ id, dx: 0, dy: 0 })
    setReleased(null)
  }

  function moveDrag(event: PointerEvent<SVGSVGElement>) {
    const start = dragStart.current
    if (!start) return
    setDrag({
      id: start.id,
      dx: (event.clientX - start.x) * start.unit,
      dy: (event.clientY - start.y) * start.unit,
    })
  }

  function endDrag() {
    if (!dragStart.current) return
    setReleased(dragStart.current.id)
    dragStart.current = null
    setDrag(null)
  }

  return (
    <svg
      ref={svgRef}
      className={`shape-stage ${draggable ? 'is-draggable' : ''} ${drag ? 'is-dragging' : ''} ${className}`}
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {PIECE_IDS.map((id, i) => {
        const pose = poses[id]
        const isDragged = drag?.id === id
        const opacity = pose.o ?? 1
        const style = {
          '--i': i,
          transform: toTransform(pose, isDragged ? drag : undefined),
          color: toneColor(pose.c),
          opacity,
          pointerEvents: opacity === 0 ? 'none' : undefined,
          transitionDelay: released === id ? '0ms' : undefined,
        } as CSSProperties

        return (
          <g
            key={id}
            className={`piece ${isDragged ? 'is-held' : ''}`}
            data-piece={id}
            fill="currentColor"
            style={style}
            onPointerDown={(event) => startDrag(event, id)}
          >
            <PieceShape id={id} />
          </g>
        )
      })}
    </svg>
  )
}
