import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    function update() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const height =
          document.documentElement.scrollHeight - window.innerHeight
        if (ref.current)
          ref.current.style.transform =
            'scaleX(' +
            (height > 0 ? Math.min(window.scrollY / height, 1) : 0) +
            ')'
      })
    }
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [])
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}
