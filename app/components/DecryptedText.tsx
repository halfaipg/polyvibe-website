'use client'

import { useEffect, useState } from 'react'

interface DecryptedTextProps {
  text: string
  className?: string
}

export default function DecryptedText({ text, className = '' }: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isDecrypting, setIsDecrypting] = useState(true)
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  
  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
        setIsDecrypting(false)
      }
      
      iteration += 1 / 3
    }, 30)
    
    return () => clearInterval(interval)
  }, [text])
  
  return <span className={className}>{displayText}</span>
}

