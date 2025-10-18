'use client'

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Founder, InnovateNow",
      content:
        "Texel took our rough concept and turned it into a brand that feels both modern and timeless. Their branding process is incredibly thorough, and the results speak for themselves. We've seen a significant increase in market recognition since the rebrand.",
      rating: 5,
      avatar: "https://files.photosnepal.com/preview/2022/12/nepali-man-in-elegant-business-suit-professional-headshot-wearing-watch-e2y3gdfqn.jpg?size=large",
    },
    {
      name: "Sunita Rai",
      role: "Head of Marketing, Healthful Foods",
      content:
        "The new e-commerce platform Taxel built for us is a masterpiece. It's not only beautiful and easy to navigate, but it has also streamlined our sales process. Our online revenue has grown by 40% in the first quarter after launch. We couldn't be happier.",
      rating: 5,
      avatar: "https://files.photosnepal.com/preview/2022/12/professional-nepali-stock-image-2np7av1fm.jpg?size=large",
    },
    {
      name: "David Chen",
      role: "CEO, FinTech Solutions",
      content:
        "The custom dashboard Taxel designed for our financial analytics app is a game-changer. It visualizes complex data in a way that is both intuitive and powerful. Our clients love it, and it has set us apart from the competition.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
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
