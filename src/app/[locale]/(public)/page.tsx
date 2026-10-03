import Link from "next/link";
import { BookOpen, ShieldCheck, Users, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/HomePage/HeroSection";
import StatsBanner from "@/components/HomePage/StatsBanner";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import ModuleShowcase from "@/components/HomePage/ModuleShowcase";
import KitContentsSection from "@/components/HomePage/KitContentsSection";
import ImpactTestimonials from "@/components/HomePage/ImpactTestimonials";
import PartnerLogos from "@/components/HomePage/FaqAccordion";
import FaqAccordion from "@/components/HomePage/FaqAccordion";
import CallToActionBanner from "@/components/HomePage/CallToActionBanner";

export default async function HomePage() {
  // Load the 'home' namespace translations on the server
  const t = await getTranslations("home");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Key Impact Numbers */}
      <StatsBanner />

      {/* 3. Core Value Proposition */}
      <CoreFeatures />

      {/* 4. Interactive Course Cards Preview */}
      <ModuleShowcase />

      {/* 5. Physical Kit Overview */}
      <KitContentsSection />

      {/* 6. Student & Community Stories */}
      <ImpactTestimonials />

      {/* 7. Institutional Partners */}
      <PartnerLogos />

      {/* 8. FAQs & Privacy */}
      <FaqAccordion />

      {/* 9. Final Action Prompt */}
      <CallToActionBanner />

      
    </div>
  );
}