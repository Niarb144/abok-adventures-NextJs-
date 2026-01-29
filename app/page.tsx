import Image from "next/image";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Destinations from "@/components/Destinations";
import TourDestinations from "@/components/TourDestinations";
import AboutPage from "@/components/AboutPage";
import ReviewsCTASection from "@/components/ReviewsCTASection";

export default function Home() {
  return (
    <div className="">
      <main className="">
       
        <Hero />
        <ExperienceSection />
        <Destinations />
        <TourDestinations />
        <AboutPage />
        <ReviewsCTASection />

      </main>
    </div>
  );
}
