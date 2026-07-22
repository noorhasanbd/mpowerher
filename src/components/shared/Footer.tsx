// src/components/Footer.tsx
"use client";
import Link from 'next/link';
import { Heart, Send, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 text-[#1F2937] font-sans">
      
      {/* 1. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Mission Column (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5 inline-block">
            <div className="h-10 w-10 rounded-full bg-[#C01C5C] text-white flex items-center justify-center font-heading font-bold text-xl shadow-md">
              M
            </div>
            <span className="font-heading font-bold text-2xl text-[#C01C5C] tracking-tight">
              MPOWERHER
            </span>
          </Link>
          
          <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
            Empowering young girls through accessible, localized menstrual health and hygiene education. Knowledge is the first step toward dignity and equality.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="p-2.5 rounded-full bg-[#FDF2F8] text-[#C01C5C] hover:bg-[#C01C5C] hover:text-white transition-all" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-[#FDF2F8] text-[#C01C5C] hover:bg-[#C01C5C] hover:text-white transition-all" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-[#FDF2F8] text-[#C01C5C] hover:bg-[#C01C5C] hover:text-white transition-all" aria-label="Twitter">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-[#FDF2F8] text-[#C01C5C] hover:bg-[#C01C5C] hover:text-white transition-all" aria-label="LinkedIn">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-base text-[#1F2937]">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Learning Modules
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Resources Column */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-base text-[#1F2937]">Resources</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/faq" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-gray-600 hover:text-[#C01C5C] transition-colors">
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Column */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-base text-[#1F2937]">Stay Informed</h3>
          <p className="text-xs text-gray-500">
            Subscribe for updates on new modules and youth health initiatives.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-sm w-full bg-[#FDF2F8] border-pink-100 focus:border-[#C01C5C] focus:outline-none rounded-xl pr-10 text-xs"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#C01C5C] text-white rounded-lg flex items-center justify-center hover:bg-[#a0164c] transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* 2. BOTTOM BAR (Copyright & Credit) */}
      <div className="border-t border-pink-50 bg-[#FDF2F8]/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MPOWERHER. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[#C01C5C] fill-[#C01C5C]" /> for health education and youth empowerment.
          </p>
        </div>
      </div>

    </footer>
  );
}