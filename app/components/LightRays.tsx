'use client'

import { useEffect, useRef } from 'react'

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'center'
  raysColor?: string
  raysSpeed?: number
  lightSpread?: number
  rayLength?: number
  followMouse?: boolean
  mouseInfluence?: number
  noiseAmount?: number
  distortion?: number
  className?: string
}

export default function LightRays({
  raysOrigin = 'top-center',
  raysColor = '#8247E5',
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = '',
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = 0.5
    let mouseY = raysOrigin === 'top-center' ? 0 : 0.5
    const time = { value: 0 }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      if (followMouse) {
        mouseX = e.clientX / window.innerWidth
        mouseY = e.clientY / window.innerHeight
      }
    }
    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    const animate = () => {
      time.value += 0.01 * raysSpeed
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width * (raysOrigin === 'top-center' ? 0.5 : mouseX)
      const centerY = canvas.height * (raysOrigin === 'top-center' ? 0 : mouseY)
      
      const numRays = 12
      for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * Math.PI * 2 + time.value
        const noise = Math.sin(time.value * 2 + i) * noiseAmount
        const spread = lightSpread + noise
        
        const length = Math.min(canvas.width, canvas.height) * rayLength
        const endX = centerX + Math.cos(angle) * length * spread
        const endY = centerY + Math.sin(angle) * length * spread
        
        const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY)
        gradient.addColorStop(0, `${raysColor}80`)
        gradient.addColorStop(1, `${raysColor}00`)
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (followMouse) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
