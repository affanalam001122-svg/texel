'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2)

  const projects = [
    {
      title: "AnimeComix",
      category: "Web Application",
      description: "A vibrant platform for anime and comics enthusiasts to discover, read, and discuss their favorite titles.",
      image: "https://cdn.myanimelist.net/images/anime/1959/151055l.jpg",
      link: "https://animecomix.com",
    },
    {
      title: "Inclusiv",
      category: "Web Application",
      description: "Inclusiv is an AI-powered job portal highlighting diverse, accessible, and flexible roles making job hunting fair and inclusive for everyone.",
      image: "https://media.discordapp.net/attachments/1420974677966327858/1428957394213408900/screenshot-2025-10-18_09-49-43.png?ex=68f463c7&is=68f31247&hm=48aca132a9639c8b99bc90ede1127ab6a754d6d6f74cd0751dfcae68c25c591c&=&format=webp&quality=lossless&width=1159&height=696",
      link: "https://inclusiv.surge.sh",
    },
    {
      title: "Tuifolio",
      category: "SSH-Terrminal Application",
      description: "Tuifolio is an interactive terminal portfolio built with Go and Bubbletea, featuring sections for skills, projects, and contact info a sleek, SSH-accessible way for developers to showcase their work.",
      image: "https://media.discordapp.net/attachments/1420974677966327858/1428957427528761486/screenshot-2025-10-18_09-50-57.png?ex=68f463cf&is=68f3124f&hm=c4ce3279f8d4d3c3950741825272ba58a3c596fd11040a423dbc0a77ab734cee&=&format=webp&quality=lossless&width=1159&height=696",
      link: "https://github.com/guruorgoru/tuifolio",
    },
    {
      title: "FinanciaWise",
      category: "Web Application & Mobile",
      description: "A personal finance platform that empowers users to manage their budgets, track investments, and achieve their financial goals.",
      image: "/modern-brand-identity.jpg",
      link: "https://financiawise.blog/",
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
            {projects.map((project, index) => {
              const projectCard = (
                <Card
                  className={`group overflow-hidden border-0 glass-card hover:shadow-2xl transition-all duration-500 h-full cursor-pointer glow-accent scale-in ${
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
              )

              if (project.link) {
                return (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="block h-full">
                    {projectCard}
                  </a>
                )
              }

              return <div key={index}>{projectCard}</div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
