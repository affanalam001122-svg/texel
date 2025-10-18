"use client"

import { Sparkles, Target, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2)

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push boundaries and explore new possibilities in every project we undertake.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Our focus is on delivering measurable outcomes that exceed expectations.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We build lasting partnerships through collaboration.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-4 mb-16 fade-in-up ${sectionVisible ? "visible" : ""}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Crafting Digital Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              We are a team of passionate creators, strategists, and technologists dedicated to bringing your vision to
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 group scale-in ${
                  sectionVisible ? "visible" : ""
                } stagger-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:rotate-3 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
