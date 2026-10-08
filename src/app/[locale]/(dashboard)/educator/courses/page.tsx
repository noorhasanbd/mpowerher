"use client";

import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  FileEdit,
  MoreHorizontal,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

type CourseStatus = "Published" | "Draft";

type Course = {
  id: string;
  title: string;
  description: string;
  lessons: number;
  learners: number;
  status: CourseStatus;
  updatedAt: string;
};

const courses: Course[] = [
  {
    id: "1",
    title: "Understanding Menstrual Health",
    description:
      "Learn the basics of menstruation, the menstrual cycle, and common misconceptions.",
    lessons: 8,
    learners: 124,
    status: "Published",
    updatedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Menstrual Hygiene & Care",
    description:
      "Practical guidance on menstrual hygiene, self-care, and healthy practices.",
    lessons: 6,
    learners: 96,
    status: "Published",
    updatedAt: "5 days ago",
  },
  {
    id: "3",
    title: "Understanding Period Myths",
    description:
      "Explore common myths and misconceptions about menstruation.",
    lessons: 4,
    learners: 64,
    status: "Draft",
    updatedAt: "Yesterday",
  },
];

export default function EducatorCoursesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | CourseStatus>("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || course.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/educator"
            className="transition hover:text-[#C01C5C]"
          >
            Educator
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-700">
            Courses
          </span>
        </div>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-slate-900">
              My Courses
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Create, organize, and manage your learning courses and
              educational content.
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

        {/* Filters */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              {(["All", "Published", "Draft"] as const).map(
                (filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setStatus(filter)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      status === filter
                        ? "bg-pink-50 text-[#C01C5C]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        {/* Course count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>
        </div>

        {/* Courses */}
        {filteredCourses.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-pink-200 hover:shadow-sm"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-[#C01C5C]">
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-heading font-semibold text-slate-900">
                          {course.title}
                        </h2>

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

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`More options for ${course.title}`}
                    className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    <span>
                      {course.lessons} lessons
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>
                      {course.learners} learners
                    </span>
                  </div>

                  <span className="ml-auto text-xs text-slate-400">
                    Updated {course.updatedAt}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/educator/courses/${course.id}`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#C01C5C] px-3.5 text-xs font-semibold text-white transition hover:bg-[#a0164c]"
                  >
                    Manage Course
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href={`/educator/courses/${course.id}/edit`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <FileEdit className="h-3.5 w-3.5" />
                    Edit
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          /* Empty state */
          <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-[#C01C5C]">
              <BookOpen className="h-6 w-6" />
            </div>

            <h2 className="mt-5 font-heading text-lg font-bold text-slate-900">
              No courses found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              {search
                ? "Try adjusting your search or status filter."
                : "Create your first course to start building learning content."}
            </p>

            {!search && (
              <Link
                href="/educator/courses/new"
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-[#C01C5C] px-4 text-sm font-semibold text-white hover:bg-[#a0164c]"
              >
                <Plus className="h-4 w-4" />
                Create Course
              </Link>
            )}
          </section>
        )}
      </div>
    </main>
  );
}