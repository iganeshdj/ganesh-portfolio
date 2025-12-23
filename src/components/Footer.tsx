import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const thanks = [
  "நன்றி ",
  "Thank you ",
  "धन्यवाद ",
  "നന്ദി "
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentWord = thanks[wordIndex];
      let timeout;
  
      if (!isDeleting && charIndex < currentWord.length) {
        // typing
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 120);
      } 
      else if (isDeleting && charIndex > 0) {
        // deleting
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 60);
      } 
      else if (!isDeleting && charIndex === currentWord.length) {
        // pause after typing
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } 
      else if (isDeleting && charIndex === 0) {
        // move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % thanks.length);
      }
  
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);
  
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/iganeshdj", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/ganesh-dj/", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
      href="#"
      className="text-xl font-bold tracking-tight"
      whileHover={{ scale: 1.02 }}
    >
      <span className="gradient-text">
        {"<"}
        {text}
        {"/>"}
        <span className="animate-pulse">|</span>
      </span>
    </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                whileHover={{ y: -2 }}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Ganesh. All rights reserved.</span>
            <FiHeart className="h-4 w-4 text-primary" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
