import Link from "next/link";
import {
  BookOpen,
  Users,
  ClipboardCheck,
  TrendingUp,
  Plus,
  ArrowRight,
  MoreHorizontal,
  PlayCircle,
  FileEdit,
} from "lucide-react";

const stats = [
  {
    label: "Total Courses",
    value: "4",
    icon: BookOpen,
    description: "2 published",
  },
  {
    label: "Total Learners",
    value: "284",
    icon: Users,
    description: "Across your courses",
  },
  {
    label: "Assessments",
    value: "18",
    icon: ClipboardCheck,
    description: "12 completed this week",
  },
  {
    label: "Completion Rate",
    value: "72%",
    icon: TrendingUp,
    description: "+8% this month",
  },
];

const courses = [
  {
    id: "1",
    title: "Understanding Menstrual Health",
    description:
      "Learn the basics of menstruation, the menstrual cycle, and common misconceptions.",
    lessons: 8,
    learners: 124,
    status: "Published",
    progress: 100,
  },
  {
    id: "2",
    title: "Menstrual Hygiene & Care",
    description:
      "Practical guidance on menstrual hygiene, self-care, and healthy practices.",
    lessons: 6,
    learners: 96,
    status: "Published",
    progress: 100,
  },
  {
    id: "3",
    title: "Understanding Period Myths",
    description:
      "Explore common myths and misconceptions about menstruation.",
    lessons: 4,
    learners: 64,
    status: "Draft",
    progress: 65,
  },
];

export default function EducatorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#C01C5C]">
              Educator Dashboard
            </p>

            <h1 className="font-heading text-3xl font-bold text-slate-900">
              Welcome back!
            </h1>

            <p className="mt-2 text-sm text-slate-600">
              Manage your courses, lessons, assessments, and learner progress.
            </p>
          </div>

          <Link
            href="/educator/courses/new"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#C01C5C] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a0164c]"
          >
            <Plus className="h-4 w-4" />
            Create Course
          </Link>
        </div>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-[#C01C5C]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Courses */}
          <section className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="font-heading text-lg font-bold text-slate-900">
                  My Courses
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage and organize your learning content.
                </p>
              </div>

              <Link
                href="/educator/courses"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#C01C5C] hover:underline"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {courses.map((course) => (
                <div key={course.id} className="p-6">
                  <div className="flex gap-4">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-[#C01C5C] sm:flex">
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-heading font-semibold text-slate-900">
                              {course.title}
                            </h3>

                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                course.status === "Published"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {course.status}
                            </span>
                          </div>

                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-500">
                            {course.description}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                          aria-label={`More options for ${course.title}`}
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span>{course.lessons} lessons</span>
                        <span>{course.learners} learners</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-[#C01C5C]"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>

                        <span className="ml-3 text-xs font-medium text-slate-500">
                          {course.progress}%
                        </span>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Link
                          href={`/educator/courses/${course.id}`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#C01C5C] px-3 text-xs font-medium text-white hover:bg-[#a0164c]"
                        >
                          Manage Course
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        {course.status === "Draft" && (
                          <Link
                            href={`/educator/courses/${course.id}/edit`}
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50"
                          >
                            <FileEdit className="h-3.5 w-3.5" />
                            Continue Editing
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Quick actions */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-heading text-lg font-bold text-slate-900">
                Quick Actions
              </h2>

              <div className="mt-4 space-y-2">
                <Link
                  href="/educator/courses/new"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-pink-200 hover:bg-pink-50/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-[#C01C5C]">
                    <Plus className="h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Create Course
                    </p>
                    <p className="text-xs text-slate-500">
                      Start a new learning course
                    </p>
                  </div>
                </Link>

                <Link
                  href="/educator/courses"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-pink-200 hover:bg-pink-50/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-[#C01C5C]">
                    <BookOpen className="h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Manage Courses
                    </p>
                    <p className="text-xs text-slate-500">
                      Edit lessons and content
                    </p>
                  </div>
                </Link>

                <Link
                  href="/educator/learners"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-pink-200 hover:bg-pink-50/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-[#C01C5C]">
                    <Users className="h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Learners
                    </p>
                    <p className="text-xs text-slate-500">
                      View learner activity
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Recent activity */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-lg font-bold text-slate-900">
                  Recent Activity
                </h2>

                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600"
                  aria-label="View all activity"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#C01C5C]">
                    <PlayCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-700">
                      Your course{" "}
                      <span className="font-medium">
                        Understanding Menstrual Health
                      </span>{" "}
                      received 12 new learners.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      2 hours ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#C01C5C]">
                    <ClipboardCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-700">
                      18 learners completed an assessment.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}