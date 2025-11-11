"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { CheckSquare, Globe, Sun, Trophy } from "lucide-react"

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Hours Saved Monthly" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-[#1a3a2e] font-sans">
      {count}
      {suffix}
    </div>
  )
}

interface StatItemProps {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  delay: number
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      style={{
        animation: isVisible ? `fade-in-up 0.8s ease-out ${delay}ms forwards` : "none",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="text-[#1a3a2e] mb-4">{icon}</div>
      <AnimatedCounter value={value} suffix={suffix} />
      <p className="text-[#666666] text-base md:text-lg font-body mt-2">{label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem
            icon={<CheckSquare className="w-12 h-12" />}
            value={34}
            suffix="K"
            label="Project Completed"
            delay={0}
          />
          <StatItem icon={<Globe className="w-12 h-12" />} value={16} suffix="K" label="Country Office" delay={100} />
          <StatItem icon={<Sun className="w-12 h-12" />} value={12} suffix="+" label="Year of Experience" delay={200} />
          <StatItem icon={<Trophy className="w-12 h-12" />} value={98} suffix="%" label="Happy Customer" delay={300} />
        </div>
      </div>
    </section>
  )
}
