'use client'

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Founder, InnovateNow",
      content:
        "Texel took our rough concept and turned it into a brand that feels both modern and timeless. Their branding process is incredibly thorough, and the results speak for themselves. We&apos;ve seen a significant increase in market recognition since the rebrand.",
      rating: 5,
      avatar: "https://files.photosnepal.com/preview/2022/12/nepali-man-in-elegant-business-suit-professional-headshot-wearing-watch-e2y3gdfqn.jpg?size=large",
    },
    {
      name: "Samyog Koirala ",
      role: "President Of Aananda Yuva Samuha",
      content:
        "The new e-commerce platform Taxel built for us is a masterpiece. It&apos;s not only beautiful and easy to navigate, but it has also streamlined our sales process. Our online revenue has grown by 40% in the first quarter after launch. We couldn&apos;t be happier.",
      rating: 5,
      avatar: "https://media.discordapp.net/attachments/1420974677966327858/1428974254443069551/indownloader.app_picture_0913059001760764281.jpg?ex=68f4737b&is=68f321fb&hm=ed5a5adb5f2afd24c1afe95f23569d41aba68c9e667decee8a3283cdc47d985f&=&format=webp&width=448&height=448",
    },
    {
      name: "Gaya Koirala",
      role: "Vice chairman of Liquor association federation",
      content:
        "The custom dashboard Taxel designed for our financial analytics app is a game-changer. It visualizes complex data in a way that is both intuitive and powerful. Our clients love it, and it has set us apart from the competition.",
      rating: 5,
      avatar: "https://media.discordapp.net/attachments/1420974677966327858/1428984095295148123/553337406_1470880720681671_4026579351114563_n.png?ex=68f47ca5&is=68f32b25&hm=60596c8dbd10a0b496d9721092fdb82472e0d9188b3f2e4dca26a1f6d6a60f91&=&format=webp&quality=lossless&width=563&height=750",
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
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
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
