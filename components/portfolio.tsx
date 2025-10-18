"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2)

  const projects = [
    {
      title: "FinTech Platform",
      category: "Web Application",
      description: "A comprehensive financial management platform with real-time analytics and AI-powered insights.",
      image: "/modern-fintech-dashboard-with-charts.jpg",
    },
    {
      title: "E-Commerce Revolution",
      category: "Mobile & Web",
      description: "Next-generation shopping experience with AR try-on and personalized recommendations.",
      image: "/modern-ecommerce-mobile-app-interface.jpg",
    },
    {
      title: "Health & Wellness App",
      category: "Mobile Application",
      description: "Holistic health tracking app with AI coaching and community features.",
      image: "/health-wellness-app-interface.jpg",
    },
    {
      title: "Creative Studio Rebrand",
      category: "Brand Identity",
      description: "Complete brand transformation for a leading creative agency.",
      image: "/modern-brand-identity.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-4 mb-16 fade-in-up ${sectionVisible ? "visible" : ""}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Featured <span className="text-accent glow-accent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 glass-card hover:shadow-2xl transition-all duration-500 cursor-pointer glow-accent scale-in ${
                  sectionVisible ? "visible" : ""
                } stagger-${(index % 4) + 1}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-accent/90 to-accent/70 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ExternalLink className="w-12 h-12 text-accent-foreground animate-pulse" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-accent font-medium mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
