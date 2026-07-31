import Navbar      from "@/components/Navbar";
import Hero        from "@/components/sections/Hero";
import Projects    from "@/components/sections/Projects";
import Skills      from "@/components/sections/Skills";
import Challenges  from "@/components/sections/Challenges";
import Certificate from "@/components/sections/Certificate";
import Contact     from "@/components/sections/Contact";
import Footer      from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Challenges />
      <Certificate />
      <Contact />
      <Footer />
    </main>
  );
}
