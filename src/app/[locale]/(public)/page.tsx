// src/app/(marketing)/page.tsx
import Link from "next/link";
import { BookOpen, ShieldCheck, Users, Heart, ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import HeroSection from "@/components/HomePage/HeroSection";
import StatsBanner from "@/components/HomePage/StatsBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. STATS BAR */}
      <StatsBanner/>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
              Why Learn With <span className="text-[#C01C5C]">MPOWERHER?</span>
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base">
              Built specifically for offline-first, mobile access in community and school environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-[#FDF2F8]/60 border border-pink-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-[#C01C5C] text-white flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Localized Curriculum</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lessons tailored to cultural contexts, stripping away stigma while focusing on accurate science and care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-[#FDF2F8]/60 border border-pink-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-[#C01C5C] text-white flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Community Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instructors and mentors guide students safely through coursework with structured Q&A.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-[#FDF2F8]/60 border border-pink-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-[#C01C5C] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Private & Secure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Progress tracking and personal insights stay confidential so every learner feels safe.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-16 bg-[#FDF2F8] border-y border-pink-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <Heart className="w-10 h-10 text-[#C01C5C] mx-auto fill-[#C01C5C]" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            Ready to Empower the Next Generation?
          </h2>
          <p className="font-sans text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Create an account today to access all learning materials or enroll your school network.
          </p>
          <div className="pt-2">
            <Link
              href="/register"
              className="btn font-heading bg-[#C01C5C] hover:bg-[#a0164c] text-white rounded-xl px-10 h-12 border-none shadow-md"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}