"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Zap, BarChart3, ArrowRight } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-40 container-custom relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-blob-float"></div>
            <div
              className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 animate-float-slow"
              style={{ animationDelay: "-2s" }}
            ></div>
            <div
              className="absolute top-1/3 left-10 w-52 h-52 bg-primary/6 rounded-full blur-3xl animate-blob-float"
              style={{ animationDelay: "-4s" }}
            ></div>
          </div>

          {/* Animated accent line */}
          <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-primary to-transparent animate-fade-in"></div>

          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-2 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Automation Experts
              </span>
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-text-reveal"
              style={{ animationDelay: "0.4s" }}
            >
              Make your tools work together{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                effortlessly
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl animate-text-reveal"
              style={{ animationDelay: "0.6s" }}
            >
              We help small and growing businesses connect their systems so work flows seamlessly. Automation,
              integration, and support made simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-text-reveal" style={{ animationDelay: "0.8s" }}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 group transition-smooth animate-glow-pulse">
                  <span className="flex items-center">
                    Book a Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="group transition-smooth bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-card border-t border-border" id="services">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We specialize in making your business systems work together seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automation Setup</h3>
                <p className="text-muted-foreground">
                  Design and implement custom workflows that eliminate manual work and save your team hours each week.
                </p>
              </div>

              <div
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Software Integration</h3>
                <p className="text-muted-foreground">
                  Connect your CRM, accounting, marketing, and productivity apps so data flows automatically.
                </p>
              </div>

              <div
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide continuous optimization and support to keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated stats section */}
        <StatsSection />

        {/* How We Work Section */}
        <section className="py-20 container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to transform your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We learn about your business, current tools, and challenges to understand your unique needs.",
              },
              {
                step: "02",
                title: "Integrate",
                description:
                  "Our team designs and implements the perfect solution, connecting your systems seamlessly.",
              },
              {
                step: "03",
                title: "Support",
                description: "We provide ongoing support and optimization to ensure everything runs smoothly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/10 transform translate-y-0"></div>
                )}

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4 relative z-10 hover:scale-110 transition-smooth cursor-default">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Pepper n Canvas transformed how our team works. We've saved countless hours each month with their automations.",
                  author: "Sarah Chen",
                  title: "Founder, Tech Startup",
                },
                {
                  quote: "Professional, thorough, and genuinely invested in our success. Highly recommended!",
                  author: "Marcus Johnson",
                  title: "Operations Manager, Growth Agency",
                },
                {
                  quote: "The integration work was seamless. Our systems now talk to each other perfectly.",
                  author: "Emma Rodriguez",
                  title: "CEO, Digital Marketing Firm",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 container-custom">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center relative overflow-hidden animate-fade-in">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's talk about how we can help you automate, integrate, and grow.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group transition-smooth">
                Book Your Consultation Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
