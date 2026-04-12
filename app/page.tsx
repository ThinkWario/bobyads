import { Hero } from "@/components/home/Hero";
import { MarqueeStats } from "@/components/home/MarqueeStats";
import { AnimatedStats } from "@/components/home/AnimatedStats";
import { ValueProp } from "@/components/home/ValueProp";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { Methodology } from "@/components/home/Methodology";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustSection } from "@/components/home/TrustSection";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <MarqueeStats />
      <AnimatedStats />
      <ValueProp />
      <ServicesHighlight />
      <Methodology />
      <FeaturedProducts />
      <TrustSection />
      <HomeCTA />
    </main>
  );
}
