"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsultationForm } from "@/components/consultation-form"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 md:py-24 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ready to transform your business? Let's schedule a consultation to discuss your needs and goals.
          </p>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-custom max-w-2xl">
            <ConsultationForm />
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@pepperncanvas.com" className="text-primary hover:underline">
                info@pepperncanvas.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
