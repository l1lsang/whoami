import { useEffect, useState } from 'react'
import { isFormationId, type FormationId } from '../types/shapes'

// 화면 가운데 가로선보다 위에서 시작한 마지막 [data-step] 요소의 이름을 돌려줍니다.
// 스크롤 위치로 직접 계산하기 때문에 메뉴를 눌러 한 번에 건너뛰어도 놓치지 않습니다.
export function useActiveStep(initial: FormationId) {
  const [active, setActive] = useState<FormationId>(initial)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.5
      let current = initial
      for (const step of document.querySelectorAll<HTMLElement>('[data-step]')) {
        const id = step.dataset.step
        if (isFormationId(id) && step.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [initial])

  return active
}
