"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with small to medium-sized businesses across various industries. Whether you're a startup, agency, e-commerce store, or service provider, if you use multiple software tools, we can help streamline your operations.",
  },
  {
    question: "How long does a typical integration project take?",
    answer:
      "Most projects take 1-3 weeks depending on complexity. Simple integrations can be completed in a few days, while comprehensive automation systems may take longer. We'll provide a clear timeline during our initial consultation.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all! We handle all the technical work. You just need to share your business processes and goals with us. We'll explain everything in plain language and train your team on how to use the new systems.",
  },
  {
    question: "What tools and platforms do you integrate?",
    answer:
      "We work with popular platforms like Salesforce, HubSpot, QuickBooks, Xero, Mailchimp, Slack, Asana, Zapier, Make, and many more. If you use it, we can likely integrate it.",
  },
  {
    question: "What if something breaks or needs updating?",
    answer:
      "That's what our ongoing support is for! We monitor your integrations, handle updates, and fix any issues that arise. You'll have direct access to our team for priority support.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies based on project scope and complexity. We offer both project-based pricing and monthly retainers. Book a free consultation to discuss your needs and get a custom quote.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our services
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden bg-card transition-all hover:border-primary"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-muted/50 transition-colors"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
            >
              <div className="px-6 pb-4 text-muted-foreground">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
