import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ganesh | Portfolio </title>
        <meta
          name="description"
          content="Ganesh is a Mobile App Developer and Frontend Developer specializing in React Native, Expo, and React.js. Building beautiful, performant applications."
        />
        <meta
          name="keywords"
          content="Mobile App Developer, Frontend Developer, React Native, Expo, React.js, TypeScript, Redux, Firebase"
        />
        <meta property="og:title" content="Ganesh | Mobile App Developer" />
        <meta
          property="og:description"
          content="Building beautiful, performant mobile and web applications with React Native and React.js."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
