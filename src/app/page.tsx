"use client";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CommandsSection } from "@/components/CommandsSection";
import { SupportSection } from "@/components/SupportSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CommandsSection />
        <SupportSection />
      </main>
      <ScrollToTopButton />
    </div>
  );
}
