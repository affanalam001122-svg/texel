'use client'

import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "./contact-form"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "texelbrt@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+977 9804495970",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nepal, Biratnagar",
    },
  ]

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="text-muted-foreground mt-2">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8"> 
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
