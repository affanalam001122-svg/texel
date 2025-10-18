"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Taxel transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations.",
      rating: 5,
      avatar: "/professional-woman-portrait.png",
    },
    {
      name: "Michael Chen",
      role: "Founder, Creative Labs",
      content:
        "Working with Taxel was a game-changer. They delivered a stunning product that perfectly captured our vision and brand identity.",
      rating: 5,
      avatar: "/professional-man-portrait.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The team at Taxel is exceptional. Their strategic thinking and execution helped us achieve a 300% increase in user engagement.",
      rating: 5,
      avatar: "/professional-woman-smiling-portrait.png",
    },
  ]

  return (
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Client <span className="text-accent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-0 p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
