import { useCallback, useEffect, useRef, useState } from 'react'

// 버튼을 누르면 조각을 잠깐 흩뜨렸다가 다시 원래 자리로 돌려보냅니다.
export function useReassemble(holdMs = 620) {
  const [burstSeed, setBurstSeed] = useState<number | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const reassemble = useCallback(() => {
    window.clearTimeout(timer.current)
    setBurstSeed(Math.floor(Math.random() * 1_000_000_000))
    timer.current = window.setTimeout(() => setBurstSeed(null), holdMs)
  }, [holdMs])

  return { burstSeed, reassemble }
}
