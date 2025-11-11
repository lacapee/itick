"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

export function WhatIDoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left side - Large 15+ with service badges */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-600 tracking-wider">What I Do</span>
            </div>
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative text-[180px] sm:text-[220px] lg:text-[280px] xl:text-[320px] font-bold leading-none text-gray-900 select-none">
                15+
              </div>

              {/* Floating service badges - positioned to avoid clashing */}
              <div className="absolute top-4 sm:top-8 left-2 sm:left-0 animate-float-slow">
                <span className="inline-block bg-[#FF6B35] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                  Optimization
                </span>
              </div>

              <div
                className="absolute top-24 sm:top-28 lg:top-32 right-4 sm:right-8 lg:right-12 animate-float-slow"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="inline-block bg-[#B8E6D5] text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                  Evaluation
                </span>
              </div>

              <div
                className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-16 sm:left-20 lg:left-24 animate-float-slow"
                style={{ animationDelay: "1s" }}
              >
                <span className="inline-block bg-[#C6E44D] text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                  Consultation
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Company info, rating, and testimonial */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Company name */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                We're Pepper n Canvas Solutions Agency
              </h2>
            </div>

            {/* Rating section */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col">
                <span className="text-5xl lg:text-6xl font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">( 24 review )</span>
              </div>
              <div className="border-l border-gray-300 pl-4">
                <p className="text-sm text-gray-600 mb-2">Average Rating</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-900 text-gray-900" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <blockquote className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                "Pepper n Canvas delivered exactly what we needed — efficient, reliable, and results-driven solutions.
                We've seen measurable improvements since partnering with them we bring ideas to life with creativity,
                precision, and impact."
              </blockquote>
              <div>
                <p className="font-bold text-gray-900 text-lg">Teni</p>
                <p className="text-gray-600">CEO, InnovateTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
