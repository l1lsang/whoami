import { useEffect, useRef } from 'react'

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0,
      width = 0,
      height = 0,
      time = 0,
      lastTime = 0
    let inView = false
    const pointer = { x: -1000, y: -1000 }
    const points = Array.from({ length: 30 }, (_, i) => ({
      x: ((i * 127 + 59) % 997) / 997,
      y: ((i * 239 + 11) % 997) / 997,
      phase: i * 1.7,
    }))

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const ratio = Math.min(window.devicePixelRatio, 2)
      canvas!.width = width * ratio
      canvas!.height = height * ratio
      context!.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    function draw(timestamp: number) {
      time += lastTime ? Math.min(timestamp - lastTime, 40) / 1000 : 0
      lastTime = timestamp
      context!.clearRect(0, 0, width, height)
      const positions = points.map((point) => ({
        x: point.x * width + Math.sin(time * 0.25 + point.phase) * 20,
        y: point.y * height + Math.cos(time * 0.2 + point.phase) * 18,
      }))
      positions.forEach((point, index) => {
        context!.beginPath()
        context!.arc(point.x, point.y, 1.8, 0, Math.PI * 2)
        context!.fillStyle = 'rgba(62, 99, 73, 0.3)'
        context!.fill()
        for (let j = index + 1; j < positions.length; j++) {
          const other = positions[j]
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < 135) {
            context!.beginPath()
            context!.moveTo(point.x, point.y)
            context!.lineTo(other.x, other.y)
            context!.strokeStyle =
              'rgba(62, 99, 73,' + 0.1 * (1 - distance / 135) + ')'
            context!.stroke()
          }
        }
        if (Math.hypot(point.x - pointer.x, point.y - pointer.y) < 180) {
          context!.beginPath()
          context!.moveTo(point.x, point.y)
          context!.lineTo(pointer.x, pointer.y)
          context!.strokeStyle = 'rgba(62, 99, 73, 0.14)'
          context!.stroke()
        }
      })
      frame = window.requestAnimationFrame(draw)
    }
    function sync() {
      window.cancelAnimationFrame(frame)
      lastTime = 0
      if (inView && !document.hidden && !motion.matches)
        frame = window.requestAnimationFrame(draw)
      else context!.clearRect(0, 0, width, height)
    }
    function move(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    function leave() {
      pointer.x = -1000
      pointer.y = -1000
    }
    const parent = canvas.parentElement!
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    })
    const resizer = new ResizeObserver(resize)
    resizer.observe(canvas)
    observer.observe(canvas)
    parent.addEventListener('pointermove', move, { passive: true })
    parent.addEventListener('pointerleave', leave)
    motion.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      resizer.disconnect()
      parent.removeEventListener('pointermove', move)
      parent.removeEventListener('pointerleave', leave)
      motion.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])
  return (
    <>
      <div className="hero-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true">
        <span />
        <span />
        <i />
      </div>
    </>
  )
}
