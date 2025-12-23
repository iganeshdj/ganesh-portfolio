import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button } from "./ui/button";

const projects = [
  {
    title: "HRMS (Facitlix-Go) Mobile App",
    description:
      "Facitlix-Go helps simplify attendance, check-in verification, and duty movement with secure real-time tracking.",
    tech: ["React Native", "Expo", "Firebase", "Redux"],
    github: "#",
    live: "https://hrms.ticktix.com",
  },
  {
    title: "TaskFlow Web App",
    description:
      "A modern project management web application with drag-and-drop functionality, team collaboration, and real-time updates.",
    tech: ["React.js", "TypeScript", "Zustand", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">
            03. Featured Work
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects I’ve Built
          </h2>
          <p className="text-muted-foreground">
            Selected projects showcasing my work in mobile and web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all
                         hover:-translate-y-1 hover:shadow-md"
            >
              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FiGithub className="h-4 w-4" />
                    Code
                  </a>
                </Button>

                <Button asChild variant="ghost" size="sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
