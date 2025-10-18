"use client"

import { useState } from "react"
import { Code, Palette, Rocket, Smartphone, Globe, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2)

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Create memorable brand experiences that resonate with your audience and stand out in the market.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build fast, scalable, and secure web applications using cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Design and develop native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that drive growth and engagement.",
    },
    {
      icon: Rocket,
      title: "Product Launch",
      description: "From concept to market, we guide your product through every stage of development.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your digital products with speed, efficiency, and seamless user experiences.",
    },
  ]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-4 mb-16 fade-in-up ${sectionVisible ? "visible" : ""}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive solutions tailored to elevate your digital presence and drive meaningful results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden scale-in ${
                  sectionVisible ? "visible" : ""
                } stagger-${(index % 6) + 1}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-accent/20 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
