// app/(dashboard)/student/page.tsx
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  FileText,
  Sparkles,
  Calendar,
} from "lucide-react";
import { getSession } from "@/lib/auth";

export default async function StudentDashboardPage() {
  const session = await getSession();
  const studentName = session?.user?.name || "Student";

  // Mock data (Replace with database query via Prisma)
  const stats = [
    { label: "Enrolled Courses", value: "4", icon: BookOpen, color: "text-[#C01C5C]", bg: "bg-pink-50" },
    { label: "Hours Learned", value: "28.5 hrs", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Completed Lessons", value: "32", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Certificates Earned", value: "2", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const inProgressCourses = [
    {
      id: "1",
      title: "Introduction to Web Development & React",
      category: "Frontend Development",
      progress: 68,
      totalModules: 12,
      completedModules: 8,
      nextLesson: "Module 9: React State & Hooks",
    },
    {
      id: "2",
      title: "Financial Literacy & Wealth Building",
      category: "Personal Finance",
      progress: 40,
      totalModules: 8,
      completedModules: 3,
      nextLesson: "Module 4: Understanding Investments",
    },
  ];

  const upcomingAssignments = [
    {
      id: "101",
      title: "Build a Portfolio Website using Next.js",
      course: "Web Development",
      dueDate: "Tomorrow, 11:59 PM",
      status: "Pending",
      isUrgent: true,
    },
    {
      id: "102",
      title: "Budget Planning Spreadsheet Analysis",
      course: "Financial Literacy",
      dueDate: "Aug 15, 2026",
      status: "In Progress",
      isUrgent: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. WELCOME HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C01C5C] to-pink-600 p-8 text-white shadow-lg shadow-pink-200/50">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> Welcome back to your portal
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to continue learning, {studentName}?
          </h1>
          <p className="text-sm font-medium text-pink-100 sm:text-base">
            You are making great progress! Finish your pending assignment to maintain your 5-day learning streak.
          </p>
          <div className="pt-2">
            <Link
              href="/student/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#C01C5C] shadow-sm hover:bg-pink-50 transition-colors"
            >
              Resume Learning <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* 2. STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-2xl bg-white p-5 border border-slate-100 shadow-sm"
            >
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <p className="mt-1 text-2xl font-extrabold text-slate-800">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. MAIN DASHBOARD CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: In-Progress Courses (Takes 2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              In-Progress Courses
            </h2>
            <Link href="/student/courses" className="text-sm font-bold text-[#C01C5C] hover:underline">
              View All Courses
            </Link>
          </div>

          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:border-pink-200 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#C01C5C] transition-colors mt-2">
                      {course.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                    {course.completedModules}/{course.totalModules} Modules
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C01C5C] rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Next Lesson Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 truncate">
                    <PlayCircle className="h-4 w-4 text-[#C01C5C] flex-shrink-0" />
                    <span className="truncate">Next: <strong className="text-slate-800">{course.nextLesson}</strong></span>
                  </div>
                  <Link
                    href={`/student/courses/${course.id}`}
                    className="font-bold text-[#C01C5C] hover:text-[#a0164c] flex-shrink-0 ml-2"
                  >
                    Continue →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Upcoming Assignments & Deadline Alerts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Upcoming Deadlines
            </h2>
            <Link href="/student/assignments" className="text-sm font-bold text-[#C01C5C] hover:underline">
              All
            </Link>
          </div>

          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className={`rounded-2xl p-5 bg-white border ${
                  assignment.isUrgent ? "border-rose-200 bg-rose-50/20" : "border-slate-100"
                } shadow-sm`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {assignment.course}
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 leading-snug">
                      {assignment.title}
                    </h4>
                  </div>
                  <FileText className={`h-5 w-5 flex-shrink-0 ${assignment.isUrgent ? "text-rose-500" : "text-slate-400"}`} />
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className={`inline-flex items-center gap-1 font-semibold ${
                    assignment.isUrgent ? "text-rose-600" : "text-slate-500"
                  }`}>
                    <Calendar className="h-3.5 w-3.5" /> {assignment.dueDate}
                  </span>
                  <Link
                    href={`/student/assignments/${assignment.id}`}
                    className="font-bold text-slate-700 hover:text-[#C01C5C]"
                  >
                    Submit
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Box */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 space-y-3">
            <h3 className="font-bold text-base">Need help with a module?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with your instructor or post a question in the student discussion community.
            </p>
            <button className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 font-bold text-xs text-white transition-colors">
              Ask Instructor
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}