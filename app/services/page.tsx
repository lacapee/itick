"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, BarChart3, Gauge, CheckCircle2 } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 md:py-24 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive solutions to automate, integrate, and optimize your business operations.
          </p>
        </section>

        {/* Services */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-custom">
            <div className="space-y-16">
              {[
                {
                  icon: Zap,
                  title: "Automation Setup & Workflow Design",
                  description:
                    "We analyze your current processes and design automated workflows that eliminate manual work, reduce errors, and save your team time.",
                  details: [
                    "Process mapping and analysis",
                    "Workflow design and optimization",
                    "Tool selection and configuration",
                    "Testing and refinement",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Software & Tool Integration",
                  description:
                    "Seamlessly connect your CRM, accounting software, marketing platforms, and other business tools so data flows automatically.",
                  details: [
                    "CRM integration (Salesforce, HubSpot, Pipedrive)",
                    "Accounting software connectivity",
                    "Marketing automation setup",
                    "Data synchronization and validation",
                  ],
                },
                {
                  icon: Gauge,
                  title: "Custom Dashboards & Reporting",
                  description:
                    "Get real-time visibility into your business with custom dashboards and automated reports tailored to your needs.",
                  details: [
                    "Dashboard design and setup",
                    "Automated reporting",
                    "KPI tracking",
                    "Real-time data visualization",
                  ],
                },
                {
                  icon: CheckCircle2,
                  title: "Ongoing Support & Optimization",
                  description:
                    "We don't just set things up and leave. We provide continuous support, monitoring, and optimization.",
                  details: [
                    "Monthly optimization reviews",
                    "Performance monitoring",
                    "Process improvement suggestions",
                    "Priority support access",
                  ],
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    </div>
                    <div className="bg-background rounded-lg p-6 border border-border">
                      <h3 className="font-semibold mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
