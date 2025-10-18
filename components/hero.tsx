"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#0891b2"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#0891b2" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 animate-fade-in">
              <Code className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Full-Stack Application Experts</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance animate-fade-in-up">
              From Concept to Code,
              <br />
              <span className="text-accent inline-block">We Build It All</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up stagger-1">
              We are a team of passionate developers creating robust and scalable full-stack applications that power your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 group hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300 bg-transparent">
                View Our Work
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            {[
              { value: "50+", label: "Apps Deployed" },
              { value: "100+", label: "Users Served" },
              { value: "20+", label: "Technologies Used" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-${index + 3}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  )
}
