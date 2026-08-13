import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experiments from "@/components/sections/Experiments";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experiments />
      <Services />
      <Contact />
    </>
  );
}
