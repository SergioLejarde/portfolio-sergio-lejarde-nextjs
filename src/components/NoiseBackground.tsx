'use client'

import { useEffect, useRef } from 'react'

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationId: number

    interface PixelStar {
      x: number
      y: number
      size: number
      color: string
      alpha: number
      alphaDelta: number
      speedY: number
    }

    const stars: PixelStar[] = []
    const colors = [
      'rgba(34, 211, 238, ',  // cyan
      'rgba(232, 121, 249, ', // fuchsia
      'rgba(192, 132, 252, ', // purple
      'rgba(251, 191, 36, ',  // amber
      'rgba(255, 255, 255, ', // white
    ]

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height

      stars.length = 0
      const starCount = Math.floor((width * height) / 22000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          size: Math.random() > 0.8 ? 4 : 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.7 + 0.1,
          alphaDelta: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          speedY: (Math.random() * 0.2 + 0.05) * -1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.alpha += star.alphaDelta
        if (star.alpha > 0.85) {
          star.alpha = 0.85
          star.alphaDelta = -Math.abs(star.alphaDelta)
        } else if (star.alpha < 0.1) {
          star.alpha = 0.1
          star.alphaDelta = Math.abs(star.alphaDelta)
        }

        if (!prefersReducedMotion) {
          star.y += star.speedY
          if (star.y < 0) {
            star.y = canvas.height
            star.x = Math.floor(Math.random() * canvas.width)
          }
        }

        ctx.fillStyle = `${star.color}${star.alpha})`
        // draw crisp pixel square
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size)
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background SVG Pixel Grid Pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-40 md:opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.68 30.68'><rect fill='%233a0c81' x='11.58' y='11.48' width='7.72' height='7.72'/><rect fill='%233a0c81' x='3.86' y='3.76' width='7.72' height='7.72'/><rect fill='%233a0c81' x='19.29' y='19.2' width='7.72' height='7.72'/></svg>")`,
          backgroundSize: '30.68px 30.68px',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Neon Radial Ambient Glows */}
      <div
        className="absolute -top-[10%] left-[5%] h-[55vw] w-[55vw] max-w-[700px] rounded-full blur-[120px] opacity-25"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] right-[-5%] h-[50vw] w-[50vw] max-w-[650px] rounded-full blur-[130px] opacity-20"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[10%] left-[20%] h-[45vw] w-[45vw] max-w-[600px] rounded-full blur-[140px] opacity-20"
        style={{ background: 'radial-gradient(circle, #e879f9 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Retro Pixel Twinkle Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full"
      />
    </div>
  )
}
