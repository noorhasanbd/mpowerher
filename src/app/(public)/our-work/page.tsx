'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  HeartPulse,
  Apple,
  Thermometer,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Laptop,
  ShieldCheck,
} from 'lucide-react';

const pillars = [
  {
    id: 'lms-education',
    title: 'LMS Platform Education',
    subtitle: 'Interactive Menstrual & Health Education',
    icon: GraduationCap,
    tag: 'Digital Learning',
    description:
      'We deliver stigma-free, culturally sensitive education on menstruation and reproductive health through our custom Learning Management System (LMS) designed for schools and community centers.',
    highlights: [
      'Interactive Animated Modules',
      'Offline-First LMS Compatibility',
      'Multi-Language Dialect Support',
      'Confidential Student Progress Tracking',
    ],
    metric: '10,000+',
    metricLabel: 'Active LMS Learners',
  },
  {
    id: 'hygiene-kits',
    title: 'Hygiene & Cramp Relief',
    subtitle: 'Direct Physical Dignity Support',
    icon: Package,
    tag: 'Physical Distribution',
    description:
      'We supply girls and women with comprehensive Menstrual Hygiene Kits alongside specialized Period Cramp Relief Kits containing warm compresses and natural pain relief solutions.',
    highlights: [
      'Reusable & Eco-Friendly Pads',
      'Period Cramp Relief Compression Packs',
      'Sanitation & Hygiene Accessories',
      'Discreet Carrying Pouches',
    ],
    metric: '25,000+',
    metricLabel: 'Kits Delivered',
  },
  {
    id: 'healthcare-nutrition',
    title: 'Healthcare & Nutrition',
    subtitle: 'Holistic Health & Wellness Support',
    icon: HeartPulse,
    tag: 'Holistic Care',
    description:
      'Period health is directly linked to overall well-being. We provide free healthcare consultations and distribute nutrient-dense meals to combat anemia and nutritional deficiencies.',
    highlights: [
      'Free Medical & Gynecological Consultations',
      'Iron-Rich Nutritious Meal Packs',
      'Community Nurse Checkups',
      'Emergency Health Support',
    ],
    metric: '100%',
    metricLabel: 'Free Community Care',
  },
];

const workSteps = [
  {
    step: '01',
    title: 'Onboard & Connect',
    description:
      'We partner with local schools and hubs to set up LMS learning accounts for students.',
  },
  {
    step: '02',
    title: 'Educate via LMS',
    description:
      'Students complete guided, stigma-free modules covering biology, hygiene, and wellness.',
  },
  {
    step: '03',
    title: 'Distribute Support Kits',
    description:
      'Learners receive hygiene kits, period cramp relief tools, and essential health items.',
  },
  {
    step: '04',
    title: 'Nourish & Care',
    description:
      'We provide free health checkups and nutritious food packages to ensure complete well-being.',
  },
];

export default function WhatWeDoPage() {
  const [activePillar, setActivePillar] = useState(pillars[0].id);

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

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
          <span>What We Do</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.15]"
        >
          Empowering Health through <span className="bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-500 bg-clip-text text-transparent">LMS Education & Direct Care.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          We combine interactive digital learning with essential physical care—providing hygiene kits, period cramp relief, nutritious food, and free medical support.
        </motion.p>
      </section>

      {/* 2. CORE SERVICES OVERVIEW GRID */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="h-12 w-12 rounded-xl bg-pink-50 text-[#C01C5C] flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Hygiene Kits</h3>
            <p className="text-xs text-slate-500">Essential sanitary products & personal hygiene items</p>
          </div>

          <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="h-12 w-12 rounded-xl bg-pink-50 text-[#C01C5C] flex items-center justify-center">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Cramp Relief Kits</h3>
            <p className="text-xs text-slate-500">Heat therapy and pain relief for period comfort</p>
          </div>

          <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="h-12 w-12 rounded-xl bg-pink-50 text-[#C01C5C] flex items-center justify-center">
              <Apple className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Nutritious Food</h3>
            <p className="text-xs text-slate-500">Iron-rich meals to combat period fatigue & anemia</p>
          </div>

          <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="h-12 w-12 rounded-xl bg-pink-50 text-[#C01C5C] flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Free Healthcare</h3>
            <p className="text-xs text-slate-500">Medical consultations and nurse support</p>
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS (INTERACTIVE TABS) */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Comprehensive Model</h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">Explore how we combine LMS digital education with direct physical aid.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#C01C5C] border-[#C01C5C] text-white shadow-lg shadow-pink-200 scale-105'
                    : 'bg-white border-slate-200/80 text-slate-600 hover:text-[#C01C5C] hover:border-pink-200 hover:bg-pink-50/50 shadow-xs'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#C01C5C]'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/90 backdrop-blur-xl border border-pink-100 rounded-3xl p-8 lg:p-12 shadow-xl shadow-pink-100/40"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#C01C5C] font-semibold text-xs tracking-wide uppercase">
                {currentPillar.tag}
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{currentPillar.title}</h3>
                <p className="text-[#C01C5C] font-medium text-base sm:text-lg">{currentPillar.subtitle}</p>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {currentPillar.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Offerings</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentPillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#C01C5C] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-pink-50/80 via-rose-50/40 to-white rounded-2xl p-8 border border-pink-100/80 shadow-inner">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[#C01C5C] text-white flex items-center justify-center shadow-md shadow-pink-200">
                  <currentPillar.icon className="w-6 h-6" />
                </div>
                <h4 className="text-slate-500 font-medium text-sm">Targeted Reach</h4>
                <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
                  {currentPillar.metric}
                </div>
                <p className="text-[#C01C5C] text-sm font-semibold">{currentPillar.metricLabel}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-pink-100 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Impact Program</span>
                <Globe className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. PROCESS FLOW */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How Our Program Works</h2>
          <p className="text-slate-600 text-base">Integrating digital LMS learning seamlessly with direct healthcare and relief kit distribution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white border border-pink-100 rounded-2xl p-6 flex flex-col justify-between hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 group shadow-xs"
            >
              <div>
                <div className="text-3xl font-extrabold text-pink-200 group-hover:text-[#C01C5C] transition-colors mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#C01C5C] font-semibold">
                <span>Phase {idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
            Sponsor Kits & Healthcare Support
          </h2>
          <p className="mt-4 text-pink-100 text-base sm:text-lg max-w-xl mx-auto font-normal relative z-10">
            Your support helps us deliver menstrual kits, cramp relief, nutritious meals, and LMS access to communities in need.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="/get-involved"
              className="px-8 py-4 rounded-xl bg-white text-[#C01C5C] font-bold text-base hover:bg-pink-50 transition-colors shadow-lg"
            >
              Get Involved
            </a>
            <a
              href="/resources"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors"
            >
              Explore LMS Platform
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}