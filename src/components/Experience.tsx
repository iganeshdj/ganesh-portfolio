import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";

/* -----------------------------
   Types
-------------------------------- */
type ExperienceType = "education" | "work";

interface ExperienceItem {
  type: ExperienceType;
  title: string;
  company: string;
  period: string;
  description: string;
}

/* -----------------------------
   Data
-------------------------------- */
const experiences: ExperienceItem[] = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Government Arts College (Autonomous), Kumbakonam",
    period: "2021",
    description:
      "Completed my undergraduate degree in Computer Applications, building a solid base in programming and computer science.",
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    company: "Anna University, Tiruchirappalli",
    period: "2023",
    description:
      "Completed my postgraduate degree in Computer Applications with a strong focus on software development and modern technologies.",
  },
  {
    type: "work",
    title: "Junior WordPress Developer (Internship)",
    company: "Sri Vems Business Services",
    period: "Sep 2023 – Jan 2024",
    description:
      "Started my professional journey in web development, working on WordPress projects and learning industry best practices.",
  },
  {
    type: "work",
    title: "Sales Associate",
    company: "Caspian Management Services (CMS) – Asian Paints",
    period: "2024 – 2025",
    description:
      "Gained experience in customer engagement, communication, and relationship management.",
  },
  {
    type: "work",
    title: "Software Developer",
    company: "Ticktix Solutions Pvt Ltd",
    period: "March 2025 – Present",
    description:
      "Currently working as a Full-Stack Web and Mobile App Developer, contributing to both front-end and back-end development.",
  },
];

/* -----------------------------
   Component
-------------------------------- */
const Experience: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">
            04. Experience
          </span>

          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Professional Journey
          </h2>

          <p className="text-base text-muted-foreground sm:text-lg">
            My journey from academic foundations to professional experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Center Line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:text-left"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:left-1/2 md:block md:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 card-shadow hover:card-shadow-hover ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {/* Icon + Period */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {exp.type === "education" ? (
                      <HiAcademicCap className="h-5 w-5" />
                    ) : (
                      <FiBriefcase className="h-5 w-5" />
                    )}
                  </div>

                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mb-1 text-xl font-semibold">{exp.title}</h3>

                <p className="mb-4 text-sm font-medium text-primary">
                  {exp.company}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
