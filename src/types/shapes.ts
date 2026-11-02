// 사이트 전체에서 재사용하는 13개의 도형 조각
export const PIECE_IDS = [
  'quarter',
  'zig',
  'square',
  'disc',
  'half',
  'arch',
  'tri',
  'bar',
  'pill',
  'ring',
  'plus',
  'dot',
  'spark',
] as const
// 배열 순서가 곧 SVG의 쌓이는 순서(z-index)입니다. 뒤에 있을수록 위에 그려집니다.

export type PieceId = (typeof PIECE_IDS)[number]

export type Tone = 'ink' | 'paper' | 'sand' | 'blue' | 'red' | 'yellow' | 'pink' | 'green'

// 600×600 스테이지 위에서 한 조각이 놓이는 자세
export type Pose = {
  x: number
  y: number
  r?: number // 회전(deg)
  s?: number // 균일 배율
  sx?: number // 가로 배율 (s에 곱해짐)
  sy?: number // 세로 배율 (s에 곱해짐)
  c: Tone
  o?: number // 불투명도
}

export const FORMATION_IDS = [
  'hero',
  'about',
  'hansung',
  'spotit',
  'gwichana',
  'dream',
  'economy',
  'skills',
  'contact',
] as const

export type FormationId = (typeof FORMATION_IDS)[number]

export type Formation = {
  caption: string // 스테이지 아래 띠에 들어가는 설명
  poses: Record<PieceId, Pose>
}

export function isFormationId(value: string | undefined): value is FormationId {
  return FORMATION_IDS.includes(value as FormationId)
}
