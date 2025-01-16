import Category from "@/components/Landing/Category/Category";
import Features from "@/components/Landing/Features/features";
import HomeHero from "@/components/Landing/HomeHero/HomeHero";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <Category/>
      <Features/>
    </div>
  );
}
