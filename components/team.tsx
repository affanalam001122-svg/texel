'use client'

import { Github, Linkedin, Twitter, Mail, Facebook, Instagram, Link, Eye, ExternalLink } from "lucide-react"
import { motion, Variants } from 'framer-motion'
import { useState } from "react"
import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Siddhaartha Dhakaal (GoruorGoru)",
    role: "Backend-Dev",
    bio: "I use Arch btw! I use nvim btw! I use go btw! You have skill issues, I don't",
    avatar: "https://media.discordapp.net/attachments/1420974677966327858/1428739904845906083/d74c9857-ee04-46cb-9b4d-d0a23bb65503.jpg?ex=68f441fa&is=68f2f07a&hm=d057194e65129f9cfb8490b8d5ca19e0139bbe8c09d14735d59fe37978178f1e&=&format=webp&width=563&height=750",
    socials: {
      twitter: "https://x.com/GuruOrGoru",
      instagram: "https://www.instagram.com/guruorgoru0/",
      facebook: "https://www.facebook.com/Siddhaartha.Dhakaal/",
      mail: "siddharthadhakall3722@gmail.com",
      github: "https://github.com/GuruOrGoru",
      linkedin: "",
    },
    projects: [
      {
        name: "Inclusive (Hackathon Winner): An AI-powered job platform for people with disabilities.",
        link: "https://github.com/GuruOrGoru/Inclusiv",
      },
      {
        name: "Guru Verbal Interpreter: A custom language interpreter built with Go.",
        link: "https://github.com/GuruOrGoru/Making-An-Interpreter-in-Go",
      },
      {
        name: "TUI Portfolio: A terminal-based portfolio accessible via SSH.",
        link: "https://github.com/GuruOrGoru/tuifolio",
      },
      {
        name: "Fragiment: A platform for sharing code snippets.",
        link: "https://github.com/GuruOrGoru/Fragiment",
      },
      {
        name: "TUI Music Player: A work-in-progress music player for the terminal.",
      },
    ],
  },
  {
    name: "MD Samshad",
    role: "UI + Researcher",
    bio: "Jack of all trades, Master of None\nThough often time better than a master of one !",
    avatar: "https://media.discordapp.net/attachments/1420974677966327858/1428969425738010694/IMG_3179.JPG?ex=68f46efc&is=68f31d7c&hm=54bf0677ce12be694acf18090229977e4aae30ef02e878eadb96f72e5eaa8c93&=&format=webp&width=563&height=750",
    socials: {
      twitter: "https://x.com/maybee_vampire",
      instagram: "https://www.instagram.com/maybee_samshad/",
      facebook: "https://www.facebook.com/profile.php?id=61560686467725",
      mail: "iamsamshad7@gmail.com",
      github: "https://github.com/vampire3am",
      linkedin: "",
    },
    projects: [
      {
        name: "Portfolio",
        link: "https://github.com/vampire3am/Portfolio",
      },
      {
        name: "Smart-Leadger",
        link: "https://github.com/vampire3am/Smart-Leadger",
      },
      {
        name: "Glow-menu-component",
        link: "https://github.com/vampire3am/-Glow-menu-component",
      },
      {
        name: "Poem-Vision",
        link: "https://github.com/vampire3am/Poem-Vision-",
      },
      {
        name: "instagram-botter",
        link: "https://github.com/vampire3am/instagram-botter",
      },
    ],
  },
  {
    name: "Affan Alam",
    role: "FrontEnd Developer",
    bio: "⚡ I’m a full-stack web developer passionate about blending clean, efficient code with stunning, user-focused design. I create modern, responsive, and high-performing websites that deliver a seamless experience across all devices. Inspired by the creativity and strategy of gaming, I bring the same energy into my work — precision, innovation, and a drive to level up every project I build.",
    avatar: "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/486465401_122234136860226544_6999280008318679804_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-XdEOuYaRbgQ7kNvwG32qkq&_nc_oc=AdnRpVpXvoBqox-ew3FdEl0s5mPT2WjGpSWpRIr4abA654wHLhOSjDaQflQrDVomD1dT9d1hZGZI9PSDB0rvpSqx&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=xGCzM-4TTpeDk2SJlJ5jKQ&oh=00_AfdpzJU1YaVX0zZMH_-n6dpwZ0V497oWFYAvz82mNvWoxQ&oe=68F8D0A2",
    socials: {
      instagram: "https://www.instagram.com/whlegendgamerz_/",
      facebook: "https://www.facebook.com/whlegendgamerz",
      mail: "affanalam001122@gmail.com",
      linkedin: "",
    },
  },
];

const portfolioProjects = [
    {
      title: "AnimeComix",
      category: "Web Application",
      description: "A vibrant platform for anime and comics enthusiasts to discover, read, and discuss their favorite titles.",
      image: "https://cdn.myanimelist.net/images/anime/1959/151055l.jpg",
      link: "https://animecomix.com",
    },
    {
      title: "FreeGamePro",
      category: "Mobile & Web",
      description: "A platform for discovering and downloading free-to-play PC games, with community reviews and ratings.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/038/957/861/small/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
      link: "https://freegamepro.com",
    },
    {
      title: "FridgeFeast",
      category: "Mobile Application",
      description: "An intelligent recipe app that suggests meals based on the ingredients you already have in your fridge, reducing food waste.",
      image: "/health-wellness-app-interface.jpg",
      link: "https://fridgefeast.xyz/",
    },
    {
      title: "FinanciaWise",
      category: "Web Application & Mobile",
      description: "A personal finance platform that empowers users to manage their budgets, track investments, and achieve their financial goals.",
      image: "/modern-brand-identity.jpg",
      link: "https://financiawise.blog/",
    },
  ]

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function Team() {
  const [showAffanProjects, setShowAffanProjects] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            The passionate people behind the magic.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={index === 0 ? "onscreen" : "offscreen"}
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent to-primary opacity-20 rounded-full blur-md"></div>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto border-4 border-accent/20"
                  />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-4xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-xl mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 whitespace-pre-line">{member.bio}</p>
                  
                  {member.projects && member.projects.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-md font-semibold uppercase text-muted-foreground tracking-wider mb-4">Featured Projects</h4>
                      <ul className="space-y-3">
                        {member.projects.map(p => (
                          <li 
                            key={p.name} 
                            className="glass-card rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-md border border-white/5"
                          >
                            <a 
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-between px-4 py-3 ${p.link ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                              <span className="text-sm">{p.name}</span>
                              {p.link && <Link className="w-4 h-4 text-muted-foreground group-hover:text-accent" />} 
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.name === "Affan Alam" && (
                    <div className="mb-8">
                        <button onClick={() => setShowAffanProjects(!showAffanProjects)} className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                            <Eye size={20} />
                            <span>{showAffanProjects ? 'Hide Projects' : 'See Projects'}</span>
                        </button>
                    </div>
                    )}

                  <div className="flex gap-5 justify-center md:justify-start">
                    {member.socials.twitter && <a href={member.socials.twitter} className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={28} /></a>}
                    {member.socials.instagram && <a href={member.socials.instagram} className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={28} /></a>}
                    {member.socials.facebook && <a href={member.socials.facebook} className="text-muted-foreground hover:text-accent transition-colors"><Facebook size={28} /></a>}
                    {member.socials.mail && <a href={`mailto:${member.socials.mail}`} className="text-muted-foreground hover:text-accent transition-colors"><Mail size={28} /></a>}
                    {member.socials.github && <a href={member.socials.github} className="text-muted-foreground hover:text-accent transition-colors"><Github size={28} /></a>}
                    {member.socials.linkedin && <a href={member.socials.linkedin} className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={28} /></a>}
                  </div>
                </div>
              </motion.div>
            ))}
             {showAffanProjects && (
                <div className="mt-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioProjects.map((project, index) => {
                        const projectCard = (
                            <Card
                            className={`group overflow-hidden border-0 glass-card hover:shadow-2xl transition-all duration-500 h-full cursor-pointer glow-accent scale-in visible stagger-${(index % 4) + 1}`}
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
                                className={`absolute inset-0 bg-gradient-to-br from-accent/90 to-accent/70 flex items-center justify-center transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
