'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const buttonHover = { scale: 1.03 };
const buttonTap = { scale: 0.97 };

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFF8F9] to-white py-16 lg:py-24">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FCE4EC]/60 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* LEFT COLUMN — Horizontal Background Pad + Foreground Cutout */}
          <div className="relative order-1 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square flex items-end justify-center">
              
              {/* Layer 1 (BACKGROUND): Pad rotated completely horizontal (90deg) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                initial={{ opacity: 0, scale: 3 }}
                animate={{ opacity: 1, scale: 1 }}
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

              {/* Layer 2 (FOREGROUND): Schoolgirls cut-out on top */}
              <motion.div
                className="relative z-10 w-full h-full flex items-end justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              >
                <Image
                  src="/images/schoolgirls.png"
                  alt="A group of schoolgirls smiling and holding their books"
                  width={600}
                  height={750}
                  className="w-full h-auto object-contain object-bottom drop-shadow-xl"
                  priority
                />
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN — Previous Design System Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-2 text-center lg:text-left z-20"
          >
            {/* Badge Tag */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="bg-white/80 backdrop-blur-sm text-[#C2185B] border border-[#F8BBD0] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C2185B]" />
                Dignity Through Education
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-[1.15]"
            >
              Empowering Girls with{' '}
              <span className="relative inline-block text-[#D81B60]">
                Menstrual Kit
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#F8BBD0]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              and{' '}
              <span className="text-[#D81B60]">Health Education</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Safe, confidential, and localized menstrual health education
              designed to break stigmas and empower young women to thrive in
              school and life.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="w-full sm:w-auto">
                <Link
                  href="/register"
                  className="bg-[#D81B60] hover:bg-[#C2185B] text-white shadow-lg shadow-[#D81B60]/30 rounded-2xl px-7 py-3.5 font-semibold transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base"
                >
                  Start Learning Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="w-full sm:w-auto">
                <Link
                  href="/who-we-are/about-us"
                  className="bg-white/80 border border-slate-200 text-[#334155] rounded-2xl px-7 py-3.5 font-semibold hover:bg-slate-50 transition-all inline-flex items-center justify-center w-full sm:w-auto text-base"
                >
                  Learn Our Mission
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-rose-100/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-medium text-[#64748B]"
            >
              <div className="flex items-center gap-1.5 text-[#C2185B]">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#C2185B]">
                <BookOpen className="w-4 h-4" />
                <span>Offline-Optimized</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#C2185B]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Expert Approved</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}