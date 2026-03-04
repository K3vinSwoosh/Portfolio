"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/about"

const experiences = [
  {
    company: "ICEP",
    role: "Software Developer Intern",
    period: "2026 -FEB to JULY",
    url: "https://icep.co.za",
    description: [
      "Built and deployed key features for CampusConnect, a React-based student support web app, including authentication and core request flows for students and admins.",
      "Collaborated with a team at ICEP to design and implement responsive UI components, improve UX, and integrate frontend pages with backend endpoints for real data handling.",
      "Currently developing the MEF (Make Education Fashionable) campaign web platform, implementing campaign content pages and student engagement features such as forms and testimonials."
    ],
    tech: ["TypeScript", "React", "Ruby", "GraphQL", "PostgreSQL"],
  },
  {
    company: "InnovateSA",
    role: "Volunteer - Software Developer",
    period: "2025 - FEB to JULY",
    url: "https://InnovateSA.tech",
    description: [
      "Volunteered with Innovative SA on the MediFileSA project, contributing to a medical file system for managing digital patient records.",
      "Built and refined frontend features (React + TypeScript), focusing on responsive UI, form validation, and improving loading states for a smoother user experience.",
      "Collaborated with the team to translate requirements into working screens and components, tested changes thoroughly, and communicated progress during regular check-ins."
    ],
    tech: ["React", "JavaScript", "TypeScript", "Node.js", "PostgreSQL"],
  }

]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="02" title="Where I've Worked" />

        <div className="flex flex-col gap-0 md:flex-row md:gap-8">
          {/* Tab list */}
          <div className="mb-6 flex overflow-x-auto border-b border-border md:mb-0 md:flex-col md:border-b-0 md:border-l">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-5 py-3 text-left text-sm font-medium transition-colors ${activeTab === i
                  ? "border-b-2 border-primary text-primary md:border-b-0 md:border-l-2 md:-ml-px"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[320px] flex-1">
            <h3 className="mb-1 text-lg font-semibold text-foreground">
              {experiences[activeTab].role}{" "}
              <a
                href={experiences[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                @ {experiences[activeTab].company}
                <ExternalLink className="size-3" />
              </a>
            </h3>
            <p className="mb-5 font-mono text-xs text-muted-foreground">
              {experiences[activeTab].period}
            </p>
            <ul className="mb-6 flex flex-col gap-3">
              {experiences[activeTab].description.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].tech.map((t) => (
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
        </div>
      </div>
    </section>
  )
}
