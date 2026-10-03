"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lock,
  WifiOff,
  Users,
  ArrowRight,
  Users2,
  BookOpen,
  Clock,
  XCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Heart,
  MessageCircle,
} from "lucide-react";

/* =====================================================================
   1. NAVBAR
   ===================================================================== */
function Navbar() {
  const links = ["Who We Are", "What We Do", "Resources", "Our Impact"];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-pink-100/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#BE185D]">
            MPOWER<span className="text-slate-900">HER</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="hover:text-[#BE185D] transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BE185D] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold">
            <button className="text-[#BE185D]">EN</button>
            <span className="text-slate-300">|</span>
            <button className="text-slate-400 hover:text-slate-900 transition-colors">
              বাংলা
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-[#BE185D] text-white text-xs font-bold rounded-full shadow-lg shadow-pink-700/20 hover:bg-[#9D174D] hover:shadow-xl hover:shadow-pink-700/30 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

/* =====================================================================
   2. HERO
   ===================================================================== */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const trustBadges = [
    { icon: Lock, label: "Confidential by design" },
    { icon: WifiOff, label: "Works offline" },
    { icon: Users, label: "Expert-informed" },
  ];
  const stats = [
    { icon: Users2, value: "10K+", label: "Girls reached" },
    { icon: BookOpen, value: "15+", label: "Learning modules" },
    { icon: Clock, value: "24/7", label: "Self-paced access" },
  ];

  return (
    <section ref={ref} className="relative pt-12 pb-20 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-rose-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs font-bold tracking-[0.2em] text-[#BE185D] uppercase"
            >
              Dignity Through Education
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900"
            >
              Every girl deserves to learn{" "}
              <span className="text-[#BE185D] italic">without fear.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-slate-600 text-lg max-w-xl leading-relaxed"
            >
              MPOWERHER provides confidential, localized menstrual health
              education and access to learning resources so every girl can
              grow, learn and reach her full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#BE185D] text-white text-sm font-bold rounded-full shadow-lg shadow-pink-700/20 hover:bg-[#9D174D] hover:shadow-xl hover:shadow-pink-700/30 transition-all"
              >
                Explore the learning journey <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-pink-50/80 text-[#BE185D] text-sm font-bold rounded-full border border-pink-200/80 hover:bg-pink-100/80 transition-all"
              >
                Our Impact
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-4 border-t border-pink-100"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Icon size={16} className="text-[#BE185D]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-pink-100 to-rose-200">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"
                alt="Girls learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-pink-100 flex items-center gap-3 border border-pink-100/60"
            >
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Users2 size={20} className="text-[#BE185D]" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Live now</p>
                <p className="text-sm font-bold text-slate-900">
                  2,340 girls learning
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-white/60 backdrop-blur rounded-3xl border border-pink-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center">
                <Icon size={22} className="text-[#BE185D]" />
              </div>
              <div>
                <p className="text-2xl font-black text-[#BE185D]">{value}</p>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================================
   3. SCROLL STORY — "A Day Without Knowing"
   ===================================================================== */
interface DayState {
  label: string;
  status: "negative" | "positive";
  scenes: {
    time: string;
    title: string;
    body: string;
    image: string;
    highlight?: string;
  }[];
}

const WITHOUT: DayState = {
  label: "Without knowledge",
  status: "negative",
  scenes: [
    {
      time: "8:15 AM",
      title: "She skips class.",
      body: "Cramps arrive. She doesn't know why or what to do. She stays home — again.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
      highlight: "absence #3 this month",
    },
    {
      time: "11:40 AM",
      title: "She hides in the bathroom.",
      body: "Whispers behind her back. No one explained this. She feels dirty, alone, wrong.",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
      highlight: "silence and shame",
    },
    {
      time: "3:00 PM",
      title: "She walks home alone.",
      body: "Missed the lesson. Missed her friends. Another day lost to something no one would name.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      highlight: "future at risk",
    },
  ],
};

const WITH: DayState = {
  label: "With knowledge",
  status: "positive",
  scenes: [
    {
      time: "8:15 AM",
      title: "She attends class.",
      body: "She knows what's happening to her body. She packs what she needs and walks in confidently.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
      highlight: "prepared & present",
    },
    {
      time: "11:40 AM",
      title: "She asks questions.",
      body: "No shame, just curiosity. Her teacher answers. Her friends listen. Stigma loses power.",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80",
      highlight: "knowledge shared",
    },
    {
      time: "3:00 PM",
      title: "She walks home with friends.",
      body: "Full day of learning. Full confidence. Because someone finally told her the truth.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      highlight: "future intact",
    },
  ],
};

function StoryScene({
  scene,
  progress,
  index,
  total,
}: {
  scene: DayState["scenes"][0];
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, mid, end], [0.9, 1, 0.9]);
  const y = useTransform(progress, [start, end], [40, -40]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-pink-200/50 border-4 border-white bg-pink-100">
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {scene.time}
          </div>
        </div>
        <div className="space-y-4">
          {scene.highlight && (
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#BE185D] bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              {scene.highlight}
            </span>
          )}
          <h3 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
            {scene.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {scene.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [1, 1.6, 1]
  );
  const bg = useTransform(
    progress,
    [start, (start + end) / 2, end],
    ["#FBCFE8", "#BE185D", "#FBCFE8"]
  );
  return (
    <motion.div
      style={{ scale, background: bg }}
      className="w-2 h-2 rounded-full"
    />
  );
}

function ScrollStory() {
  const [mode, setMode] = useState<"without" | "with">("without");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const state = mode === "without" ? WITHOUT : WITH;
  const total = state.scenes.length;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-[#BE185D] uppercase mb-3">
            A Day Without Knowing
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4 text-slate-900">
            A day can change <br />
            <span className="text-[#BE185D] italic">when knowledge does.</span>
          </h2>
          <p className="text-lg text-slate-600">
            The same girl. The same school. Two different outcomes. Scroll to
            see how menstrual health education changes everything.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-pink-100/60 rounded-full border border-pink-200/80 shadow-inner">
            {(["without", "with"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                  mode === m
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {mode === m && (
                  <motion.span
                    layoutId="toggle-bg"
                    className="absolute inset-0 bg-[#BE185D] rounded-full shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {m === "without" ? <EyeOff size={14} /> : <Eye size={14} />}
                  {m === "without" ? "Without knowledge" : "With knowledge"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sticky scroll story */}
        <div ref={ref} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 text-xs font-bold text-slate-400 uppercase tracking-widest">
                {mode === "without"
                  ? "DAY WITHOUT KNOWING"
                  : "DAY WITH KNOWLEDGE"}
              </div>
              <div className="absolute top-10 right-10 flex items-center gap-2">
                {state.status === "negative" ? (
                  <>
                    <XCircle size={16} className="text-rose-500" />
                    <span className="text-xs font-bold text-rose-600">
                      Fear & missed opportunity
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-xs font-bold text-emerald-600">
                      Confidence & learning
                    </span>
                  </>
                )}
              </div>
            </div>

            {state.scenes.map((s, i) => (
              <StoryScene
                key={`${mode}-${i}`}
                scene={s}
                progress={scrollYProgress}
                index={i}
                total={total}
              />
            ))}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {state.scenes.map((_, i) => (
                <ProgressDot
                  key={i}
                  progress={scrollYProgress}
                  index={i}
                  total={total}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   4. LETTERS TO HER
   ===================================================================== */
const LETTERS = [
  {
    text: "You are not alone.",
    from: "A fellow girl",
    rotate: -3,
    color: "bg-pink-100",
  },
  {
    text: "Your questions deserve kind answers.",
    from: "A mentor",
    rotate: 2,
    color: "bg-amber-50",
  },
  {
    text: "Knowledge belongs to you.",
    from: "A woman who cares",
    rotate: -2,
    color: "bg-rose-100",
  },
  {
    text: "I wish someone had told me sooner.",
    from: "A big sister",
    rotate: 3,
    color: "bg-pink-50",
  },
  {
    text: "Your body is not a secret.",
    from: "A teacher",
    rotate: -4,
    color: "bg-amber-50",
  },
  {
    text: "Shame was never yours to carry.",
    from: "Someone who knows",
    rotate: 2,
    color: "bg-rose-50",
  },
];

function Letters() {
  return (
    <section className="py-24 bg-pink-50/40 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#BE185D] uppercase mb-3">
              Letters to Her
            </p>
            <h2 className="text-5xl font-black leading-tight mb-4 text-slate-900">
              Real words. <br />
              <span className="text-[#BE185D] italic">Lasting impact.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Anonymous notes from women and mentors who've been there. A
              little encouragement can make a big difference.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#BE185D] font-bold">
              <Heart size={16} fill="currentColor" />
              2,847 notes shared
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LETTERS.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: l.rotate }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
                className={`paper-note p-6 rounded-lg ${l.color} border border-pink-100/60 cursor-pointer`}
              >
                <p className="font-hand text-2xl text-slate-800 leading-snug mb-4">
                  "{l.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#BE185D]/80">
                    — {l.from}
                  </span>
                  <Heart size={14} className="text-[#BE185D]/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   5. BREAK THE SILENCE
   ===================================================================== */
const PAIRS = [
  { whisper: "that time", truth: "menstrual health" },
  { whisper: "a problem", truth: "period care" },
  { whisper: "keep quiet", truth: "ask questions" },
];

function WordSwap({
  pair,
  index,
  progress,
}: {
  pair: { whisper: string; truth: string };
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.15 + index * 0.2;
  const end = start + 0.2;
  const whisperOpacity = useTransform(progress, [start, end], [1, 0.15]);
  const truthOpacity = useTransform(progress, [start, end], [0, 1]);
  const truthY = useTransform(progress, [start, end], [20, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl bg-white border border-pink-100 hover:border-[#BE185D] hover:shadow-xl hover:shadow-pink-100/50 transition-all cursor-pointer"
    >
      <motion.span
        style={{ opacity: whisperOpacity }}
        className="font-hand text-3xl text-slate-400 line-through decoration-[#BE185D]/50 decoration-2"
      >
        {pair.whisper}
      </motion.span>

      <ArrowRight className="text-[#BE185D] shrink-0" size={20} />

      <motion.span
        style={{ opacity: truthOpacity, y: truthY }}
        className="px-5 py-2 rounded-full bg-[#BE185D] text-white font-bold shadow-lg shadow-pink-200 sm:ml-auto"
      >
        {pair.truth}
      </motion.span>
    </motion.div>
  );
}

function BreakSilence() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-pink-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#BE185D] uppercase">
              From Silence to Understanding
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Different words. <br />
              <span className="text-[#BE185D] italic">Same girl.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              For too long, girls were taught to whisper. Now, it's time to
              speak, learn and normalize menstrual health.
            </p>
            <div className="flex items-center gap-2 pt-2 text-sm font-bold text-[#BE185D]">
              <MessageCircle size={16} />
              Scroll to reveal the truth
            </div>
          </motion.div>

          <div className="space-y-6">
            {PAIRS.map((pair, i) => (
              <WordSwap
                key={i}
                pair={pair}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   6. CTA
   ===================================================================== */
function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-10 md:p-16"
        >
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl" />
          <Heart
            className="absolute right-10 top-10 text-pink-200 w-32 h-32 hidden md:block"
            strokeWidth={0.5}
          />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[#BE185D] uppercase">
                Let's Build a Brighter Future
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
                Help make learning <br />
                <span className="text-[#BE185D]">
                  accessible to every girl.
                </span>
              </h2>
              <p className="text-slate-600 max-w-xl">
                Partner with us to expand menstrual health education and create
                more opportunities for girls everywhere.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 h-14 bg-[#BE185D] text-white text-sm font-bold rounded-full shadow-xl shadow-pink-200 hover:bg-[#9D174D] hover:shadow-2xl transition-all"
            >
              Partner with us <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================================
   7. FOOTER
   ===================================================================== */
function Footer() {
  return (
    <footer className="border-t border-pink-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-black text-[#BE185D]">
            MPOWER<span className="text-slate-900">HER</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Empowering girls. Building brighter futures.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-[#BE185D] transition-colors">
            Who We Are
          </a>
          <a href="#" className="hover:text-[#BE185D] transition-colors">
            What We Do
          </a>
          <a href="#" className="hover:text-[#BE185D] transition-colors">
            Resources
          </a>
          <a href="#" className="hover:text-[#BE185D] transition-colors">
            Our Impact
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="text-[#BE185D] font-bold">EN</button>
          <span className="text-slate-300">|</span>
          <button className="text-slate-400 hover:text-slate-900 transition-colors">
            বাংলা
          </button>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        © 2025 MPOWERHER. All rights reserved.
      </p>
    </footer>
  );
}

/* =====================================================================
   MAIN PAGE
   ===================================================================== */
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFFBFD]">
      <Navbar />
      <Hero />
      <ScrollStory />
      <Letters />
      <BreakSilence />
      <CTA />
      <Footer />
    </main>
  );
}