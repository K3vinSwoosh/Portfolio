"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">
          Hi, my name is
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          <span className="text-balance">Chabalala Kevin</span>
        </h1>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-5xl">
          <span className="text-balance">I build Responsive Websites and Applications</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted-foreground">
          {"I'm a recent Computer Science graduate passionate about crafting clean, performant, and accessible digital experiences. Currently seeking opportunities to build impactful software at scale."}
        </p>

        {/* Social links */}
        <div className="mb-12 flex items-center justify-center gap-5">
          <a
            href="https://github.com/K3vinSwoosh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/kevin-chabalala-7191b6382"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="kevin11swoosh@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>

        {/* CTA */}
        <a
          href="#about"
          className="group inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Explore my work
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
