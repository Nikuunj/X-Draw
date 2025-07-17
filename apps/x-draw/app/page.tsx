import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";



export default function Home() {
    return (
        <div className="space-y-24 md:space-y-11">
            <HeroSection />
            <SecondSection />
        </div>
    );
}
