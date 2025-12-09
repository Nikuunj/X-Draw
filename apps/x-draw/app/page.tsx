import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";



export default function Home() {
  return (
    <>
      <NavBar />
      <div className="space-y-24 md:space-y-11">
        <HeroSection />
        <SecondSection />
        <Footer />
      </div>
    </>
  );
}
