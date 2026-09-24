import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react'

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const frame = useRef(0)
  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  function move(event: PointerEvent<HTMLSpanElement>) {
    if (
      event.pointerType !== 'mouse' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.25
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      ref.current?.style.setProperty('--magnet-x', `${x}px`)
      ref.current?.style.setProperty('--magnet-y', `${y}px`)
    })
  }
  function reset() {
    cancelAnimationFrame(frame.current)
    ref.current?.style.setProperty('--magnet-x', '0px')
    ref.current?.style.setProperty('--magnet-y', '0px')
  }
  return (
    <span
      ref={ref}
      className="magnetic"
      onPointerMove={move}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </span>
  )
}
