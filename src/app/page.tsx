import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 ">
      <Navbar />
      <div className="mx-auto px-8 pb-10 pt-10 space-y-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Testimonials />
        <Skills />
        <Contact />
         <Footer />
      </div>
    </main>
  );
}
