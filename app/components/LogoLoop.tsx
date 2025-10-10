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

    // Clone the list multiple times for seamless loop
    const clone1 = list.cloneNode(true) as HTMLElement
    const clone2 = list.cloneNode(true) as HTMLElement
    track.appendChild(clone1)
    track.appendChild(clone2)

    const listWidth = list.offsetWidth
    let currentPosition = 0

    const animate = () => {
      if (!isPaused) {
        const pixelsPerFrame = speed / 60
        currentPosition -= pixelsPerFrame

        // Reset position for seamless loop
        if (Math.abs(currentPosition) >= listWidth) {
          currentPosition = 0
        }

        track.style.transform = `translate3d(${currentPosition}px, 0, 0)`
      }

      requestAnimationFrame(animate)
    }

    const animationFrameId = requestAnimationFrame(animate)

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

