import { About } from "@/components/About";
import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="">
      <Navbar />
     <LandingPage />
     <About />
     <Stack />
     <Work />
     <Footer />
    </main>
  );
}
