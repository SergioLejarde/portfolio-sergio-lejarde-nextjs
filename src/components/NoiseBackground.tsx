'use client'

import { useEffect, useRef } from 'react'

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frames: ImageData[] = []
    let frame = 0
    let animationId = 0

    const buildFrames = () => {
      frames.length = 0
      const width = canvas.width
      const height = canvas.height
      const totalFrames = prefersReducedMotion ? 1 : 12

      for (let i = 0; i < totalFrames; i += 1) {
        const imageData = ctx.createImageData(width, height)

        for (let j = 0; j < imageData.data.length; j += 4) {
          const shade = Math.floor(40 + Math.random() * 215)
          imageData.data[j] = shade
          imageData.data[j + 1] = shade
          imageData.data[j + 2] = shade
          imageData.data[j + 3] = 34
        }

        frames.push(imageData)
      }
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      buildFrames()
    }

    const paint = () => {
      if (frames.length > 0) {
        ctx.putImageData(frames[frame % frames.length], 0, 0)
        frame += 1
      }

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(paint)
      }
    }

    resize()
    paint()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70 mix-blend-screen"
    />
  )
}
