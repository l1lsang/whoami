import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react'

export function Spotlight({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  useEffect(() => () => cancelAnimationFrame(frame.current), [])
  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== 'mouse' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    const element = ref.current
    if (!element) return
    const bounds = element.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty('--spot-x', x * 100 + '%')
      element.style.setProperty('--spot-y', y * 100 + '%')
      element.style.setProperty('--tilt-x', (0.5 - y) * 7 + 'deg')
      element.style.setProperty('--tilt-y', (x - 0.5) * 7 + 'deg')
    })
  }
  function reset() {
    cancelAnimationFrame(frame.current)
    ref.current?.style.setProperty('--tilt-x', '0deg')
    ref.current?.style.setProperty('--tilt-y', '0deg')
  }
  return (
    <div
      ref={ref}
      className={'spotlight ' + className}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  )
}
