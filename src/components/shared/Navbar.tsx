'use client';

import { useTransition } from 'react';
import Image from 'next/image';
import { Menu, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useSession, signOut } from '@/lib/auth-client';
import Spinner from '../ui/Spinner';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPendingLocale, startTransition] = useTransition();

  const tNav = useTranslations('Navigation');
  const { data: session, isPending } = useSession();

  // Helper functions for route active states
  const isLinkActive = (href: string) => pathname === href;
  const isParentActive = (paths: string[]) => paths.some((path) => pathname.startsWith(path));

  // Close DaisyUI mobile dropdown on link click
  const closeMobileMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleLanguageSwitch = (newLocale: string) => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const whoWeAreLinks = [
    { name: tNav('aboutUs'), href: '/who-we-are/about-us' },
    { name: tNav('ourTeam'), href: '/who-we-are/our-team' },
    { name: tNav('resources'), href: '/who-we-are/resources' },
    { name: tNav('volunteer'), href: '/who-we-are/volunteer' },
  ];

  const whatWeDoLinks = [
    { name: tNav('ourImpact'), href: '/what-we-do/our-impact' },
    { name: tNav('ourWork'), href: '/what-we-do/our-work' },
  ];

  // Derive User Avatar URL
  const userName = session?.user?.name || 'User';
  const defaultAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    userName
  )}&background=C01C5C&color=ffffff&bold=true`;

  const userAvatarSrc =
    session?.user?.image && session.user.image.trim() !== ''
      ? session.user.image
      : defaultAvatarUrl;

  const handleSignOut = async () => {
    closeMobileMenu();
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
          router.refresh();
        },
      },
    });
  };

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
                  onClick={closeMobileMenu}
                  className={`font-heading font-medium rounded-xl ${
                    isLinkActive('/') ? 'bg-pink-50 text-[#C01C5C] font-bold' : 'text-slate-700'
                  }`}
                >
                  {tNav('home')}
                </Link>
              </li>

              {/* Mobile: Who We Are */}
              <li className="space-y-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 px-3 py-1">
                  {tNav('whoWeAre')}
                </span>
                <ul className="pl-2 space-y-1">
                  {whoWeAreLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        onClick={closeMobileMenu}
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
                  {tNav('whatWeDo')}
                </span>
                <ul className="pl-2 space-y-1">
                  {whatWeDoLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={isLinkActive(link.href) ? 'text-[#C01C5C] font-bold bg-pink-50' : 'text-slate-700'}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <div className="divider my-1"></div>

              {/* Mobile Language Switcher */}
              <li className="px-3 py-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase">{tNav('language')}</span>
                  <LanguageSwitcher 
                    currentLocale={locale} 
                    isPending={isPendingLocale} 
                    onSelectLocale={handleLanguageSwitch}
                    variant="compact"
                  />
                </div>
              </li>

              <div className="divider my-1"></div>

              {/* Mobile Auth Links */}
              {!session?.user ? (
                <>
                  <li>
                    <Link href="/login" onClick={closeMobileMenu} className="font-heading font-medium text-slate-700 hover:text-[#C01C5C]">
                      {tNav('login')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" onClick={closeMobileMenu} className="font-heading font-bold text-[#C01C5C]">
                      {tNav('register')}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/dashboard" onClick={closeMobileMenu} className="font-heading font-medium text-slate-700">
                      {tNav('dashboard')}
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="font-heading font-bold text-rose-600">
                      {tNav('signOut')}
                    </button>
                  </li>
                </>
              )}
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

        {/* 2. CENTER: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-heading font-medium text-slate-700">
          
          <Link 
            href="/" 
            className={`rounded-xl px-4 py-2 text-base transition-all ${
              isLinkActive('/') 
                ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
            }`}
          >
            {tNav('home')}
          </Link>

          {/* WHO WE ARE DROPDOWN */}
          <div className="relative group">
            <button 
              type="button"
              aria-haspopup="true"
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-base transition-all ${
                isParentActive(['/who-we-are']) 
                  ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                  : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
              }`}
            >
              <span>{tNav('whoWeAre')}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 pt-2 w-60 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-in-out z-50">
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
              type="button"
              aria-haspopup="true"
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-base transition-all ${
                isParentActive(['/what-we-do']) 
                  ? 'bg-pink-100/80 text-[#C01C5C] font-bold' 
                  : 'hover:text-[#C01C5C] hover:bg-pink-50/80'
              }`}
            >
              <span>{tNav('whatWeDo')}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-in-out z-50">
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

        {/* 3. RIGHT: Language Switcher & Auth Actions */}
        <div className="flex items-center gap-3">
          {/* DESKTOP LANGUAGE SWITCHER */}
          <div className="hidden sm:block">
            <LanguageSwitcher 
              currentLocale={locale} 
              isPending={isPendingLocale} 
              onSelectLocale={handleLanguageSwitch}
            />
          </div>

          {/* Authenticated / Visitor State */}
          {isPending ? (
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium px-3 py-1.5 rounded-xl bg-pink-50/50">
              <Spinner size="sm" />
            </div>
          ) : session?.user ? (
            <div className="relative group">
              <button 
                type="button"
                aria-label="User Menu"
                className="flex items-center gap-2 p-1 rounded-full border-2 border-pink-200 hover:border-[#C01C5C] transition-all bg-white"
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={userAvatarSrc}
                    alt={userName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </button>

              <div className="absolute top-full right-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-in-out z-50">
                <div className="bg-white border border-pink-100 rounded-2xl shadow-xl p-2 space-y-1">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {session.user.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {session.user.email}
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50/60 rounded-xl transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>{tNav('dashboard')}</span>
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50/60 rounded-xl transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>{tNav('profileSettings')}</span>
                  </Link>

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{tNav('signOut')}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-ghost font-heading font-semibold text-slate-700 hover:text-[#C01C5C] hover:bg-pink-50 rounded-xl px-5 border-none hidden sm:inline-flex"
              >
                {tNav('login')}
              </Link>
              <Link
                href="/register"
                className="btn font-heading font-semibold bg-[#C01C5C] hover:bg-[#a0164c] text-white rounded-xl px-6 border-none shadow-sm shadow-pink-200"
              >
                {tNav('register')}
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}