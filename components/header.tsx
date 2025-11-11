"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-out ${
          isScrolled
            ? "max-w-full mx-0 rounded-none shadow-md bg-white border-b border-[#e5e5e5]"
            : "max-w-[95%] lg:max-w-[90%] mx-auto rounded-full shadow-lg bg-white border border-[#e5e5e5]/50"
        }`}
      >
        <div className="container-custom py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#FA8072] rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                Pn
              </span>
            </div>
            <span
              className="font-bold text-xl hidden sm:inline text-[#222222]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Pepper n Canvas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-[#222222] hover:text-[#FA8072] transition-colors font-medium hidden md:inline"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#222222] hover:text-[#FA8072] transition-colors font-medium hidden md:inline"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[#222222] hover:text-[#FA8072] transition-colors font-medium hidden md:inline"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#222222] hover:text-[#FA8072] transition-colors font-medium hidden md:inline"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Contact
            </Link>

            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Outer rotating circle on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-[#FA8072] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />

                {/* Dot pattern that transforms into X */}
                <div className="relative w-6 h-6 flex flex-wrap gap-1 justify-center items-center">
                  {/* Top left dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen
                        ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-0.5 rounded-none"
                        : ""
                    }`}
                  />
                  {/* Top right dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  {/* Middle left dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  {/* Middle right dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  {/* Bottom left dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  {/* Bottom right dot */}
                  <span
                    className={`w-1.5 h-1.5 bg-[#222222] rounded-full transition-all duration-300 ease-out group-hover:bg-[#FA8072] ${
                      isOpen
                        ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-4 h-0.5 rounded-none"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </button>
          </nav>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[80px] bg-white z-40 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container-custom py-8 h-full flex flex-col">
          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mb-12">
            <Link
              href="/"
              className={`text-2xl text-[#222222] hover:text-[#FA8072] transition-all duration-300 font-medium transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                transitionDelay: isOpen ? "100ms" : "0ms",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-2xl text-[#222222] hover:text-[#FA8072] transition-all duration-300 font-medium transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                transitionDelay: isOpen ? "200ms" : "0ms",
              }}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-2xl text-[#222222] hover:text-[#FA8072] transition-all duration-300 font-medium transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                transitionDelay: isOpen ? "300ms" : "0ms",
              }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-2xl text-[#222222] hover:text-[#FA8072] transition-all duration-300 font-medium transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                transitionDelay: isOpen ? "400ms" : "0ms",
              }}
            >
              Contact
            </Link>
          </div>

          {/* Branding Section */}
          <div
            className={`mt-auto transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          >
            <h2
              className="text-5xl font-bold italic text-[#FA8072] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              EFFICIENCY
            </h2>
            <p className="text-[#666666] text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Helping organizations make their work faster and smoother.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
