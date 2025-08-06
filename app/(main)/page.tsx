import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Simulasi from "@/components/Simulasi";

export default function Home() {
  return (
    <>
      <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA />
        <Simulasi />
      </main>
    </>
  );
}
