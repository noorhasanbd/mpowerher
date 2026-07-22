'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  PlayCircle, 
  CheckCircle2, 
  Users 
} from 'lucide-react';

// Explicitly typed Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll transformations
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#FDF2F8] via-white to-white py-20 lg:py-28 flex items-center"
    >
      {/* 1. AMBIENT BACKGROUND GLOWS (Animated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-pink-300/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* 2. LEFT HERO CONTENT (Animated Entrance & Scroll Parallax) */}
        <motion.div
          style={{ y: yContent, opacity: opacityContent }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8 text-center lg:text-left z-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/80 text-[#C01C5C] font-heading font-semibold text-xs tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Dignity Through Education</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.12] tracking-tight"
          >
            Empowering Girls with{' '}
            <span className="relative inline-block text-[#C01C5C]">
              Health Knowledge.
              {/* Decorative Underline SVG */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-[#C01C5C]/30"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Safe, confidential, and localized menstrual health education designed to break stigmas and empower young women to thrive in school and life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Link
              href="/register"
              className="btn font-heading bg-[#C01C5C] hover:bg-[#a0164c] text-white rounded-2xl px-8 h-14 border-none shadow-xl shadow-pink-200/80 text-base font-semibold flex items-center gap-3 w-full sm:w-auto transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/who-we-are/about-us"
              className="btn btn-ghost font-heading text-gray-700 hover:text-[#C01C5C] hover:bg-pink-50/80 rounded-2xl px-7 h-14 text-base font-semibold w-full sm:w-auto transition-colors"
            >
              Learn Our Mission
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-pink-100/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C01C5C]" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C01C5C]" />
              <span>Offline-Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C01C5C]" />
              <span>Expert Approved</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. RIGHT HERO VISUAL (3D Perspective & Floating Elements) */}
        <motion.div
          style={{ scale: cardScale, rotate: cardRotate }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main Hero Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-pink-200/60 border border-white/80 space-y-5 relative z-10"
          >
            {/* Video Thumbnail Box */}
            <div className="h-52 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-pink-100/60 border border-pink-100 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
              <div className="absolute inset-0 bg-[#C01C5C]/5 group-hover:bg-[#C01C5C]/15 transition-all duration-300"></div>
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="h-16 w-16 rounded-full bg-[#C01C5C] text-white flex items-center justify-center shadow-lg shadow-pink-300/80 z-10"
              >
                <PlayCircle className="w-9 h-9 fill-white/20" />
              </motion.div>
              
              {/* Duration Tag */}
              <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                5 min lesson
              </span>
            </div>

            {/* Card Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="badge bg-pink-100 text-[#C01C5C] font-heading font-semibold text-xs border-none px-3 py-1.5">
                  Featured Module
                </span>
                <span className="text-xs text-gray-400 font-medium">Module 01</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 leading-tight">
                Understanding Your Cycle & Body
              </h3>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Learn the biological fundamentals of menstrual hygiene with interactive visual guides.
              </p>
            </div>
          </motion.div>

          {/* FLOATING BADGE 1: Active Learners (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 z-20"
          >
            <div className="h-10 w-10 rounded-xl bg-pink-50 text-[#C01C5C] flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-[#C01C5C]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">10,000+</p>
              <p className="text-[10px] text-gray-500 font-medium">Girls Empowered</p>
            </div>
          </motion.div>

          {/* FLOATING BADGE 2: Completion Rate (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 0.6, duration: 0.5 },
              x: { delay: 0.6, duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 z-20"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">100% Free</p>
              <p className="text-[10px] text-gray-500 font-medium font-sans">Self-Paced Access</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}