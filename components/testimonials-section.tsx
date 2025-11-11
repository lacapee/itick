"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Awesome! Working with Pepper n Canvas has transformed our operations. The team is truly exceptional! Really we're grateful & We're closing 40% on cold traffic.",
    author: "Teni",
    role: "CEO",
    company: "InnovateTech",
  },
  {
    quote:
      "Outstanding service and incredible results! The strategic approach helped us achieve our business goals faster than we ever imagined possible.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "The level of professionalism and expertise is unmatched. Our productivity increased by 60% within the first quarter of partnership.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "GlobalVentures",
  },
  {
    quote:
      "Game-changing partnership! Their innovative solutions and dedicated support have been instrumental in our digital transformation journey.",
    author: "David Chen",
    role: "Founder",
    company: "StartupHub",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("testimonials-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section
      id="testimonials-section"
      className="relative py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FA8072 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a4d4d] leading-tight">
              <span className="text-[#1a4d4d]">"</span>Clients
              <br />
              Testimonials<span className="text-[#1a4d4d]">"</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-salmon-50 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#FA8072]">C</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">4.9/5</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FA8072] text-[#FA8072]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Based on 24 reviews on Clutch</p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-2xl hover:border-[#FA8072]/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Quote icon */}
                  <div className="w-14 h-14 rounded-full bg-[#1a4d4d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-7 h-7 text-white" />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 flex-1">{testimonial.quote}</p>

                  {/* Author info */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-8 h-3 bg-[#FA8072]" : "w-3 h-3 bg-gray-300 hover:bg-[#FA8072]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-32 h-32 bg-[#FA8072]/5 rounded-full blur-3xl animate-blob-float" />
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-[#FA8072]/5 rounded-full blur-3xl animate-blob-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}
