"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dribbble, Linkedin, Instagram, Facebook } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          setTimeout(() => {
            let startTime: number | null = null
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)
              setCount(Math.floor(progress * end))
              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            requestAnimationFrame(animate)
          }, delay)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, delay, hasStarted])

  return { count, ref }
}

export function HeroSection() {
  const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(99, 2000, 500)
  const { count: projectCount, ref: projectRef } = useCountUp(152, 2000, 700)

  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animations for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Transform mouse position to rotation values (-8 to 8 degrees)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8])

  // Transform for shadow shifts
  const shadowX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20])
  const shadowY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20])

  // Inverse parallax for background elements
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30])
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const wordVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const words = ["ACCELERATE", "YOUR", "BUSINESS"]

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-[#FFF5F3] via-white to-[#FFF5F3] min-h-[90vh] flex items-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: bgX, y: bgY }}>
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#FA8072]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-80 h-80 bg-[#FA8072]/8 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FA8072]/6 rounded-full blur-2xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#FA8072]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute top-40 left-1/3 w-16 h-16 border-2 border-[#FA8072]/20 rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 65, 45],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-12 h-12 border-2 border-[#FA8072]/15"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-8 h-8 bg-[#FA8072]/10 rounded-full"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-10">
        <motion.div
          className="writing-mode-vertical text-sm font-medium text-[#222222] mb-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          FOLLOW
        </motion.div>
        <div className="w-px h-16 bg-[#222222]/20"></div>
        <motion.a
          href="#"
          className="text-[#222222] hover:text-[#FA8072] transition-colors duration-300"
          aria-label="Dribbble"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <Dribbble size={20} />
        </motion.a>
        <motion.a
          href="#"
          className="text-[#222222] hover:text-[#FA8072] transition-colors duration-300"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <Linkedin size={20} />
        </motion.a>
        <motion.a
          href="#"
          className="text-[#222222] hover:text-[#FA8072] transition-colors duration-300"
          aria-label="Instagram"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <Instagram size={20} />
        </motion.a>
        <motion.a
          href="#"
          className="text-[#222222] hover:text-[#FA8072] transition-colors duration-300"
          aria-label="Facebook"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          <Facebook size={20} />
        </motion.a>
      </div>

      <motion.div
        className="container-custom relative z-10 py-20"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 pt-8">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#222222] leading-[1.1] mb-8"
              style={{
                fontFamily: "var(--font-poppins)",
                textShadow: useTransform([shadowX, shadowY], ([x, y]) => `${x}px ${y}px 40px rgba(250, 128, 114, 0.2)`),
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="block uppercase"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                >
                  <motion.span
                    className="inline-block"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
              <motion.span
                className="block uppercase relative group cursor-default"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                <motion.span
                  className="text-[#FA8072] relative inline-block italic font-black"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(250, 128, 114, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Efficiency
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA8072] via-[#FF6B6B] to-[#FA8072]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#666666] max-w-xl mb-10 leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Helping organizations make their work faster and smoother.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#FA8072] text-white hover:bg-[#FA8072]/90 hover:shadow-lg hover:scale-105 px-8 h-14 text-base font-semibold rounded transition-all duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Get Started
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#222222] hover:bg-[#222222] hover:text-white text-[#222222] px-8 h-14 text-base font-semibold rounded bg-transparent transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-16 pt-8">
            <motion.div
              ref={satisfactionRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div
                className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#222222] mb-4 leading-none relative"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="relative inline-block">
                  {satisfactionCount}%
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FA8072]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </span>
              </div>
              <p
                className="text-base md:text-lg text-[#666666] leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Clients Satisfied And Repeating.
              </p>
            </motion.div>

            <motion.div
              ref={projectRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div
                className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#222222] mb-4 leading-none relative"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="relative inline-block">
                  {projectCount}+
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FA8072]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </span>
              </div>
              <p
                className="text-base md:text-lg text-[#666666] leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Project Completed in 25 Countries.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFF5F3] to-transparent opacity-40 pointer-events-none"></div>
    </section>
  )
}
