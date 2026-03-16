import { ExternalLink, Github, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/about"

/* 🔴 CHANGE 1: DO NOT IMPORT FROM PUBLIC
   Remove this line completely if you had it:
   import MEF from "public/MEF.png"
*/

const featuredProjects = [
  {
    title: "MediFileSA",
    description:
      "A web-based medical file system (MediFileSA) built to help healthcare professionals securely manage digital patient records. Includes patient profiles, record/document management workflows, and a responsive UI with strong form validation and improved loading states for a smooth user experience.",
    tech: ["JavaScript", "React", "Node.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",

    /* 🔴 CHANGE 2: POINT TO IMAGE IN PUBLIC FOLDER */
    image: "/medifilesa.png",
  },
  {
    title: "Make Education Fashionable (MEF) Campaign Web App",
    description:
      "A campaign website and web app for MEF (Make Education Fashionable) that centralises all campaign information and makes it easy for students to engage. Features dedicated pages for the campaign story and updates, contact details, and interactive sections like pledges and student testimonials, all built with a clean, responsive UI for mobile and desktop.",
    tech: ["PHP", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/MICHAELSIBANDA/Group-2-MEF.git",
    live: "https://main.dxx5zol880p9w.amplifyapp.com/",

    /* 🔴 CHANGE 2 */
    image: "/MEF.png",
  },
]

const otherProjects = [
  {
    title: "CampusConnect",
    description:
      "An interactive software to help students connect with lectures and be up to date with campus announcements and events",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/MICHAELSIBANDA/ICEP-group-2.git",
    live: "https://icep-group-2-campusconnect.onrender.com/",
  },
  {
    title: "SchoolRide APP",
    description:
      "A mobile app for managing school transportation for children and ride-sharing.",
    tech: ["React Native", "Node.js", "Supabase"],
    github: "https://github.com/Tukane01/schoolride.git",
    live: "https://lovable.dev/projects/6d01732f-9af9-49a7-b288-f619f7559a3f",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="03" title="Things I've Built" />

        {/* Featured projects */}
        <div className="mb-20 flex flex-col gap-24">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
          Other Noteworthy Projects
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <OtherProject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="group relative">

      {/* Project Image */}
      <div
        className={`relative overflow-hidden rounded-lg border border-border bg-secondary ${
          isEven ? "md:mr-[40%]" : "md:ml-[40%]"
        }`}
      >
        {/* 🔴 CHANGE 3: REPLACE PLACEHOLDER WITH IMAGE */}
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Project info overlay */}
      <div
        className={`relative mt-6 md:absolute md:top-1/2 md:mt-0 md:w-[55%] md:-translate-y-1/2 ${
          isEven ? "md:right-0 md:text-right" : "md:left-0 md:text-left"
        }`}
      >
        <p className="mb-1 font-mono text-xs text-primary">Featured Project</p>

        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <div className="mb-4 rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-lg">
          {project.description}
        </div>

        <div
          className={`mb-4 flex flex-wrap gap-2 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div
          className={`flex items-center gap-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function OtherProject({
  project,
}: {
  project: (typeof otherProjects)[0]
}) {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">

      <div className="mb-4 flex items-center justify-between">
        <Folder className="size-8 text-primary" />

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-4" />
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="bg-primary/10 text-primary border-0 font-mono text-xs"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}