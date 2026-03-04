import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/K3vinSwoosh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/kevin-chabalala-7191b6382"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:kevin11swoosh@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Kevin Chabalala
        </p>
      </div>
    </footer>
  )
}
