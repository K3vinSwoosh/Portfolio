import { SectionHeading } from "@/components/about"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      
      "SQL",
      "HTML/CSS",
      "C++",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Spring Boot",
      "Flask",
      "Jest",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Figma",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "REST APIs",
      "GraphQL",
      "CI/CD",
      "Microservices",
      "System Design",
      "Agile/Scrum",
      "Testing",
      "Accessibility",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="04" title="Skills & Technologies" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
