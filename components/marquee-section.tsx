"use client"

export function MarqueeSection() {
  const services = [
    "Software Development",
    "Consulting",
    "Network Design",
    "Database Design",
    "IT Support",
    "IT Audit",
    "Development",
    "Data Solutions",
    "IT Roadmaps",
    "App Solutions",
    "IT Infrastructure",
  ]

  return (
    <section className="relative py-12 bg-white overflow-hidden border-y border-[#FA8072]/10">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of items */}
          {services.map((service, index) => (
            <div
              key={`service-1-${index}`}
              className="marquee-item group inline-flex items-center justify-center px-8 py-3 mx-3 border-[1.5px] border-[#FA8072] rounded-full bg-white text-[#222222] font-medium text-base transition-all duration-300 hover:bg-[#FA8072] hover:text-white hover:shadow-lg whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {service}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div
              key={`service-2-${index}`}
              className="marquee-item group inline-flex items-center justify-center px-8 py-3 mx-3 border-[1.5px] border-[#FA8072] rounded-full bg-white text-[#222222] font-medium text-base transition-all duration-300 hover:bg-[#FA8072] hover:text-white hover:shadow-lg whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
