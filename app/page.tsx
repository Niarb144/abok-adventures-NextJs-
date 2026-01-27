import Image from "next/image";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Destinations from "@/components/Destinations";
import TourDestinations from "@/components/TourDestinations";

export default function Home() {
  return (
    <div className="">
      <main className="">
       
        <Hero />
        <ExperienceSection />
        <Destinations />
        <TourDestinations />
      </main>
    </div>
  );
}
