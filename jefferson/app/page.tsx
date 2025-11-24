import Image from "next/image";
import Navbar from "../components/Navbar"
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}
