'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    badge: 'Localized',
    title: 'Localized Curriculum',
    description:
      'Lessons tailored to cultural contexts, stripping away stigma while focusing on accurate biological science and empathetic hygiene care.',
    tag: 'Cultural Context',
  },
  {
    icon: Users,
    badge: 'Community',
    title: 'Community Support',
    description:
      'Verified female instructors and mentors guide students safely through coursework with structured Q&A and supportive peer discussions.',
    tag: 'Guided Mentorship',
  },
  {
    icon: ShieldCheck,
    badge: 'Confidential',
    title: 'Private & Secure',
    description:
      'Progress tracking and personal health insights stay 100% confidential so every learner feels completely safe asking sensitive questions.',
    tag: 'Privacy First',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Stagger Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-[#FDF2F8]/30 to-white overflow-hidden"
    >
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-pink-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-[#C01C5C] font-heading font-semibold text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Impact</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Why Learn With <span className="text-[#C01C5C]">MPOWERHER?</span>
          </h2>

          <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Built specifically for offline-first, mobile access in community and school environments to make health education seamless and stigma-free.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-pink-100/80 shadow-lg shadow-pink-100/50 hover:shadow-2xl hover:shadow-pink-200/50 hover:border-pink-300/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Ambient Top Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#C01C5C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                <div className="space-y-6">
                  {/* Card Header: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#C01C5C] to-[#a0164c] text-white flex items-center justify-center shadow-lg shadow-pink-200/80 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-heading font-semibold text-[#C01C5C] bg-pink-50 border border-pink-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-[#C01C5C] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="pt-6 mt-6 border-t border-pink-100/60 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#C01C5C] transition-colors">
                  <span>{feature.tag}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}