'use client'

import { useEffect, useRef, useState } from 'react'
import { useExperienceStore } from '@/app/store/experienceStore'

export default function CurtainScene() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  const [hidden, setHidden] = useState(false)

  const setScene = useExperienceStore((s) => s.setScene)

  useEffect(() => {
    const timer = setTimeout(() => openCurtain(), 1200)
    return () => clearTimeout(timer)
  }, [])

  function openCurtain() {
    const left = leftRef.current
    const right = rightRef.current

    if (!left || !right) return

    const duration = 5000
    const start = performance.now()

    function ease(t: number) {
      return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t
    }

    function tick(now: number) {
      const t = ease(Math.min((now - start) / duration, 1))

      left.style.transform = `translateX(-${t * 100}%)`
      right.style.transform = `translateX(${t * 100}%)`

      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setHidden(true)
          setScene('welcome')
        }, 500)
      }
    }

    requestAnimationFrame(tick)
  }

  if (hidden) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden h-full">
      {/* الستار الأيسر */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 h-full w-1/2"
        style={{
          backgroundImage: "url('/images/curtain.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      />

      {/* الستار الأيمن */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 h-full w-1/2"
        style={{
          backgroundImage: "url('/images/curtain.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      />
    </div>
  )
}