"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Languages,
  Megaphone,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

type TeamRole =
  | "Lesson Development"
  | "Outreach"
  | "Translation"
  | "Founder"
  | "Social Media"
  | "Fundraising";

type TeamMember = {
  id: string;
  name: string;
  role: TeamRole;
  bio: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "aparna-prasad",
    name: "Aparna Prasad",
    role: "Lesson Development",
    image: "/team/aparna-prasad.webp",
    bio: "I joined MPowerHer to channel my enthusiasm for health and education toward striving for a world where all girls feel positive and confident about themselves.",
  },
  {
    id: "rachel-dsouza",
    name: "Rachel Dsouza",
    role: "Lesson Development",
    image: "/team/rachel-dsouza.webp",
    bio: "MpowerHer felt like an amazing opportunity to help others, especially girls like me. Being a part of this organization allowed me to contribute to its impact, and uplift women on an international scale!",
  },
  {
    id: "kaho-suzuki",
    name: "Kaho Suzuki",
    role: "Lesson Development",
    image: "/team/kaho-suzuki.webp",
    bio: "I wanted to help with MpowerHer because I wanted to help create engaging health lessons that make important information accessible and easy to understand.",
  },
  {
    id: "laila-ghoneim",
    name: "Laila Ghoneim",
    role: "Lesson Development",
    image: "/team/laila-ghoneim.webp",
    bio: "I joined MpowerHer because I’m passionate about education and wanted to help girls learn more about their health and well-being.",
  },
  {
    id: "meera-arun",
    name: "Meera Arun",
    role: "Outreach",
    image: "/team/meera-arun.webp",
    bio: "Mpowerher drew me in because I wanted to connect with others and help spread awareness about menstrual health and period poverty.",
  },
  {
    id: "inarah-rahman",
    name: "Inarah Rahman",
    role: "Outreach",
    image: "/team/inarah-rahman.webp",
    bio: "I wanted to join MpowerHer because I wanted to advocate for girls’ health and help bring attention to the challenges of period poverty.",
  },
  {
    id: "areeba-mahbub",
    name: "Areeba Mahbub",
    role: "Translation",
    image: "/team/areeba-mahbub.webp",
    bio: "I’m helping out with MpowerHer because I wanted to make important health information accessible to girls across different languages and communities.",
  },
  {
    id: "rifaya-faial",
    name: "Rifaya Faial",
    role: "Translation",
    image: "/team/rifaya-faial.webp",
    bio: "I joined MpowerHer to help break down language barriers and make menstrual health education more accessible.",
  },
  {
    id: "simrah-ahmed",
    name: "Simrah Ahmed",
    role: "Translation",
    image: "/team/simrah-ahmed.webp",
    bio: "Mpowerher is so great because I believe everyone deserves access to information about their health in a language they can understand and this program does just that",
  },
  {
    id: "zaina-khan",
    name: "Zaina Khan",
    role: "Founder",
    image: "/team/zaina-khan.webp",
    bio: "I founded MpowerHer because I wanted to help combat period poverty and make menstrual health education and resources more accessible to girls who need them.",
  },
  {
    id: "namira-nadeem",
    name: "Namira Nadeem",
    role: "Social Media",
    image: "/team/namira-nadeem.webp",
    bio: "I joined MpowerHer because I wanted to use social media to educate others and raise awareness about menstrual health.",
  },
  {
    id: "zoe-bruce",
    name: "Zoë Bruce",
    role: "Social Media",
    image: "/team/zo-bruce.webp",
    bio: "I joined MpowerHer because I wanted to use my creativity to advocate for women’s health and help spread awareness about period poverty.",
  },
  {
    id: "deesha-roopesh",
    name: "Deesha Roopesh",
    role: "Fundraising",
    image: "/team/deesha-roopesh.webp",
    bio: "I joined MpowerHer because I wanted to help combat period poverty and raise the resources needed to make a real difference",
  },
  {
    id: "lili-perkins",
    name: "Lili Perkins",
    role: "Fundraising",
    image: "/team/lili-perkins.webp",
    bio: "I joined MpowerHer because I wanted to contribute to a cause I care about and help provide girls with the resources they deserve.",
  },
  {
    id: "rethika-sathymathen",
    name: "Rethika Sathymathen",
    role: "Fundraising",
    image: "/team/rethika-sathymathen.webp",
    bio: "I joined MpowerHer because I believe period poverty should never keep a girl from learning, participating, or feeling confident in her daily life.",
  },
  {
    id: "aida-karim",
    name: "Aida Karim",
    role: "Outreach",
    image: "/team/aida-karim.webp",
    bio: "I joined MpowerHer because I wanted to support girls in underserved communities and help make conversations about menstrual health more accessible.",
  },
  {
    id: "norah-chowdhury",
    name: "Norah Chowdhury",
    role: "Social Media",
    image: "/team/norah-chowdhury.webp",
    bio: "I joined MpowerHer because I wanted to create meaningful content that helps people understand and care about menstrual health.",
  },
  {
    id: "hafsah-khaja",
    name: "Hafsah Khaja",
    role: "Outreach",
    image: "/team/hafsah-khaja.webp",
    bio: "I joined MpowerHer because I wanted to connect people with important resources and advocate for better health education for girls.",
  },
  {
    id: "navya-pasumarthi",
    name: "Navya Pasumarthi",
    role: "Social Media",
    image: "/team/navya-pasumarthi.webp",
    bio: "I joined MpowerHer because I wanted to use social media to educate, inspire, and bring more attention to menstrual health and period equity.",
  },
  {
    id: "krupa-kuber",
    name: "Krupa Kuber",
    role: "Fundraising",
    image: "/public",
    bio: "I joined MpowerHer because I wanted to turn my passion for this cause into action by helping raise funds for menstrual products and health resources.",
  },
  {
    id: "tasheen-kashem",
    name: "Tasheen Kashem",
    role: "Fundraising",
    bio: "I joined MpowerHer because I wanted to help raise both awareness and funds to improve access to menstrual health resources.",
  },
];

const roles: Array<"All" | TeamRole> = [
  "All",
  "Lesson Development",
  "Outreach",
  "Translation",
  "Social Media",
  "Fundraising",
  "Founder",
];

const roleIcons: Record<TeamRole, typeof Heart> = {
  "Lesson Development": Sparkles,
  Outreach: Megaphone,
  Translation: Languages,
  "Social Media": Users,
  Fundraising: Heart,
  Founder: Sparkles,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutPage() {
  const t = useTranslations("aboutUs");

  const [activeRole, setActiveRole] = useState<"All" | TeamRole>("All");
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);
  const [search, setSearch] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return teamMembers.filter((member) => {
      const matchesRole =
        activeRole === "All" || member.role === activeRole;

      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.bio.toLowerCase().includes(query);

      return matchesRole && matchesSearch;
    });
  }, [activeRole, search]);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(192,28,92,0.13),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(244,114,182,0.15),transparent_28%)]" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-[#C01C5C]">
              <Sparkles className="h-4 w-4" />
              {t("eyebrow")}
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#C01C5C] sm:text-5xl lg:text-7xl">
              {t("title")}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Decorative team orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto mt-14 max-w-5xl"
          >
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/70 blur-3xl" />

            <div className="relative grid grid-cols-5 items-center gap-3 sm:gap-5">
              {teamMembers.slice(0, 10).map((member, index) => (
                <motion.button
                  key={member.id}
                  type="button"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                  whileHover={{ y: -7, scale: 1.05 }}
                  onClick={() => setSelectedMember(member)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white bg-pink-50 shadow-md"
                  aria-label={`View ${member.name}`}
                >
                  {member.image && !imageErrors[member.id] ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 20vw, 120px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() =>
                        setImageErrors((prev) => ({
                          ...prev,
                          [member.id]: true,
                        }))
                      }
                    />
                  ) : (
                    <Image
                      src="/team/avatar-fallback.svg"
                      alt={member.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#C01C5C]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-pink-50/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C01C5C]">
                {t("teamEyebrow")}
              </p>

              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                {t("teamTitle")}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {t("teamDescription")}
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("searchPlaceholder")}
                className="h-12 w-full rounded-2xl border border-pink-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#C01C5C] focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </motion.div>

          {/* FILTERS */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {roles.map((role) => {
              const active = activeRole === role;

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-[#C01C5C] bg-[#C01C5C] text-white shadow-md"
                      : "border-pink-200 bg-white text-slate-600 hover:border-[#C01C5C] hover:text-[#C01C5C]"
                  }`}
                >
                  {role === "All" ? t("filters.all") : role}
                </button>
              );
            })}
          </div>

          {/* CARDS */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${activeRole}-${search}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredMembers.map((member) => {
                const RoleIcon = roleIcons[member.role];

                return (
                  <motion.article
                    key={member.id}
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -7 }}
                    className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                  >
                    {/* IMAGE */}
                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="relative block aspect-[4/4.2] w-full overflow-hidden bg-pink-100 text-left"
                    >
                      {member.image && !imageErrors[member.id] ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [member.id]: true,
                            }))
                          }
                        />
                      ) : (
                        <Image
                          src="/team/avatar-fallback.svg"
                          alt={member.name}
                          fill
                          sizes="400px"
                          className="object-cover"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#C01C5C] backdrop-blur">
                          <RoleIcon className="h-3.5 w-3.5" />
                          {member.role}
                        </span>
                      </div>
                    </button>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="font-heading text-xl font-bold text-slate-900">
                        {member.name}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                        {member.bio}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C01C5C] transition-colors hover:text-[#a0164c]"
                      >
                        {t("readStory")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredMembers.length === 0 && (
            <div className="rounded-3xl border border-dashed border-pink-200 bg-white px-6 py-16 text-center">
              <p className="font-heading text-xl font-semibold text-slate-800">
                {t("noResults")}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {t("noResultsDescription")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-pink-100/80 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-pink-100/80 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl px-6 text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-[#C01C5C]">
            <Heart className="h-6 w-6" />
          </div>

          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("closingTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {t("closingDescription")}
          </p>
        </motion.div>
      </section>

      {/* MEMBER MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedMember(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label={t("close")}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur transition hover:bg-white hover:text-[#C01C5C]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-2">
                {/* MODAL IMAGE */}
                <div className="relative min-h-[320px] bg-pink-100 md:min-h-[520px]">
                  {selectedMember.image && !imageErrors[selectedMember.id] ? (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src="/team/avatar-fallback.svg"
                      alt={selectedMember.name}
                      fill
                      sizes="500px"
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#C01C5C]/50 to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#C01C5C] backdrop-blur">
                      {selectedMember.role}
                    </span>
                  </div>
                </div>

                {/* MODAL CONTENT */}
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C01C5C]">
                    {t("memberStory")}
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
                    {selectedMember.name}
                  </h2>

                  <div className="mt-6 h-px bg-pink-100" />

                  <div className="mt-6">
                    <p className="text-sm font-medium text-slate-400">
                      {t("whyMpowerHer")}
                    </p>

                    <blockquote className="mt-3 text-lg leading-8 text-slate-700">
                      “{selectedMember.bio}”
                    </blockquote>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-[#C01C5C] px-5 text-sm font-semibold text-white transition hover:bg-[#a0164c]"
                  >
                    {t("close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}