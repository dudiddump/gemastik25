import ResponsiveContainer from "@/components/ResponsiveContainer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ResponsiveContainer>
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </ResponsiveContainer>
  );
}
