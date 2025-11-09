import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TraitVotingSection from "@/components/TraitVotingSection";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import StudioSection from "@/components/StudioSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Carousel/>
      <AboutSection />
      <TraitVotingSection />
      <StudioSection />
      <Footer />
    </main>
  );
}
