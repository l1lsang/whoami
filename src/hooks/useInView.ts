import { useEffect, useState, type RefObject } from 'react'

// 요소가 화면에 들어왔는지 알려줍니다. once면 한 번 보인 뒤로는 계속 true입니다.
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { threshold = 0.3, once = true }: { threshold?: number; once?: boolean } = {},
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, once])

  return inView
}
