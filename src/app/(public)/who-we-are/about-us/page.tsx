'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Sparkles,
  Award,
  Globe,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Dignity First',
    description: 'Menstrual care is a fundamental human right. Every kit distributed protects personal health and self-respect.',
  },
  {
    icon: Target,
    title: 'Educational Equity',
    description: 'We dismantle health literacy barriers using accessible, digital-first Learning Management Systems (LMS).',
  },
  {
    icon: ShieldCheck,
    title: 'Sustainable Care',
    description: 'Combining eco-conscious products with long-term community workshops to break menstrual taboos permanently.',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Empowering local leaders, educators, and youth volunteers to drive lasting change from within.',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Grassroots Beginning',
    detail: 'Launched our initial pilot program distributing hygiene kits to 500 local students.',
  },
  {
    year: '2024',
    title: 'LMS Digital Rollout',
    detail: 'Built and deployed interactive reproductive health education modules across partner schools.',
  },
  {
    year: '2025',
    title: 'Holistic Health Kits',
    detail: 'Expanded care packages to include heat compression tools for cramp relief and nutrition packs.',
  },
  {
    year: '2026',
    title: 'Scaling Impact',
    detail: 'Over 25,000+ hygiene kits distributed and 10,000+ active learners across the platform.',
  },
];

export default function AboutUsPage() {
  const [activePillar, setActivePillar] = useState<'mission' | 'vision'>('mission');

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Soft Ambient Light Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] sm:w-[50rem] h-[25rem] bg-pink-200/50 rounded-full blur-[120px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 border border-pink-200/80 text-[#C01C5C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-6 shadow-xs"
        >
          <Sparkles className="w-4 h-4" />
          <span>Who We Are</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.15]"
        >
          Empowering Her Future Through <span className="bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-500 bg-clip-text text-transparent">Health & Education.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          MPOWERHER is a non-profit movement dedicated to ending period poverty, shattering health taboos, and keeping girls in school through innovative care and digital learning.
        </motion.p>
      </section>

      {/* 2. INTERACTIVE MISSION & VISION PILLARS */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="bg-white border border-pink-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-pink-100/40 relative">
          
          {/* Pillar Switcher Controls */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
              <button
                onClick={() => setActivePillar('mission')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activePillar === 'mission'
                    ? 'bg-[#C01C5C] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>
              <button
                onClick={() => setActivePillar('vision')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activePillar === 'vision'
                    ? 'bg-[#C01C5C] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          <AnimatePresence mode="wait">
            {activePillar === 'mission' ? (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dignity, Health, and Education for Every Girl
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  Our mission is to eliminate menstrual health barriers by providing direct access to essential hygiene supplies, cramp relief care, nutritional support, and interactive digital education that keeps young women in school.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  A World Without Period Stigma or Absenteeism
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  We envision a future where no student misses a single day of school because of her period, where health education is universally accessible, and where every young woman has full autonomy over her body and health.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">The Principles That Drive Us</h2>
          <p className="text-slate-600 text-base">Every initiative we build is guided by empathy, scientific education, and community respect.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-pink-50 border border-pink-200 text-[#C01C5C] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. OUR MILESTONES & JOURNEY */}
      <section className="py-16 lg:py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Growth & Impact Story</h2>
          <p className="text-slate-600 text-base">From a local community outreach initiative to a tech-enabled health movement.</p>
        </div>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-pink-100 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="px-4 py-2 rounded-xl bg-pink-50 border border-pink-200 text-[#C01C5C] font-extrabold text-lg sm:text-xl shrink-0">
                {item.year}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-12 lg:py-20 px-6 max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-600 p-10 sm:p-14 text-center overflow-hidden shadow-2xl shadow-pink-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight relative z-10">
            Be Part of the MPOWERHER Movement
          </h2>
          <p className="mt-4 text-pink-100 text-base sm:text-lg max-w-xl mx-auto font-normal relative z-10">
            Whether through volunteering, sponsoring health kits, or joining our educational team, your support changes lives.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="/who-we-are/volunteer"
              className="px-8 py-4 rounded-xl bg-white text-[#C01C5C] font-bold text-base hover:bg-pink-50 transition-colors shadow-lg"
            >
              Become a Volunteer
            </a>
            <a
              href="/what-we-do/our-impact"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors"
            >
              Explore Our Impact
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}