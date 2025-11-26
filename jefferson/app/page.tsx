
import Navbar from "../components/Navbar"
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Works />
    </main>
  );
}
