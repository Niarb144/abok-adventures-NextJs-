import Image from "next/image";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <div className="">
      <main className="">
       
        <Hero />
        <ExperienceSection />
        <Destinations />
        
      </main>
    </div>
  );
}
