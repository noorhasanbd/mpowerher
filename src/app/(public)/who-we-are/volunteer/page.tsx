'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Megaphone,
  Clock,
  Globe,
  CheckCircle2,
  Send,
  ArrowRight,
  ShieldCheck,
  Star,
} from 'lucide-react';

// Volunteer Role Options
const roles = [
  {
    id: 'educator',
    title: 'Health Educator & Facilitator',
    icon: BookOpen,
    type: 'In-Person / Hybrid',
    commitment: '4-6 hrs/week',
    description:
      'Lead interactive reproductive health workshops in partner schools and community centers using MPOWERHER localized LMS curriculum.',
  },
  {
    id: 'mentor',
    title: 'Youth Mentor & Q&A Guide',
    icon: Users,
    type: 'Remote',
    commitment: '2-4 hrs/week',
    description:
      'Provide compassionate, confidential mentorship to young women navigating health questions through our secure platform forum.',
  },
  {
    id: 'advocate',
    title: 'Community Advocate & Ambassador',
    icon: Megaphone,
    type: 'Flexible',
    commitment: '1-3 hrs/week',
    description:
      'Champion period equity in your local university or community, coordinate local hygiene kit drives, and raise awareness.',
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Volunteering as an educator with MPOWERHER allowed me to see real, immediate change. Watching young girls gain confidence about their body health is unforgettable.",
    author: 'Amina K.',
    role: 'Peer Health Educator',
    years: '2 Years with MPOWERHER',
  },
  {
    quote:
      "Being able to offer confidential advice to teens who felt ashamed to ask elsewhere showed me how vital digital health access truly is.",
    author: 'Priya M.',
    role: 'Digital Mentor',
    years: '1 Year with MPOWERHER',
  },
];

// Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function VolunteerPage() {
  const [selectedRole, setSelectedRole] = useState(roles[0].id);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: roles[0].id,
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <Heart className="w-4 h-4 fill-[#C01C5C]" />
          <span>Join the Movement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.15]"
        >
          Become a Champion for <span className="bg-gradient-to-r from-[#C01C5C] via-pink-600 to-rose-500 bg-clip-text text-transparent">Period Dignity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Your time, skills, and empathy can keep young women in school and break health taboos across underserved communities.
        </motion.p>
      </section>

      {/* 2. VOLUNTEER ROLES SELECTOR */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Choose Your Path of Impact</h2>
          <p className="text-slate-600 text-base">Select a volunteer role that aligns with your passions, availability, and skillset.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <motion.div
                key={role.id}
                variants={itemVariants}
                onClick={() => {
                  setSelectedRole(role.id);
                  setFormData((prev) => ({ ...prev, role: role.id }));
                }}
                className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-white border-[#C01C5C] shadow-xl shadow-pink-100/80 ring-2 ring-[#C01C5C]/20'
                    : 'bg-white/80 border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-md'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-6 right-6 text-[#C01C5C]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      isSelected
                        ? 'bg-[#C01C5C] text-white shadow-md'
                        : 'bg-pink-50 border border-pink-200 text-[#C01C5C]'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C01C5C] bg-pink-50 border border-pink-200/60 px-2.5 py-0.5 rounded-full">
                      {role.type}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {role.commitment}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{role.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C01C5C]">
                  <span>{isSelected ? 'Role Selected' : 'Select This Role'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. VOLUNTEER TESTIMONIALS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#C01C5C] via-pink-600 to-rose-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-pink-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-2 text-pink-200 text-xs font-bold tracking-widest uppercase">
              <Star className="w-4 h-4 fill-pink-200" />
              <span>Volunteer Voices</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                  <p className="text-pink-50 text-sm sm:text-base italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-base">{t.author}</h4>
                    <p className="text-xs text-pink-200">{t.role} • {t.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM SECTION */}
      <section id="apply-form" className="py-16 lg:py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-pink-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-pink-100/50 relative">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#C01C5C] font-semibold text-xs tracking-wider uppercase">
              <Send className="w-3.5 h-3.5" />
              <span>Sign Up Today</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Volunteer Application</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Fill out the form below and our volunteer coordination team will contact you within 48 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-4"
              >
                <div className="h-16 w-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Application Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for stepping up to empower young women. Check your inbox shortly for welcome details and next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Nairobi, Kenya"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Volunteer Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50 font-medium"
                  >
                    {roles.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.title} ({r.type})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Why do you want to volunteer with MPOWERHER? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Tell us briefly about your background and why period health education matters to you..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#C01C5C] shrink-0" />
                  <span>Your information is kept 100% private and encrypted.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#C01C5C] hover:bg-[#a0164c] text-white font-bold text-base shadow-lg shadow-pink-200/80 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}