import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type RevealProps = { children: ReactNode; className?: string; delay?: number }

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        element.dataset.inView = String(entry.isIntersecting)
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
        }
      },
      { threshold: 0, rootMargin: '0px 0px -35px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={elementRef}
      style={{ '--reveal-delay': delay + 'ms' } as CSSProperties}
      className={'reveal-section ' + className}
    >
      {children}
    </div>
  )
}
