'use client'

import { useEffect, useRef } from 'react'

export default function LightModeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGradient = () => {
      const width = canvas.width
      const height = canvas.height

      // Create gradient
      const gradient = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time * 0.5) * 100,
        height * 0.4 + Math.cos(time * 0.3) * 80,
        0,
        width * 0.7 + Math.cos(time * 0.4) * 120,
        height * 0.6 + Math.sin(time * 0.6) * 100,
        Math.max(width, height) * 0.8
      )

      // Animated colors
      const hue1 = (time * 0.1) % 360
      const hue2 = (time * 0.1 + 60) % 360
      const hue3 = (time * 0.1 + 120) % 360

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 85%, 0.6)`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 60%, 90%, 0.4)`)
      gradient.addColorStop(1, `hsla(${hue3}, 50%, 95%, 0.2)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Add floating particles
      for (let i = 0; i < 12; i++) {
        const x = (width * 0.2 + Math.sin(time * 0.2 + i) * width * 0.3) % width
        const y = (height * 0.3 + Math.cos(time * 0.15 + i) * height * 0.2) % height
        const size = 2 + Math.sin(time * 0.3 + i) * 1.5
        const alpha = 0.3 + Math.sin(time * 0.4 + i) * 0.2

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${(hue1 + i * 45) % 360}, 60%, 70%, ${alpha})`
        ctx.fill()
      }

      time += 0.01
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGradient()
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}
