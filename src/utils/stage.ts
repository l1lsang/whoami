import { PIECE_IDS, type PieceId, type Pose, type Tone } from '../types/shapes'

export function toneColor(tone: Tone) {
  return `var(--tone-${tone})`
}

// 함수 목록(translate → rotate → scale)을 항상 같은 순서로 만들어야
// CSS transition이 각 값을 부드럽게 보간할 수 있습니다.
export function toTransform(pose: Pose, offset?: { dx: number; dy: number }) {
  const s = pose.s ?? 1
  const dx = offset?.dx ?? 0
  const dy = offset?.dy ?? 0
  const tilt = offset ? Math.max(-24, Math.min(24, dx * 0.12)) : 0
  const lift = offset ? 1.06 : 1
  const sx = s * (pose.sx ?? 1) * lift
  const sy = s * (pose.sy ?? 1) * lift
  return `translate(${pose.x + dx}px, ${pose.y + dy}px) rotate(${(pose.r ?? 0) + tilt}deg) scale(${sx}, ${sy})`
}

// 같은 seed면 항상 같은 결과를 주는 작은 난수 생성기 (mulberry32)
function seededRandom(seed: number) {
  let t = seed >>> 0
  return () => {
    t = (t + 0x6d2b79f5) >>> 0
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

// 조각들을 스테이지 가장자리로 흩뜨린 자세. 색은 원래 포메이션의 색을 유지합니다.
export function scatterPoses(seed: number, base: Record<PieceId, Pose>, hidden = false) {
  const random = seededRandom(seed)
  const poses = {} as Record<PieceId, Pose>
  PIECE_IDS.forEach((id, i) => {
    const angle = ((i / PIECE_IDS.length) * 360 + random() * 40) * (Math.PI / 180)
    const radius = 215 + random() * 70
    poses[id] = {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius,
      r: (random() - 0.5) * 300,
      s: 0.4 + random() * 0.3,
      c: base[id].c,
      o: hidden ? 0 : (base[id].o ?? 1),
    }
  })
  return poses
}
