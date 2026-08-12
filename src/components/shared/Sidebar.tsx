'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client'; // Adjust path if your authClient is located elsewhere
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  FileCheck2,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  LogOut,
  Sparkles,
  Menu,
  X,
  CalendarHeart,
  Home,
} from 'lucide-react';

type UserRole = 'student' | 'educator' | 'admin';

interface SidebarProps {
  userRole?: UserRole;
}

export default function Sidebar({ userRole = 'student' }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Fetch real-time user session from Better-Auth
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/login';
        },
      },
    });
  };

  // Navigation items scoped by role + shared period tracker link
  const navItemsByRole = {
    student: [
      { name: 'Overview', href: '/student', icon: LayoutDashboard },
      { name: 'Cycle Tracker', href: '/tracker', icon: CalendarHeart },
      { name: 'My Courses', href: '/student/courses', icon: BookOpen },
      { name: 'Assignments', href: '/student/assignments', icon: FileCheck2 },
    ],
    educator: [
      { name: 'Overview', href: '/educator', icon: LayoutDashboard },
      { name: 'Cycle Tracker', href: '/tracker', icon: CalendarHeart },
      { name: 'Manage Courses', href: '/educator/manage-courses', icon: BookOpen },
      { name: 'Grading & Review', href: '/educator/grading', icon: FileCheck2 },
      { name: 'Student Roster', href: '/educator/students', icon: GraduationCap },
    ],
    admin: [
      { name: 'Overview', href: '/admin', icon: LayoutDashboard },
      { name: 'Cycle Tracker', href: '/tracker', icon: CalendarHeart },
      { name: 'User Management', href: '/admin/users', icon: Users },
      { name: 'System Logs', href: '/admin/system-logs', icon: ShieldCheck },
      { name: 'Global Settings', href: '/admin/settings', icon: Settings },
    ],
  };

  const navItems = navItemsByRole[userRole] || navItemsByRole.student;

  const roleBadges: Record<UserRole, { label: string; bg: string }> = {
    student: { label: 'Student Portal', bg: 'bg-pink-100 text-[#C01C5C]' },
    educator: { label: 'Educator Hub', bg: 'bg-amber-100 text-amber-800' },
    admin: { label: 'Admin Console', bg: 'bg-purple-100 text-purple-800' },
  };

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Drawer Toggle Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-3.5 bg-[#C01C5C] text-white rounded-full shadow-lg shadow-pink-300/50 hover:bg-[#a0164c] transition-all"
          aria-label="Toggle Navigation Sidebar"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-40 h-screen bg-white border-r border-pink-100 flex flex-col justify-between transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* TOP SECTION: Header & Main Navigation */}
        <div>
          {/* Logo & Desktop Collapse Trigger */}
          <div className="h-20 flex items-center justify-between px-5 border-b border-pink-50">
            <Link href="/" className="flex items-center gap-3 overflow-hidden">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#C01C5C] to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0">
                M
              </div>
              {!isCollapsed && (
                <span className="font-heading font-extrabold text-lg text-slate-800 tracking-tight whitespace-nowrap">
                  MPOWERHER
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-pink-50 transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Role Portal Indicator Badge */}
          {!isCollapsed && (
            <div className="px-5 pt-4 pb-1">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${roleBadges[userRole].bg}`}>
                <Sparkles className="w-3 h-3" />
                {roleBadges[userRole].label}
              </span>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5 mt-2">
            {!isCollapsed && (
              <p className="px-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Main Menu
              </p>
            )}

            {/* Back to Home Link */}
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all group relative"
            >
              <Home className="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-slate-600" />
              {!isCollapsed && <span className="truncate whitespace-nowrap">Back to Homepage</span>}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
                  Back to Homepage
                </div>
              )}
            </Link>

            <hr className="my-2 border-slate-100" />

            {/* Role Nav Items */}
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isLinkActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all group relative
                    ${
                      active
                        ? 'bg-pink-50 text-[#C01C5C] font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-[#C01C5C]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  
                  {!isCollapsed && (
                    <span className="truncate whitespace-nowrap">{item.name}</span>
                  )}

                  {/* Collapsed Tooltip */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM SECTION: Support, Profile & Log Out */}
        <div className="p-3 border-t border-pink-50 space-y-2">
          {/* Support Link */}
          <Link
            href="/help"
            className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors group relative"
          >
            <HelpCircle className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-slate-600" />
            {!isCollapsed && <span>Help & Support</span>}
            {isCollapsed && (
              <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
                Help & Support
              </div>
            )}
          </Link>

          {/* User Profile Footer & Sign Out */}
          <div className={`p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between ${isCollapsed ? 'flex-col gap-2' : ''}`}>
            <div className="flex items-center gap-3 min-w-0">
              {/* Profile Avatar / Avatar Image / Skeleton */}
              {isPending ? (
                <div className="w-9 h-9 rounded-xl bg-slate-200 animate-pulse flex-shrink-0" />
              ) : user?.image ? (
                <img
                  src={user.image}
                  alt={user.name || 'User Profile'}
                  className="w-9 h-9 rounded-xl object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-pink-200 text-[#C01C5C] font-bold flex items-center justify-center flex-shrink-0">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}

              {!isCollapsed && (
                <div className="min-w-0">
                  {isPending ? (
                    <div className="space-y-1">
                      <div className="h-3.5 w-24 bg-slate-200 rounded animate-pulse" />
                      <div className="h-3 w-32 bg-slate-200 rounded animate-pulse" />
                    </div>
                  ) : (
                    <>
                      <p className="text-xs font-bold text-slate-800 truncate">
                        {user?.name || 'Anonymous User'}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {user?.email || 'No session email'}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={handleSignOut}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors group relative"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-rose-900 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
                  Log Out
                </div>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}