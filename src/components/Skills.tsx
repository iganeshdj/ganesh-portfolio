import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiExpo, 
  SiRedux, 
  SiFirebase, 
  SiTypescript, 
  SiTailwindcss,
  SiGit,
  SiFigma
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">
            02. Skills & Technologies
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Tech Stack
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            I work with modern technologies and frameworks to build exceptional 
            mobile and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 card-shadow hover:card-shadow-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted transition-transform duration-300 group-hover:scale-110">
                <skill.icon 
                  className="h-8 w-8 transition-colors" 
                  style={{ color: skill.color }}
                />
              </div>
              <span className="text-center text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Also experienced with:{" "}
            <span className="text-foreground">
              REST APIs, GraphQL, Jest, Detox, CI/CD, App Store & Play Store Publishing
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
