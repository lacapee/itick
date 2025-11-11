"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Volume2,
    title: "IT Consulting & Strategy",
    description: "Help Businesses Align Their Technology Long-Term Goals Through Expert Consulting Smart Strategy.",
    tags: ["CONSULTING", "APP", "WEBSITE", "IT SOLUTION", "CORPORATE"],
  },
  {
    icon: Database,
    title: "Data Analytics & BI Solutions",
    description: "Help Businesses Align Their Technology Long-Term Goals Through Expert Consulting Smart Strategy.",
    tags: ["CONSULTING", "APP", "WEBSITE", "IT SOLUTION", "CORPORATE"],
  },
  {
    icon: Zap,
    title: "Cloud Solutions & Infrastructure",
    description: "Help Businesses Align Their Technology Long-Term Goals Through Expert Consulting Smart Strategy.",
    tags: ["CONSULTING", "APP", "WEBSITE", "IT SOLUTION", "CORPORATE"],
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 200)
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-white via-[#FFF5F3] to-white text-[#1a1a1a] py-20 md:py-32 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FA8072]/10 rounded-full blur-3xl animate-blob-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FA8072]/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#FA8072]/8 rounded-full blur-3xl animate-float-dynamic" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FA8072 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative geometric shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#FA8072]/20 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-20 w-24 h-24 border-2 border-[#FA8072]/20 rotate-45 animate-float-slow" />

      {/* Large decorative @ symbol in background */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 text-[400px] md:text-[600px] font-bold text-[#FA8072]/[0.03] select-none pointer-events-none">
        @
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="flex-1">
            <div className="inline-block px-6 py-2 border border-[#FA8072]/30 rounded-full text-sm mb-6 text-[#FA8072] font-medium backdrop-blur-sm bg-white/50">
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a1a1a]">
              Solutions That
              <br />
              Drive Digital Success
            </h2>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-end bg-white/80 backdrop-blur-sm border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072] hover:text-white transition-all duration-300 px-8 py-6 text-base"
          >
            SEE ALL SERVICES
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FA8072] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transition:
                  "opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Decorative pattern in corner */}
              <svg
                className="absolute bottom-6 right-6 w-24 h-24 text-gray-200 group-hover:text-[#FA8072]/20 transition-colors duration-500"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="2" />
                <circle cx="70" cy="50" r="2" />
                <circle cx="90" cy="50" r="2" />
                <circle cx="50" cy="70" r="2" />
                <circle cx="70" cy="70" r="2" />
                <circle cx="90" cy="70" r="2" />
                <circle cx="50" cy="90" r="2" />
                <circle cx="70" cy="90" r="2" />
                <circle cx="90" cy="90" r="2" />
                <line x1="50" y1="50" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
                <line x1="90" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              {/* Icon with salmon circle background */}
              <div className="relative mb-8 flex items-start justify-between">
                <div className="w-14 h-14 rounded-full border-2 border-[#FA8072] flex items-center justify-center bg-[#FA8072]/10 group-hover:bg-[#FA8072] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#FA8072] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#FA8072] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

              {/* Read More Button */}
              <Button
                variant="outline"
                className="mb-8 bg-transparent border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072] hover:text-white transition-all duration-300"
              >
                READ MORE
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600 hover:border-[#FA8072] hover:text-[#FA8072] hover:bg-[#FA8072]/5 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FA8072]/10 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#FA8072]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  )
}
