import { useEffect, useRef, useState, type ReactNode } from 'react'
import { observeElementVisibility } from '../services/animationService'
import '../styles/Reveal.css'

type RevealEffect = 'fade-down' | 'fade-up' | 'fade-left' | 'fade-right' | 'zoom'

type RevealProps = {
  children: ReactNode
  className?: string
  effect?: RevealEffect
  delay?: 0 | 1 | 2 | 3 | 4
}

export function Reveal({
  children,
  className = '',
  effect = 'fade-up',
  delay = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    return observeElementVisibility(element, () => setIsVisible(true))
  }, [])

  return (
    <div
      ref={elementRef}
      className={`reveal reveal--${effect} reveal--delay-${delay} ${
        isVisible ? 'reveal--visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
