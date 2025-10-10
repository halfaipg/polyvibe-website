'use client'

import { useEffect, useRef, useState } from 'react'
import './LogoLoop.css'

interface Logo {
  node?: React.ReactNode
  src?: string
  alt?: string
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: Logo[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor,
  ariaLabel = 'Logo carousel'
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const list = track.querySelector('.logoloop__list') as HTMLElement
    if (!list) return

    // Clone the list for seamless loop
    const clone = list.cloneNode(true) as HTMLElement
    track.appendChild(clone)

    const listWidth = list.offsetWidth
    const duration = listWidth / speed

    let startTime: number | null = null
    let animationFrameId: number
    let currentPosition = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (!isPaused) {
        const distance = (elapsed / 1000) * speed
        currentPosition = direction === 'left' ? -distance : distance

        // Reset position for seamless loop
        if (direction === 'left' && Math.abs(currentPosition) >= listWidth) {
          currentPosition = currentPosition + listWidth
          startTime = timestamp
        } else if (direction === 'right' && currentPosition >= listWidth) {
          currentPosition = currentPosition - listWidth
          startTime = timestamp
        }

        track.style.transform = `translate3d(${currentPosition}px, 0, 0)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [speed, direction, isPaused])

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  const classNames = [
    'logoloop',
    scaleOnHover && 'logoloop--scale-hover',
    fadeOut && 'logoloop--fade'
  ]
    .filter(Boolean)
    .join(' ')

  const style = {
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
  } as React.CSSProperties

  return (
    <div
      className={classNames}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="logoloop__track">
        <div className="logoloop__list">
          {logos.map((logo, index) => (
            <div key={index} className="logoloop__item">
              {logo.href ? (
                <a
                  href={logo.href}
                  className="logoloop__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={logo.title || logo.alt}
                >
                  {logo.node ? (
                    <span className="logoloop__node">{logo.node}</span>
                  ) : (
                    <img src={logo.src} alt={logo.alt} />
                  )}
                </a>
              ) : (
                <>
                  {logo.node ? (
                    <span className="logoloop__node">{logo.node}</span>
                  ) : (
                    <img src={logo.src} alt={logo.alt} />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

