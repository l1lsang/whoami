type ArrowProps = {
  direction?: 'up-right' | 'down-right' | 'right'
  size?: number
}

const ROTATION = { 'up-right': 0, right: 45, 'down-right': 90 }

export function Arrow({ direction = 'up-right', size = 16 }: ArrowProps) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${ROTATION[direction]}deg)` }}
    >
      <path d="M3.5 12.5L12.5 3.5M5 3.5H12.5V11" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}
