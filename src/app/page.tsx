import Category from "@/components/Landing/Category/Category";
import Features from "@/components/Landing/Features/features";
import HomeHero from "@/components/Landing/HomeHero/HomeHero";
import HowWorks from "@/components/Landing/HowWorks/HowWorks";
import Join from "@/components/Landing/Join/Join";


export default function Home() {
  return (
    <div>
      <HomeHero/>
      <Category/>
      <HowWorks/>
      <Join/>
      <Features/>
    </div>
  );
}
