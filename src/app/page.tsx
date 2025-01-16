import Category from "@/components/Landing/Category/Category";
import Features from "@/components/Landing/Features/features";
import HomeHero from "@/components/Landing/HomeHero/HomeHero";
import HowWorks from "@/components/Landing/HowWorks/HowWorks";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <Category/>
      <HowWorks/>
      <Features/>
    </div>
  );
}
