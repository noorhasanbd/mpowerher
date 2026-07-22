'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to check if a parent menu or child link is active
  const isLinkActive = (href: string) => pathname === href;
  const isParentActive = (paths: string[]) => paths.some((path) => pathname.startsWith(path));

  const whoWeAreLinks = [
    { name: 'About Us', href: '/who-we-are/about-us' },
    { name: 'Our Team', href: '/who-we-are/our-team' },
    { name: 'Resources', href: '/who-we-are/resources' },
    { name: 'Volunteer with Us', href: '/who-we-are/volunteer' },
  ];

  const whatWeDoLinks = [
    { name: 'Our Work', href: '/what-we-do/our-work' },
    { name: 'Our Impact', href: '/what-we-do/our-impact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-pink-100 transition-all">
      <div className="max-w-7xl mx-auto navbar px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* 1. LEFT: Logo & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Mobile Dropdown Menu */}
          <div className="dropdown lg:hidden">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost btn-circle text-slate-800 hover:bg-pink-50"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-slate-800" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white rounded-2xl w-64 border border-pink-100 space-y-2"
            >
              <li>
                <Link 
                  href="/" 
                  className={`font-heading font-medium rounded-xl ${
                    isLinkActive('/') ? 'bg-pink-50 text-[#C01C5C] font-bold' : 'text-slate-700'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Mobile: Who We Are */}
              <li className="space-y-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 px-3 py-1">
                  Who We Are
                </span>
                <ul className="pl-2 space-y-1">
                  {whoWeAreLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className={isLinkActive(link.href) ? 'text-[#C01C5C] font-bold bg-pink-50' : 'text-slate-700'}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Mobile: What We Do */}
              <li className="space-y-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 px-3 py-1">
                  What We Do
                </span>
                <ul className="pl-2 space-y-1">
                  {whatWeDoLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className={isLinkActive(link.href) ? 'text-[#C01C5C] font-bold bg-pink-50' : 'text-slate-700'}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <div className="divider my-1"></div>

              <li>
                <Link href="/login" className="font-heading font-medium text-slate-700 hover:text-[#C01C5C]">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="font-heading font-bold text-[#C01C5C]">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Logo Link */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#C01C5C] shadow-md transition-transform group-hover:scale-105 flex items-center justify-center bg-white">
              <Image
                src="/logo.jpeg"
                alt="MPOWERHER Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-[#C01C5C] tracking-tight">
              MPOWERHER
            </span>
          </Link>
        </div>

        {/* 2. CENTER: Desktop Hover Dropdown Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-heading font-medium text-slate-700">
          
          {/* Home Link */}
          <Link 
            href="/" 
            className={`rounded-xl px-4 py-2 text-base transition-all ${
              isLinkActive('/') 
                ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
            }`}
          >
            Home
          </Link>

          {/* WHO WE ARE DROPDOWN */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-base transition-all ${
                isParentActive(['/who-we-are']) 
                  ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                  : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
              }`}
            >
              <span>Who We Are</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu Box */}
            <div className="absolute top-full left-0 pt-2 w-60 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
              <div className="bg-white border border-pink-100 rounded-2xl shadow-xl p-2 space-y-1">
                {whoWeAreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm rounded-xl transition-colors ${
                      isLinkActive(link.href)
                        ? 'bg-pink-50 text-[#C01C5C] font-bold'
                        : 'text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50/60 font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* WHAT WE DO DROPDOWN */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-base transition-all ${
                isParentActive(['/what-we-do']) 
                  ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                  : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
              }`}
            >
              <span>What We Do</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu Box */}
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
              <div className="bg-white border border-pink-100 rounded-2xl shadow-xl p-2 space-y-1">
                {whatWeDoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm rounded-xl transition-colors ${
                      isLinkActive(link.href)
                        ? 'bg-pink-50 text-[#C01C5C] font-bold'
                        : 'text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50/60 font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </nav>

        {/* 3. RIGHT: Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="btn btn-ghost font-heading font-semibold text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50 rounded-xl px-5 border-none hidden sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn font-heading font-semibold bg-[#C01C5C] hover:bg-[#a0164c] text-white rounded-xl px-6 border-none shadow-sm shadow-pink-200"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}