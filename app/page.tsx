import { Hero } from "@/components/home/Hero";
import { MarqueeStats } from "@/components/home/MarqueeStats";
import { ValueProp } from "@/components/home/ValueProp";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { Methodology } from "@/components/home/Methodology";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <MarqueeStats />
      <ValueProp />
      <ServicesHighlight />
      <Methodology />
      <FeaturedProducts />
      <TrustSection />
    </main>
  );
}
