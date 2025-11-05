"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Zap, BarChart3, ArrowRight, Database, LineChart, Users, Settings } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        <section
          ref={heroRef}
          className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-primary/10"
        >
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Flowing abstract lines */}
            <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FA8072" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E86A5C" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
                fill="url(#line-gradient)"
                className="animate-float-slow"
              />
              <path
                d="M0,300 Q300,250 600,300 T1200,300"
                stroke="#FA8072"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                className="animate-shimmer"
              />
              <path
                d="M200,500 Q500,450 800,500 T1400,500"
                stroke="#E86A5C"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
                className="animate-float"
              />
            </svg>

            {/* Animated orbs */}
            <div
              className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob-float"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute bottom-40 left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-blob-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob-float"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Cursor following element */}
            <div
              className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>

          <div className="container-custom relative z-10 py-20 md:py-40">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge with fade-in animation */}
              <div className="mb-8 animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></span>
                  Automation Experts
                </span>
              </div>

              {/* Main heading with staggered animation */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-foreground mb-2 animate-text-reveal" style={{ animationDelay: "0.3s" }}>
                  We Build Smart Workflows
                </span>
                <span className="block text-foreground mb-2 animate-text-reveal" style={{ animationDelay: "0.5s" }}>
                  That Work
                </span>
                <span
                  className="block bg-gradient-to-r from-primary via-[#E86A5C] to-primary bg-clip-text text-transparent animate-text-reveal"
                  style={{ animationDelay: "0.7s" }}
                >
                  for You
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                Automation setup, workflow design, integrations, and dashboards that make your business run on
                autopilot.
              </p>

              {/* CTA Buttons with hover animations */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: "1.1s" }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Start a Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#E86A5C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 text-foreground hover:bg-primary/5 group bg-white/80 backdrop-blur-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-20 bg-white" id="services">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                  <Zap className="w-4 h-4" />
                  Automation Setup
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up">
                  Workflow Design That Eliminates Manual Work
                </h2>
                <p
                  className="text-lg text-muted-foreground leading-relaxed animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  We design custom automation workflows tailored to your business processes, saving your team hours
                  every week.
                </p>

                {/* What's Included - Sequential slide-in */}
                <div className="space-y-4 pt-4">
                  {[
                    "Process mapping and workflow analysis",
                    "Custom automation design and implementation",
                    "Integration with your existing tools",
                    "Testing and optimization",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-slide-in-left"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Animated flow diagram */}
              <div className="relative h-96 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated connection lines */}
                    <defs>
                      <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FA8072" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#FA8072" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FA8072" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Vertical flow line */}
                    <line
                      x1="200"
                      y1="80"
                      x2="200"
                      y2="320"
                      stroke="url(#flow-gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-shimmer"
                    />

                    {/* Process nodes */}
                    <g className="animate-scale-in" style={{ animationDelay: "0.5s" }}>
                      <circle cx="200" cy="80" r="30" fill="#FA8072" opacity="0.2" />
                      <circle cx="200" cy="80" r="20" fill="#FA8072" />
                      <text x="200" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        Start
                      </text>
                    </g>

                    <g className="animate-scale-in" style={{ animationDelay: "0.7s" }}>
                      <circle cx="200" cy="160" r="35" fill="#FA8072" opacity="0.1" />
                      <circle cx="200" cy="160" r="25" fill="white" stroke="#FA8072" strokeWidth="2" />
                      <text x="200" y="165" textAnchor="middle" fill="#FA8072" fontSize="11" fontWeight="600">
                        Process
                      </text>
                    </g>

                    <g className="animate-scale-in" style={{ animationDelay: "0.9s" }}>
                      <circle cx="200" cy="240" r="35" fill="#FA8072" opacity="0.1" />
                      <circle cx="200" cy="240" r="25" fill="white" stroke="#FA8072" strokeWidth="2" />
                      <text x="200" y="245" textAnchor="middle" fill="#FA8072" fontSize="11" fontWeight="600">
                        Automate
                      </text>
                    </g>

                    <g className="animate-scale-in" style={{ animationDelay: "1.1s" }}>
                      <circle cx="200" cy="320" r="30" fill="#E86A5C" opacity="0.2" />
                      <circle cx="200" cy="320" r="20" fill="#E86A5C" />
                      <text x="200" y="325" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        Done
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
          {/* Floating accent orbs */}
          <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
                <Database className="w-4 h-4" />
                Software Integration
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Connect Your Tools Seamlessly</h2>
              <p
                className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                We integrate your CRM, accounting, marketing, and productivity apps so data flows automatically.
              </p>
            </div>

            {/* Integration icons with animated connections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { name: "CRM", icon: Users, delay: "0.3s" },
                { name: "Accounting", icon: BarChart3, delay: "0.4s" },
                { name: "Marketing", icon: Zap, delay: "0.5s" },
                { name: "Analytics", icon: LineChart, delay: "0.6s" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-scale-in group"
                  style={{ animationDelay: tool.delay }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
          {/* Gentle data waves background */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FA8072" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#FA8072" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FA8072" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q250,150 500,200 T1000,200 L1000,400 L0,400 Z"
                fill="url(#wave-gradient)"
                className="animate-float-slow"
              />
            </svg>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Settings className="w-4 h-4" />
                Ongoing Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
                Continuous Optimization for Peak Performance
              </h2>
              <p
                className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                Your business evolves, and so should your automations. We provide ongoing support, monitoring, and
                optimization to ensure your systems always run at their best.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="relative z-10 flex items-center">
                    Get Continuous Optimization
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#E86A5C] to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer"></div>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-primary to-[#E86A5C] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl animate-fade-in">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-blob-float"></div>
                <div
                  className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full blur-3xl animate-blob-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                  Ready to Automate Your Business?
                </h2>
                <p
                  className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Let's build smart workflows that work for you. Book a free consultation today.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
