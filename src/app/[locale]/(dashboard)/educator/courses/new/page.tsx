"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, ImagePlus, Save, Upload } from "lucide-react";
import { useState } from "react";

export default function NewCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/educator" className="transition hover:text-[#C01C5C]">
            Educator
          </Link>

          <span>/</span>

          <Link href="/educator/courses" className="transition hover:text-[#C01C5C]">
            Courses
          </Link>

          <span>/</span>

          <span className="font-medium text-slate-700">Create Course</span>
        </div>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-slate-900">
              Create Course
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Create a new course and start building your learning content.
            </p>
          </div>

          <Link
            href="/educator/courses"
            className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:self-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </div>

        {/* Success message */}
        {success && (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            Course saved successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Main form */}
            <div className="space-y-6">
              {/* Basic Information */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-[#C01C5C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-heading text-base font-bold text-slate-900">
                      Basic Information
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Add the main information about your course.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Course title */}
                  <div>
                    <label
                      htmlFor="title"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Course Title
                    </label>

                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      placeholder="e.g. Understanding Menstrual Health"
                      required
                      className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Course Description
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Describe what learners will learn from this course..."
                      rows={6}
                      required
                      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
                    />

                    <p className="mt-1.5 text-xs text-slate-400">
                      Give learners a clear idea of what this course covers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Course Details */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-6">
                  <h2 className="font-heading text-base font-bold text-slate-900">
                    Course Details
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Choose the category and difficulty level for your course.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Category
                    </label>

                    <select
                      id="category"
                      name="category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      required
                      className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
                    >
                      <option value="">Select category</option>
                      <option value="Health & Wellness">Health & Wellness</option>
                      <option value="Education">Education</option>
                      <option value="Technology">Technology</option>
                      <option value="Business">Business</option>
                      <option value="Personal Development">Personal Development</option>
                      <option value="Lifestyle">Lifestyle</option>
                    </select>
                  </div>

                  {/* Level */}
                  <div>
                    <label
                      htmlFor="level"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Level
                    </label>

                    <select
                      id="level"
                      name="level"
                      value={level}
                      onChange={(event) => setLevel(event.target.value)}
                      required
                      className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
                    >
                      <option value="">Select level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Course Content */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-5">
                  <h2 className="font-heading text-base font-bold text-slate-900">
                    Course Content
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    You can add lessons and learning materials after creating
                    the course.
                  </p>
                </div>

                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#C01C5C] shadow-sm">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-slate-800">
                    Start with your course information
                  </h3>

                  <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-slate-500">
                    Once your course is created, you can add lessons, videos,
                    resources, and other learning materials.
                  </p>
                </div>
              </section>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-6">
              {/* Thumbnail */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-heading text-base font-bold text-slate-900">
                  Course Thumbnail
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Add an image that represents your course.
                </p>

                <div className="mt-5">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt="Course thumbnail preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-center">
                        <ImagePlus className="h-7 w-7 text-slate-400" />

                        <p className="mt-2 text-xs font-medium text-slate-500">
                          Thumbnail preview
                        </p>
                      </div>
                    )}
                  </div>

                  <label
                    htmlFor="thumbnail"
                    className="mt-4 block text-sm font-medium text-slate-700"
                  >
                    Image URL
                  </label>

                  <input
                    id="thumbnail"
                    name="thumbnail"
                    type="url"
                    value={thumbnail}
                    onChange={(event) => setThumbnail(event.target.value)}
                    placeholder="https://..."
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#C01C5C] focus:ring-2 focus:ring-pink-100"
                  />

                  <p className="mt-2 text-[11px] leading-4 text-slate-400">
                    Use an image URL for now. You can connect this to your
                    upload system later.
                  </p>
                </div>
              </section>

              {/* Publishing */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-heading text-base font-bold text-slate-900">
                  Publishing
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Save the course as a draft first and publish it when it is
                  ready.
                </p>

                <div className="mt-5 space-y-2">
                  <button
                    type="submit"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C01C5C] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a0164c]"
                  >
                    <Save className="h-4 w-4" />
                    Save as Draft
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Upload className="h-4 w-4" />
                    Save & Publish
                  </button>
                </div>
              </section>

              {/* Quick note */}
              <div className="rounded-xl border border-pink-100 bg-pink-50 p-4">
                <p className="text-xs font-semibold text-[#C01C5C]">
                  Course creation tip
                </p>

                <p className="mt-1.5 text-xs leading-5 text-slate-600">
                  Start with a clear title and description. You can build the
                  lessons and other content after creating the course.
                </p>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}