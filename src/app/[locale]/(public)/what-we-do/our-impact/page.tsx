'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  HeartPulse,
  Apple,
  GraduationCap,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Heart,
} from 'lucide-react';

const impactStats = [
  {
    number: '25,000+',
    label: 'Hygiene Kits Distributed',
    description: 'Providing sustainable sanitary supplies and dignity packs.',
    icon: Package,
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: '10,000+',
    label: 'LMS Active Learners',
    description: 'Students completing digital health & period education.',
    icon: GraduationCap,
    color: 'from-[#C01C5C] to-pink-600',
  },
  {
    number: '15,000+',
    label: 'Cramp Relief Packs',
    description: 'Delivering heat compresses and natural pain relief tools.',
    icon: HeartPulse,
    color: 'from-rose-500 to-pink-500',
  },
  {
    number: '30,000+',
    label: 'Nutritious Meals Served',
    description: 'Combating period fatigue and iron-deficiency anemia.',
    icon: Apple,
    color: 'from-pink-600 to-rose-600',
  },
];

const transformationMetrics = [
  {
    metric: 'School Attendance',
    before: '58%',
    after: '94%',
    change: '+36% Increase',
    detail: 'Girls stay in school during their period thanks to hygiene products and cramp relief.',
  },
  {
    metric: 'Health Knowledge',
    before: '22%',
    after: '91%',
    change: '+69% Knowledge Gap Closed',
    detail: 'Students passing reproductive health modules via our interactive LMS platform.',
  },
  {
    metric: 'Period Stigma Reduction',
    before: '18%',
    after: '88%',
    change: '4x Higher Openness',
    detail: 'Students reporting feeling confident discussing period health without shame.',
  },
];

const testimonials = [
  {
    quote:
      "Before receiving the cramp relief kit and learning on the LMS, I used to miss 3 to 4 days of school every single month. Now I never miss a class.",
    name: 'Amina R.',
    role: '10th Grade Student',
    location: 'Dhaka, Bangladesh',
    metric: '100% Attendance Kept',
  },
  {
    quote:
      "The combination of nutritious food packs and hygiene support has changed how our girls learn. They are healthier, more energetic, and far more confident.",
    name: 'Fatima Begum',
    role: 'School Headmaster',
    location: 'Partner Community Hub',
    metric: '45+ Schools Enrolled',
  },
];

export default function OurImpactPage() {
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
          <Award className="w-4 h-4" />
          <span>Our Real-World Impact</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.15]"
        >
          Measurable Change Through <span className="bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-500 bg-clip-text text-transparent">Dignity & Education.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Every kit distributed and LMS module completed represents a young woman empowered to stay in school, stay healthy, and live without period stigma.
        </motion.p>
      </section>

      {/* 2. CORE STATS GRID */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => {
            const Icon = stat.icon;
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
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center shadow-md shadow-pink-200 mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#C01C5C] mb-2">{stat.label}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">{stat.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Verified Impact Data</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. BEFORE vs AFTER TRANSFORMATION METRICS */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">The Power of Direct Intervention</h2>
          <p className="text-slate-600 text-base">Comparing student outcomes before and after engaging with our LMS platform and essential relief kits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformationMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase mb-6">
                  {item.change}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">{item.metric}</h3>

                {/* Comparison Visual */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <div className="text-center">
                    <span className="text-xs font-semibold text-slate-400 block uppercase">Before</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 line-through decoration-rose-400">{item.before}</span>
                  </div>
                  <div className="text-center border-l border-slate-200 pl-4">
                    <span className="text-xs font-semibold text-[#C01C5C] block uppercase">After LMS & Kits</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#C01C5C]">{item.after}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm font-normal leading-relaxed">{item.detail}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Field Program Evaluation</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. COMMUNITY STORIES & TESTIMONIALS */}
      <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-pink-50/80 via-rose-50/40 to-white border border-pink-100 rounded-3xl p-8 lg:p-14 shadow-xl shadow-pink-100/30">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C01C5C]">Voices of Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Real Stories from the Field</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white border border-pink-100 rounded-2xl p-8 shadow-xs flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#C01C5C]">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role} • {item.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#C01C5C] font-bold text-xs">
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-12 lg:py-20 px-6 max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-600 p-10 sm:p-14 text-center overflow-hidden shadow-2xl shadow-pink-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight relative z-10">
            Help Us Multiply This Impact
          </h2>
          <p className="mt-4 text-pink-100 text-base sm:text-lg max-w-xl mx-auto font-normal relative z-10">
            A contribution of just $15 provides a girl with a hygiene kit, cramp relief tools, nutritious food, and 1 year of LMS platform access.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="/who-we-are/volunteer"
              className="px-8 py-4 rounded-xl bg-white text-[#C01C5C] font-bold text-base hover:bg-pink-50 transition-colors shadow-lg"
            >
              Volunteer With Us
            </a>
            <a
              href="/get-involved"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors"
            >
              Sponsor a Student
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}