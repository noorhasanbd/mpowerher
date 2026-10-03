'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from "next-intl";
import { motion, Variants } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Play,
  Star,
} from 'lucide-react';

/* =====================================================================
   MOTION VARIANTS
   ===================================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonHover = { scale: 1.03, y: -2 };
const buttonTap = { scale: 0.97 };

const trustBadges = [
  { icon: ShieldCheck, label: '100% Confidential' },
  { icon: BookOpen, label: 'Offline-Optimized' },
  { icon: CheckCircle2, label: 'Expert Approved' },
];

/* =====================================================================
   HERO SECTION
   ===================================================================== */
export default function HeroSection() {
  const t = useTranslations("home.hero");
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFF8F9] to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* ---- Ambient gradient orbs ---- */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FCE4EC]/70 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F8BBD0]/50 rounded-full filter blur-3xl pointer-events-none translate-y-1/3"
      />

      {/* ---- Subtle grain overlay ---- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(216, 27, 96, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ============================================================
              LEFT — Image composition
          ============================================================ */}
          <div className="relative order-1 lg:order-1 lg:col-span-6 flex justify-center items-center w-full">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square flex items-center justify-center">

              {/* Floating stat badge (top-left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute top-4 left-0 z-30 bg-white/90 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg shadow-pink-200/50 border border-pink-100 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#D81B60]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    {t("trustBadge.label")}
                  </p>
                  <p className="text-xs font-black text-slate-900">
                    {t("trustBadge.value")}
                  </p>
                </div>
              </motion.div>

              {/* Floating live badge (bottom-right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.05, duration: 0.6 }}
                className="absolute bottom-4 right-0 z-30 bg-white/90 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg shadow-pink-200/50 border border-pink-100 flex items-center gap-2.5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    {t("activeBadge.label")}
                  </p>
                  <p className="text-xs font-black text-slate-900">
                    {t("activeBadge.value")}
                  </p>
                </div>
              </motion.div>

              {/* Layer 1 — Pad (background) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1.25 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div
                  className="relative w-[140%] sm:w-[150%] rotate-55"
                  animate={{ y: [-5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/images/sanitary-pad.png"
                    alt=""
                    width={1000}
                    height={600}
                    aria-hidden="true"
                    className="w-full h-auto object-contain filter drop-shadow-md opacity-90"
                  />
                </motion.div>
              </motion.div>

              {/* Layer 2 — Schoolgirls (foreground) */}
              <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              >
                <Image
                  src="/images/schoolgirls.png"
                  alt="A group of schoolgirls smiling and holding their books"
                  width={600}
                  height={750}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
              </motion.div>

            </div>
          </div>

          {/* ============================================================
              RIGHT — Text content
          ============================================================ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-2 lg:col-span-6 text-center lg:text-left z-20"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="bg-white/80 backdrop-blur-sm text-[#C2185B] border border-[#F8BBD0] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase inline-flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C2185B]" />
                 {t("badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-[#0F172A] tracking-tight leading-[1.08]"
            >
              {t("title.before")}{' '}
              <span className="relative inline-block text-[#D81B60] italic">
                {t("title.highlight")}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#F8BBD0]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              MPOWERHER provides confidential, localized menstrual health
              education and access to learning resources so every girl can
              grow, learn and reach her full potential.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/register"
                  className="group relative bg-[#D81B60] hover:bg-[#C2185B] text-white shadow-lg shadow-[#D81B60]/30 hover:shadow-xl hover:shadow-[#D81B60]/40 rounded-2xl px-7 py-3.5 font-semibold transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative">Explore the Learning Journey</span>
                  <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/who-we-are/about-us"
                  className="group bg-white/80 backdrop-blur border border-slate-200 hover:border-[#F8BBD0] text-[#334155] hover:text-[#C2185B] rounded-2xl px-7 py-3.5 font-semibold transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Our Impact
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-rose-100/70 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-[#64748B]"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center">
                    <Icon className="w-3 h-3 text-[#C2185B]" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}