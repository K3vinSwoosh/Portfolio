import { GraduationCap, Code, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-4 leading-relaxed text-muted-foreground">

              {"I’m Kevin Chabalala, a final-year Computer Science Diploma student at Tshwane University of Technology (TUT) based in Pretoria. I build modern web applications and enjoy turning ideas into clean, user-friendly products. I’m especially focused on frontend development, but I’m comfortable working across the stack when needed."}
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {"I’ve worked on multiple projects using React and TypeScript on the frontend, and Java (Spring Boot) with PostgreSQL on the backend. I contributed to the MediFileSA medical file system as part of a team project with Innovative SA, where we built features for managing digital patient records and focused on usability, validation, responsiveness, and smooth loading states. I’m also currently developing the MEF (Make Education Fashionable) campaign web app, building a clean, informative platform that shares campaign info and enables student engagement through forms and testimonials."}
            </p>

            <p className="mb-4 leading-relaxed text-muted-foreground">
              {"I enjoy collaborating in teams, learning from feedback, and solving problems through debugging and iteration. When I’m not coding, I’m focused on self-improvement and staying consistent with my goals."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <GraduationCap className="mb-3 size-5 text-primary" />
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                Education
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Diploma in Computer Science
                <br />
                Tshwane University of Technology (TUT)
                <br />
                Class of 2025
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <Code className="mb-3 size-5 text-primary" />
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                Focus
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Software Development (Full-Stack Programming)
                <br />
                Database Development and Administration
                <br />
                Business Analysis & Modelling
                <br />
                Mobile Development
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <Lightbulb className="mb-3 size-5 text-primary" />
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                Interests
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Open Source
                <br />
                Developer Tools
                <br />
                Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-12 flex items-center gap-3">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
