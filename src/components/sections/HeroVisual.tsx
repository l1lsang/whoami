import { useEffect, useRef } from 'react'

// A woven torus, drawn locally so the hero needs no video or 3D dependencies.
export function HeroVisual() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!scene || !canvas || !context) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let width = 0
    let height = 0
    let time = 0
    let lastTime = 0
    let inView = false
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const strands = Array.from({ length: 48 }, (_, strand) =>
      Array.from({ length: 121 }, (_, point) => {
        const u = (point / 120) * Math.PI * 2
        const v = (strand / 48) * Math.PI * 2 + u * 3
        const radius = 108 + 39 * Math.cos(v)
        return {
          x: radius * Math.cos(u),
          y: 39 * Math.sin(v),
          z: radius * Math.sin(u),
        }
      }),
    )

    function render() {
      if (!context) return
      context.clearRect(0, 0, width, height)
      const turn = time * 0.13 + pointer.x * 0.22
      const tilt = 0.78 + Math.sin(time * 0.22) * 0.14 + pointer.y * 0.12
      const scale = Math.min(width / 365, height / 270) * 0.9
      const cosTurn = Math.cos(turn)
      const sinTurn = Math.sin(turn)
      const cosTilt = Math.cos(tilt)
      const sinTilt = Math.sin(tilt)
      const roll = -0.37 + Math.sin(time * 0.15) * 0.09
      const cosRoll = Math.cos(roll)
      const sinRoll = Math.sin(roll)

      const projected = strands
        .map((strand, index) => {
          let depth = 0
          const points = strand.map((point) => {
            const x = point.x * cosTurn - point.z * sinTurn
            const z = point.x * sinTurn + point.z * cosTurn
            const y = point.y * cosTilt - z * sinTilt
            const rotatedZ = point.y * sinTilt + z * cosTilt
            const perspective = 650 / (650 - rotatedZ)
            depth += rotatedZ
            return {
              x:
                width / 2 +
                (x * cosRoll - y * sinRoll) * scale * perspective,
              y:
                height / 2 +
                (x * sinRoll + y * cosRoll) * scale * perspective,
            }
          })
          return { points, depth: depth / strand.length, index }
        })
        .sort((a, b) => a.depth - b.depth)

      projected.forEach(({ points, depth, index }) => {
        context.beginPath()
        points.forEach((point, i) => {
          if (i === 0) context.moveTo(point.x, point.y)
          else context.lineTo(point.x, point.y)
        })
        const light = 37 + (depth + 30) * 0.16
        const hue = 92 + Math.sin((index / 48) * Math.PI * 2 + time * 0.18) * 30
        context.strokeStyle = `hsla(${hue}, 30%, ${light}%, 0.64)`
        context.lineWidth = Math.max(0.65, scale * 0.8)
        context.stroke()
      })
    }

    function draw(timestamp: number) {
      const delta = lastTime ? Math.min(timestamp - lastTime, 40) : 16
      time += delta / 1000
      lastTime = timestamp
      const easing = 1 - Math.exp(-delta / 180)
      pointer.x += (pointer.targetX - pointer.x) * easing
      pointer.y += (pointer.targetY - pointer.y) * easing
      render()
      frame = requestAnimationFrame(draw)
    }

    function sync() {
      cancelAnimationFrame(frame)
      lastTime = 0
      const active = inView && !document.hidden && !motion.matches
      scene!.dataset.motion = active ? 'running' : 'paused'
      if (active) frame = requestAnimationFrame(draw)
      else render()
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const ratio = Math.min(window.devicePixelRatio, 2)
      canvas!.width = Math.round(width * ratio)
      canvas!.height = Math.round(height * ratio)
      context!.setTransform(ratio, 0, 0, ratio, 0, 0)
      render()
    }

    function move(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || motion.matches) return
      const rect = scene!.getBoundingClientRect()
      pointer.targetX = Math.max(
        -1,
        Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
      )
      pointer.targetY = Math.max(
        -1,
        Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
      )
    }
    function leave() {
      pointer.targetX = 0
      pointer.targetY = 0
    }

    const parent = scene.parentElement!
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    })
    const resizer = new ResizeObserver(resize)
    resizer.observe(canvas)
    observer.observe(scene)
    parent.addEventListener('pointermove', move, { passive: true })
    parent.addEventListener('pointerleave', leave)
    motion.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      resizer.disconnect()
      parent.removeEventListener('pointermove', move)
      parent.removeEventListener('pointerleave', leave)
      motion.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return (
    <div ref={sceneRef} className="hero-art" aria-hidden="true">
      <div className="art-aura art-aura-one" />
      <div className="art-aura art-aura-two" />
      <div className="art-orbit art-orbit-one">
        <i />
      </div>
      <div className="art-orbit art-orbit-two">
        <i />
      </div>
      <div className="art-cross art-cross-one">+</div>
      <div className="art-cross art-cross-two">+</div>
      <div className="art-caption">
        <span className="art-live-dot" /> IDEAS INTO EXPERIENCES
      </div>
      <canvas ref={canvasRef} className="art-sculpture" />
      <div className="art-baseline">
        <span>DESIGN</span>
        <i />
        <span>DEVELOPMENT</span>
      </div>
    </div>
  )
}
