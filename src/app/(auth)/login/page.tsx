'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  Sparkles,
} from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] py-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-pink-200/40 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-2xl shadow-pink-100/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* LEFT COLUMN: Visual Showcase */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#C01C5C] via-pink-600 to-rose-600 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                MPOWER<span className="text-pink-200">HER</span>
              </span>
            </Link>

            <div className="space-y-3 pt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-pink-100 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Welcome Back</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Continue Your Learning Journey.
              </h2>
              <p className="text-pink-100/90 text-sm leading-relaxed">
                Log in to resume your active modules, review your progress, and access confidential Q&A forums.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-8 border-t border-white/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-pink-200 border-2 border-[#C01C5C] flex items-center justify-center font-bold text-xs text-[#C01C5C]">
                  A
                </div>
                <div className="h-8 w-8 rounded-full bg-rose-200 border-2 border-[#C01C5C] flex items-center justify-center font-bold text-xs text-[#C01C5C]">
                  M
                </div>
                <div className="h-8 w-8 rounded-full bg-pink-300 border-2 border-[#C01C5C] flex items-center justify-center font-bold text-xs text-[#C01C5C]">
                  R
                </div>
              </div>
              <span className="text-xs font-semibold text-pink-100">
                25,000+ Girls Enrolled
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-pink-200">
              <ShieldCheck className="w-4 h-4 text-pink-200" />
              <span>100% Free, Private & Secure Access</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Login Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 space-y-4"
              >
                <div className="h-16 w-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Logged In Successfully!
                </h3>
                <p className="text-slate-600 max-w-sm mx-auto text-sm leading-relaxed">
                  Redirecting you to your learning dashboard...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
                >
                  Back to Login
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="login-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Sign In to Account
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Enter your credentials below to access your learning modules.
                  </p>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. name@example.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Password *
                    </label>
                    <a
                      href="#"
                      className="text-xs font-semibold text-[#C01C5C] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100 outline-none text-sm transition-all bg-slate-50/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-[#C01C5C] focus:ring-pink-200"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-xs font-medium text-slate-600 cursor-pointer"
                  >
                    Keep me logged in
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C01C5C] hover:bg-[#a0164c] text-white font-bold text-sm shadow-md shadow-pink-200/80 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Link to Register */}
                <p className="text-center text-xs text-slate-500 pt-2">
                  Don't have an account yet?{' '}
                  <Link
                    href="/register"
                    className="font-bold text-[#C01C5C] hover:underline"
                  >
                    Register for Free
                  </Link>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}