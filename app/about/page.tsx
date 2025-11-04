"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 md:py-24 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pepper n Canvas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We're passionate about helping businesses work smarter, not harder.
          </p>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Pepper n Canvas was born from frustration. We watched brilliant business owners waste hours each week
                  manually moving data between systems, and we knew there had to be a better way.
                </p>
                <p>
                  What started as an idea to help a few friends quickly grew into a mission: to make business automation
                  accessible to small and growing businesses, not just enterprises with massive IT budgets.
                </p>
                <p>
                  Today, we work with diverse businesses across industries to design, implement, and optimize their
                  systems. Our approach is simple: listen first, understand deeply, and build solutions that actually
                  fit your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Simplicity",
                description:
                  "We believe great solutions should be easy to understand and use. No unnecessary complexity.",
              },
              {
                title: "Clarity",
                description:
                  "Transparent communication is everything. We explain what we're doing and why, every step of the way.",
              },
              {
                title: "Partnership",
                description: "Your success is our success. We're invested in your long-term growth and optimization.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
