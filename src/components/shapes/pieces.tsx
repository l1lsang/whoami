import type { PieceId } from '../../types/shapes'

// 모든 조각은 (0, 0)을 중심으로 그립니다.
// 그래서 translate → rotate → scale만으로 어떤 자리에도 놓을 수 있어요.
export function PieceShape({ id }: { id: PieceId }) {
  switch (id) {
    case 'quarter':
      return <path d="M-55 55V-55A110 110 0 0 1 55 55Z" />
    case 'zig':
      return (
        <polyline
          points="-90,18 -54,-18 -18,18 18,-18 54,18 90,-18"
          fill="none"
          stroke="currentColor"
          strokeWidth={14}
        />
      )
    case 'square':
      return <rect x={-60} y={-60} width={120} height={120} />
    case 'disc':
      return <circle r={80} />
    case 'half':
      return <path d="M-80 40A80 80 0 0 1 80 40Z" />
    case 'arch':
      return <path d="M-50 70V-20A50 50 0 0 1 50 -20V70Z" />
    case 'tri':
      return <path d="M0 -60L69.3 60H-69.3Z" />
    case 'bar':
      return <rect x={-110} y={-20} width={220} height={40} />
    case 'pill':
      return <rect x={-70} y={-24} width={140} height={48} rx={24} />
    case 'ring':
      return (
        <path
          fillRule="evenodd"
          d="M50 0A50 50 0 1 0 -50 0A50 50 0 1 0 50 0ZM32 0A32 32 0 1 1 -32 0A32 32 0 1 1 32 0Z"
        />
      )
    case 'plus':
      return <path d="M-14 -50H14V-14H50V14H14V50H-14V14H-50V-14H-14Z" />
    case 'dot':
      return <circle r={24} />
    case 'spark':
      return <path d="M0 -50C4 -14 14 -4 50 0C14 4 4 14 0 50C-4 14 -14 4 -50 0C-14 -4 -4 -14 0 -50Z" />
  }
}
