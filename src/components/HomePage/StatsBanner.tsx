'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { GraduationCap, BookOpenCheck, ShieldCheck, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const statConfig = [
  { key: 'girlsEducated', icon: GraduationCap },
  { key: 'interactiveModules', icon: BookOpenCheck },
  { key: 'freeConfidential', icon: ShieldCheck },
  { key: 'selfPaced', icon: Clock },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Specify namespace (assuming keys live inside home.json under "stats")
  const t = useTranslations('home.stats');

  return (
    <section ref={ref} className="relative py-16 bg-[#C01C5C] overflow-hidden text-white">
      {/* Background Glow & Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {statConfig.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-black/10 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="h-12 w-12 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-white">
                  <Icon className="w-6 h-6 text-white group-hover:text-[#C01C5C] transition-colors" />
                </div>

                {/* Number / Value */}
                <h3 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                  {t(`${item.key}.value`)}
                </h3>

                {/* Label */}
                <p className="font-heading font-semibold text-base text-pink-100 mb-1">
                  {t(`${item.key}.label`)}
                </p>

                {/* Subtext */}
                <p className="font-sans text-xs text-pink-200/80 leading-relaxed">
                  {t(`${item.key}.subtext`)}
                </p>

                {/* Decorative Bottom Line Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/0 group-hover:bg-white/60 rounded-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}