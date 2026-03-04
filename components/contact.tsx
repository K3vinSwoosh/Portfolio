import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-2 font-mono text-sm text-primary">05. What&apos;s Next?</p>
        <h2 className="mb-6 text-4xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mb-10 leading-relaxed text-muted-foreground">
          {"I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you."}
        </p>
        <a
          href="mailto:kevin11swoosh@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/5 px-8 py-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          <Mail className="size-4" />
          Say Hello
        </a>
      </div>
    </section>
  )
}
