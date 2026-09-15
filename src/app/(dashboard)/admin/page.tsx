// app/(dashboard)/admin/page.tsx
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Settings,
  BookOpen,
  ArrowRight,
  Activity,
  AlertTriangle,
  Sparkles,
  Server,
  UserPlus,
} from "lucide-react";
import { getSession } from "@/lib/auth";

export default async function AdminDashboardPage() {
  const session = await getSession();
  const adminName = session?.user?.name || "Admin";

  // Mock data (Replace with Prisma queries)
  const stats = [
    {
      label: "Total Users",
      value: "1,420",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Active Courses",
      value: "18",
      icon: BookOpen,
      color: "text-[#C01C5C]",
      bg: "bg-pink-50",
    },
    {
      label: "System Health",
      value: "99.9%",
      icon: Server,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Active Issues",
      value: "1",
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const recentUsers = [
    {
      id: "u1",
      name: "Elena Rostova",
      email: "elena@example.com",
      role: "Student",
      date: "10 mins ago",
    },
    {
      id: "u2",
      name: "Dr. Marcus Vance",
      email: "m.vance@example.com",
      role: "Educator",
      date: "1 hour ago",
    },
    {
      id: "u3",
      name: "Clara Oswald",
      email: "clara@example.com",
      role: "Student",
      date: "3 hours ago",
    },
  ];

  const systemLogs = [
    {
      id: "l1",
      type: "Security",
      message: "Failed login attempt detected from IP 192.168.1.4",
      time: "12 mins ago",
      severity: "warning",
    },
    {
      id: "l2",
      type: "System",
      message: "Automated database backup completed successfully",
      time: "2 hours ago",
      severity: "info",
    },
    {
      id: "l3",
      type: "Auth",
      message: "New Educator role granted to m.vance@example.com",
      time: "1 hour ago",
      severity: "info",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. WELCOME HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-800 to-purple-600 p-8 text-white shadow-lg shadow-purple-200/50">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> Admin Console
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            System Control Center, {adminName}
          </h1>
          <p className="text-sm font-medium text-purple-100 sm:text-base">
            All services are running normally. 24 new platform registrations
            were logged in the past 24 hours.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/admin/users"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-purple-900 shadow-sm hover:bg-purple-50 transition-colors"
            >
              <UserPlus className="h-4 w-4 text-purple-700" /> Manage Users
            </Link>
            <Link
              href="/admin/settings"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700/50 hover:bg-purple-700/70 border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors"
            >
              <Settings className="h-4 w-4" /> Global Settings
            </Link>
          </div>
        </div>

        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* 2. STATS OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-2xl bg-white p-5 border border-slate-100 shadow-sm"
            >
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-slate-800">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Recent Users Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Recent Registrations
            </h2>
            <Link
              href="/admin/users"
              className="text-sm font-bold text-[#C01C5C] hover:underline"
            >
              View User Roster
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 font-bold flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        user.role === "Educator"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-pink-100 text-[#C01C5C]"
                      }`}
                    >
                      {user.role}
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline-block">
                      {user.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Audit Logs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              System Logs
            </h2>
            <Link
              href="/admin/system-logs"
              className="text-sm font-bold text-[#C01C5C] hover:underline"
            >
              Logs Console
            </Link>
          </div>

          <div className="space-y-3">
            {systemLogs.map((log) => (
              <div
                key={log.id}
                className="rounded-2xl p-4 bg-white border border-slate-100 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      log.severity === "warning"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {log.type}
                  </span>
                  <span className="text-[11px] text-slate-400">{log.time}</span>
                </div>
                <p className="text-xs font-medium text-slate-700 leading-snug">
                  {log.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
