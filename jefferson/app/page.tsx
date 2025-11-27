
import Navbar from "../components/Navbar"
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Works />
      {/* <Footer /> */}
    </main>
  );
}
