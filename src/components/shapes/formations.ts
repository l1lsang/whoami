import type { Formation, FormationId, PieceId } from '../../types/shapes'

// 원 궤도 위 k번째 자리. 궤도 바깥을 향하도록 회전값도 함께 돌려줍니다.
function orbit(k: number, count: number, radius: number) {
  const angle = -90 + (360 / count) * k
  const rad = (angle * Math.PI) / 180
  return {
    x: 300 + radius * Math.cos(rad),
    y: 300 + radius * Math.sin(rad),
    r: angle + 90,
  }
}

const ORBIT_PIECES: PieceId[] = ['quarter', 'zig', 'square', 'half', 'arch', 'tri', 'bar', 'pill', 'plus', 'dot', 'spark']
const at = (id: PieceId) => orbit(ORBIT_PIECES.indexOf(id), ORBIT_PIECES.length, 205)

export const FORMATIONS: Record<FormationId, Formation> = {
  // 도형으로 그린 자화상
  hero: {
    caption: '조각으로 그린 자화상',
    poses: {
      quarter: { x: 150, y: 150, s: 1.5, c: 'yellow' },
      zig: { x: 478, y: 118, r: 15, s: 0.7, c: 'red' },
      square: { x: 472, y: 478, r: 14, s: 0.55, c: 'red' },
      disc: { x: 300, y: 240, c: 'pink' },
      half: { x: 300, y: 177, r: -6, s: 1.08, c: 'ink' },
      arch: { x: 300, y: 432, s: 1.3, c: 'blue' },
      tri: { x: 132, y: 480, r: -8, s: 0.75, c: 'green' },
      bar: { x: 402, y: 331, r: -39, sx: 0.6, sy: 0.65, c: 'blue' },
      pill: { x: 302, y: 285, s: 0.3, c: 'red' },
      ring: { x: 334, y: 248, s: 0.3, c: 'ink' },
      plus: { x: 300, y: 445, s: 0.36, c: 'yellow' },
      dot: { x: 268, y: 250, s: 0.45, c: 'ink' },
      spark: { x: 462, y: 278, r: 10, s: 0.62, c: 'yellow' },
    },
  },

  // 4×4 격자 (빈칸 세 개는 일부러 남겨 둔 자리)
  about: {
    caption: '제자리를 찾은 열세 조각',
    poses: {
      quarter: { x: 120, y: 120, s: 0.9, c: 'blue' },
      disc: { x: 240, y: 120, s: 0.62, c: 'yellow' },
      tri: { x: 480, y: 120, s: 0.72, c: 'red' },
      half: { x: 120, y: 240, s: 0.62, c: 'pink' },
      square: { x: 240, y: 240, s: 0.82, c: 'ink' },
      ring: { x: 360, y: 240, c: 'blue' },
      arch: { x: 480, y: 240, s: 0.7, c: 'green' },
      zig: { x: 120, y: 360, s: 0.55, c: 'ink' },
      plus: { x: 360, y: 360, c: 'red' },
      pill: { x: 480, y: 360, s: 0.7, c: 'yellow' },
      spark: { x: 120, y: 480, c: 'yellow' },
      bar: { x: 240, y: 480, r: -45, sx: 0.5, sy: 0.6, c: 'ink' },
      dot: { x: 360, y: 480, s: 1.6, c: 'red' },
    },
  },

  // 한성대학교 공간 예약: 건물 + 예약 태그
  hansung: {
    caption: '건물과 예약 태그',
    poses: {
      quarter: { x: 470, y: 420, s: 0.55, c: 'green' },
      zig: { x: 150, y: 215, s: 0.3, c: 'ink' },
      square: { x: 300, y: 360, sx: 2.1, sy: 1.5, c: 'yellow' },
      disc: { x: 115, y: 120, s: 0.5, c: 'pink' },
      half: { x: 140, y: 430, s: 0.55, c: 'green' },
      arch: { x: 300, y: 395, s: 0.78, c: 'blue' },
      tri: { x: 300, y: 215, sx: 2.2, sy: 0.9, c: 'red' },
      bar: { x: 300, y: 462, sx: 1.9, sy: 0.6, c: 'ink' },
      pill: { x: 470, y: 150, r: -14, s: 0.85, c: 'blue' },
      ring: { x: 300, y: 232, s: 0.36, c: 'paper' },
      plus: { x: 222, y: 330, s: 0.42, c: 'paper' },
      dot: { x: 378, y: 330, s: 0.9, c: 'paper' },
      spark: { x: 525, y: 100, s: 0.45, c: 'yellow' },
    },
  },

  // Spotit: 지도 위에 꽂힌 핀
  spotit: {
    caption: '지도 위에 꽂힌 핀',
    poses: {
      quarter: { x: 115, y: 470, s: 1.1, c: 'green' },
      zig: { x: 470, y: 480, r: -25, s: 0.85, c: 'blue' },
      square: { x: 475, y: 150, r: 12, s: 0.62, c: 'yellow' },
      disc: { x: 300, y: 215, s: 1.1, c: 'red' },
      half: { x: 140, y: 135, s: 0.55, c: 'pink' },
      arch: { x: 525, y: 300, s: 0.42, c: 'pink' },
      tri: { x: 300, y: 328, r: 180, sx: 1.12, sy: 1.19, c: 'red' },
      bar: { x: 125, y: 365, r: -30, sx: 0.6, sy: 0.5, c: 'ink' },
      pill: { x: 300, y: 418, sx: 0.75, sy: 0.4, c: 'ink', o: 0.18 },
      ring: { x: 300, y: 215, s: 0.8, c: 'paper' },
      plus: { x: 450, y: 385, s: 0.35, c: 'ink' },
      dot: { x: 90, y: 250, s: 0.55, c: 'blue' },
      spark: { x: 415, y: 105, s: 0.45, c: 'yellow' },
    },
  },

  // 귀차나: 메시지 → AI → 행동 카드
  gwichana: {
    caption: '메시지가 할 일 카드로',
    poses: {
      quarter: { x: 500, y: 130, r: 90, s: 0.95, c: 'green' },
      zig: { x: 238, y: 292, r: 40, s: 0.42, c: 'ink' },
      square: { x: 405, y: 440, r: -6, sx: 1.75, sy: 1.15, c: 'pink' },
      disc: { x: 190, y: 170, sx: 1.3, sy: 0.85, c: 'blue' },
      half: { x: 115, y: 470, s: 0.7, c: 'red' },
      arch: { x: 520, y: 300, s: 0.5, c: 'sand' },
      tri: { x: 140, y: 245, r: 200, s: 0.38, c: 'blue' },
      bar: { x: 445, y: 418, r: -6, sx: 0.42, sy: 0.4, c: 'ink' },
      pill: { x: 215, y: 170, sx: 0.85, sy: 0.5, c: 'paper' },
      ring: { x: 352, y: 426, s: 0.42, c: 'ink' },
      plus: { x: 455, y: 470, r: -6, s: 0.3, c: 'ink' },
      dot: { x: 130, y: 170, s: 0.42, c: 'paper' },
      spark: { x: 330, y: 300, s: 1.15, c: 'yellow' },
    },
  },

  // 드림 디펜더스: 초승달 아래 꿈의 성
  dream: {
    caption: '초승달 아래의 성',
    poses: {
      quarter: { x: 515, y: 442, r: -90, s: 0.45, c: 'green' },
      zig: { x: 300, y: 385, sx: 1.75, sy: 0.8, c: 'pink' },
      square: { x: 300, y: 428, sx: 2.7, sy: 0.65, c: 'pink' },
      disc: { x: 455, y: 135, s: 0.75, c: 'yellow' },
      half: { x: 95, y: 445, s: 0.55, c: 'green' },
      arch: { x: 300, y: 355, sx: 1.1, sy: 1.6, c: 'blue' },
      tri: { x: 300, y: 212, sy: 0.62, c: 'red' },
      bar: { x: 300, y: 478, sx: 2.1, sy: 0.55, c: 'ink' },
      pill: { x: 300, y: 435, r: 90, sx: 0.46, c: 'ink' },
      ring: { x: 300, y: 320, s: 0.42, c: 'yellow' },
      plus: { x: 225, y: 90, s: 0.32, c: 'yellow' },
      dot: { x: 485, y: 112, s: 2.1, c: 'paper' },
      spark: { x: 140, y: 150, s: 0.6, c: 'yellow' },
    },
  },

  // 디스코드 경제 게임봇: 오르는 차트와 코인
  economy: {
    caption: '오르는 차트와 코인',
    poses: {
      quarter: { x: 95, y: 110, s: 0.7, c: 'sand' },
      zig: { x: 290, y: 200, r: -28, s: 1.3, c: 'ink' },
      square: { x: 235, y: 385, sx: 0.48, sy: 1.42, c: 'yellow' },
      disc: { x: 500, y: 370, s: 0.55, c: 'yellow' },
      half: { x: 505, y: 446, s: 0.6, c: 'yellow' },
      arch: { x: 320, y: 355, sx: 0.58, sy: 1.64, c: 'red' },
      tri: { x: 412, y: 140, r: 62, s: 0.38, c: 'ink' },
      bar: { x: 405, y: 330, r: 90, sx: 1.27, sy: 1.45, c: 'green' },
      pill: { x: 150, y: 410, r: 90, sx: 0.85, sy: 1.2, c: 'blue' },
      ring: { x: 500, y: 370, s: 0.6, c: 'ink' },
      plus: { x: 110, y: 230, s: 0.45, c: 'green' },
      dot: { x: 540, y: 285, s: 0.8, c: 'yellow' },
      spark: { x: 470, y: 230, s: 0.4, c: 'yellow' },
    },
  },

  // 기술 스택: 중심을 도는 궤도
  skills: {
    caption: '중심을 도는 도구들',
    poses: {
      disc: { x: 300, y: 300, s: 0.55, c: 'blue' },
      ring: { x: 300, y: 300, s: 1.25, c: 'ink' },
      quarter: { ...at('quarter'), s: 0.5, c: 'yellow' },
      zig: { ...at('zig'), s: 0.4, c: 'red' },
      square: { ...at('square'), s: 0.45, c: 'pink' },
      half: { ...at('half'), s: 0.5, c: 'green' },
      arch: { ...at('arch'), s: 0.45, c: 'blue' },
      tri: { ...at('tri'), s: 0.45, c: 'red' },
      bar: { ...at('bar'), sx: 0.35, sy: 0.6, c: 'ink' },
      pill: { ...at('pill'), s: 0.45, c: 'yellow' },
      plus: { ...at('plus'), s: 0.5, c: 'red' },
      dot: { ...at('dot'), s: 1.1, c: 'pink' },
      spark: { ...at('spark'), s: 0.6, c: 'yellow' },
    },
  },

  // 연락처: 조각으로 쓴 "Hi"
  contact: {
    caption: '안녕하세요',
    poses: {
      bar: { x: 175, y: 300, r: 90, sy: 1.1, c: 'ink' },
      square: { x: 305, y: 300, sx: 0.37, sy: 1.83, c: 'ink' },
      pill: { x: 240, y: 300, sx: 0.75, sy: 0.92, c: 'ink' },
      arch: { x: 400, y: 335, sx: 0.44, sy: 1.07, c: 'ink' },
      dot: { x: 400, y: 212, s: 0.95, c: 'pink' },
      spark: { x: 488, y: 215, s: 0.8, c: 'yellow' },
      disc: { x: 110, y: 120, s: 0.32, c: 'blue' },
      half: { x: 500, y: 470, r: 25, s: 0.5, c: 'red' },
      quarter: { x: 500, y: 110, r: 90, s: 0.55, c: 'blue' },
      tri: { x: 105, y: 480, r: -18, s: 0.45, c: 'yellow' },
      zig: { x: 290, y: 500, r: -6, s: 0.55, c: 'pink' },
      ring: { x: 480, y: 355, s: 0.45, c: 'green' },
      plus: { x: 95, y: 300, r: 15, s: 0.38, c: 'red' },
    },
  },
}
