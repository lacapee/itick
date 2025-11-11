"use client"

import { useEffect, useRef, useState } from "react"

export function ImageShowcaseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="relative overflow-hidden rounded-[20px] group cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-6oU9Wf55O9WPsBFoFsYQkJ79egxh7Z.webp"
              alt="Team collaboration"
              className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fa8072]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Enhanced shadow that appears on hover */}
          <div className="absolute inset-0 rounded-[20px] shadow-[0_8px_30px_rgba(250,128,114,0.15)] group-hover:shadow-[0_20px_60px_rgba(250,128,114,0.35)] transition-shadow duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
