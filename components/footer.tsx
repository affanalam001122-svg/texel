import { Facebook, Instagram, Mail } from "lucide-react"
import Link from 'next/link'

export function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Team", href: "/team" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582667030859" },
    { icon: Instagram, href: "https://www.instagram.com/texel_brt" },
    { icon: Mail, href: "mailto:texelbrt@gmail.com" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold mb-2">Texel</h3>
              <p className="text-primary-foreground/70 text-sm">
                Creative digital agency for building amazing things.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>texelbrt@gmail.com</li>
                <li>+977 9804495970</li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">&copy; {new Date().getFullYear()} Texel. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
                <Link href="/privacy-policy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
