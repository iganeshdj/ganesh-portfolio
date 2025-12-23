import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiSmartphone, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: FiSmartphone,
    title: "Mobile First",
    description: "Building native-quality apps with React Native & Expo",
  },
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: FiZap,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">
            01. About Me
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Turning Ideas Into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a passionate Mobile App Developer and Software Engineer with 9+ months of experience 
            building high-quality applications. I specialize in React Native with Expo and React.js, 
            creating seamless cross-platform experiences that users love.
          </p>
          <p className="mb-12 text-base leading-relaxed text-muted-foreground sm:text-lg">
            My approach combines technical expertise with a keen eye for design, ensuring every 
            project not only functions flawlessly but also delivers an exceptional user experience. 
            I'm driven by the challenge of solving complex problems and the satisfaction of seeing 
            my work make a real impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 card-shadow hover:card-shadow-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
