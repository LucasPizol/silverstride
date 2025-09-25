import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stories from "@/components/Stories";
import PersonalizedCare from "@/components/PersonalizedCare";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-16 bg-default">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Stories />
      <PersonalizedCare />
      <Contact />
      <Footer />
    </main>
  );
}
