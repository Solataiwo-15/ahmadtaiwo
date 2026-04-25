import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";

export default function Home() {
  return (
    <>
      <GridBackground />
      <SocialDock />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
