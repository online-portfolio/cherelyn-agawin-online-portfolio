import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Target,
  Database,
  CalendarCheck,
  Headset,
  UserSearch,
  Quote,
  Award,
  GraduationCap,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { ProfileSidebar } from "@/components/portfolio/ProfileSidebar";
import aboutImage from "@/assets/portrait-about.jpg";
import {
  ACHIEVEMENTS,
  ADDITIONAL_EXPERIENCE,
  CORE_AREAS,
  EDUCATION,
  EXPERIENCE,
  SERVICES,
  SKILLS,
  STRENGTHS,
} from "@/components/portfolio/data";
import { toneBg, toneSoft, type Tone } from "@/components/portfolio/tones";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cherelyn Agawin — Administrative Assistant Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Cherelyn Agawin, an administrative assistant in Lapu Lapu City, Cebu with 16 years of experience in admin support, lead generation, customer service and recruitment.",
      },
      { property: "og:title", content: "Cherelyn Agawin — Administrative Assistant Portfolio" },
      {
        property: "og:description",
        content:
          "Administrative support, lead generation, customer service, scheduling, research and data management.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const SERVICE_ICONS: Record<string, LucideIcon> = {
  ClipboardList,
  Target,
  Database,
  CalendarCheck,
  Headset,
  UserSearch,
};

function SectionHeading({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="mb-6 scroll-mt-24">
      <p className="pixel-label flex items-center gap-2">
        <span className="pixel-dot bg-sage" />
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background lg:pl-72">
      <ProfileSidebar />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-12 lg:max-w-none lg:px-10 xl:max-w-6xl">
        {/* HERO */}
        <section id="home" className="scroll-mt-24">
          <div className="pixel-card pixel-grid relative overflow-hidden p-6 sm:p-10">
            <div className="absolute top-0 right-0 flex">
              <span className="h-2 w-2 bg-sky" />
              <span className="h-2 w-2 bg-sage" />
              <span className="h-2 w-2 bg-peach" />
              <span className="h-2 w-2 bg-lavender" />
            </div>

            <p className="pixel-label">
              Administrative Support • Lead Generation • Customer Service
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Helping Teams Stay Organized, Connected, and Productive.
            </h2>

            <p className="mt-5 text-lg font-medium text-foreground">Hi, I&rsquo;m Cherelyn Agawin.</p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              An organized and dedicated administrative professional with extensive experience
              supporting teams, managing information, communicating with clients, coordinating
              schedules, conducting research, and maintaining accurate records. I bring strong
              attention to detail, professional communication, adaptability, and the ability to work
              independently in fast paced environments.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex w-full items-center justify-center rounded-sm border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
              >
                View Experience
              </a>

              <div className="mt-2 flex items-center gap-3 rounded-sm bg-peach/50 px-4 py-2.5 sm:mt-0 sm:ml-auto">
                <span className="text-2xl font-semibold text-peach-foreground">16</span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-peach-foreground">Years</p>
                  <p className="pixel-label">Professional Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE WORK AREAS */}
        <section className="mt-6">
          <div className="pixel-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="pixel-label shrink-0 sm:w-36">Core Work Areas</p>
            <div className="flex flex-wrap gap-2">
              {CORE_AREAS.map((area, i) => (
                <span
                  key={area}
                  className={cn(
                    "rounded-sm px-3 py-1.5 text-xs font-medium",
                    toneSoft[(["sky", "sage", "peach", "lavender"] as Tone[])[i % 4]!],
                  )}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-12">
          <SectionHeading id="about" label="01 / Profile" title="About Me" />
          <div className="pixel-card grid gap-6 p-6 md:grid-cols-[280px_1fr] md:items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Cherelyn Agawin at her workspace"
                width={912}
                height={1104}
                loading="lazy"
                className="h-64 w-full rounded-sm border border-border object-cover md:h-80"
              />
              <span className="pixel-dot absolute -top-1 -left-1 bg-lavender" />
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cherelyn Agawin is an organized and dedicated administrative professional with a
                strong background in customer service, lead generation, office administration,
                recruitment, and client coordination. She is detail oriented, self motivated,
                adaptable, and capable of managing multiple responsibilities while maintaining
                accuracy and professionalism.
              </p>
              <div className="pixel-divider mt-6 w-40" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-12">
          <SectionHeading id="experience" label="02 / Track Record" title="Experience" />
          <div className="grid gap-4 md:grid-cols-2">
            {EXPERIENCE.map((job) => (
              <article key={job.role + job.period} className="pixel-card pixel-lift p-5">
                <div className="flex items-start gap-3">
                  <span className={cn("mt-1.5 h-3 w-3 shrink-0 rounded-sm", toneBg[job.tone])} />
                  <div>
                    <h3 className="text-base font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">{job.org}</p>
                    <p className="pixel-label mt-1">{job.period}</p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={cn("pixel-dot mt-1.5 shrink-0", toneBg[job.tone])} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="pixel-card mt-4 p-5">
            <p className="pixel-label">Additional Experience</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ADDITIONAL_EXPERIENCE.map((role) => (
                <span
                  key={role}
                  className="rounded-sm border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-12">
          <SectionHeading
            id="services"
            label="03 / Services"
            title="How I Can Support Your Business"
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]!;
              return (
                <article key={service.title} className="pixel-card pixel-lift p-5">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-sm",
                      toneBg[service.tone],
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* SKILLS + STRENGTHS */}
        <section className="mt-12">
          <SectionHeading id="skills" label="04 / Capabilities" title="Skills" />
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="pixel-card p-6">
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-sm px-3 py-1.5 text-sm font-medium",
                      toneSoft[(["sage", "sky", "lavender", "peach"] as Tone[])[i % 4]!],
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pixel-card pixel-grid bg-lavender/30 p-6">
              <h3 className="text-xl font-semibold">What I Bring to a Team</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {STRENGTHS.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-foreground" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-12">
          <SectionHeading id="education" label="05 / Background" title="Education & Credentials" />
          <div className="grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((ed) => (
              <article key={ed.title} className="pixel-card pixel-lift p-5">
                <GraduationCap className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-semibold">{ed.title}</h3>
                {ed.detail && <p className="text-sm text-muted-foreground">{ed.detail}</p>}
                {ed.org && <p className="mt-1 text-sm text-foreground">{ed.org}</p>}
                <p className="pixel-label mt-2">{ed.period}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="pixel-card bg-sage/30 p-5">
              <p className="pixel-label flex items-center gap-2">
                <Award className="h-3.5 w-3.5" /> Achievements
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ACHIEVEMENTS.map((a) => (
                  <span
                    key={a}
                    className="rounded-sm border border-border bg-card px-3 py-1.5 text-sm"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="pixel-card p-5">
              <Quote className="h-4 w-4 text-muted-foreground" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;There is a powerful driving force inside every human being that, once
                unleashed, can make any vision, dream, or desire a reality.&rdquo;
              </p>
              <footer className="pixel-label mt-3">Tony Robbins</footer>
            </blockquote>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 scroll-mt-24 pb-16">
          <div className="pixel-card pixel-grid bg-sky/30 p-8 text-center sm:p-12">
            <div className="mx-auto flex w-fit gap-1">
              <span className="pixel-dot bg-sage" />
              <span className="pixel-dot bg-peach" />
              <span className="pixel-dot bg-lavender" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Let&rsquo;s Work Together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Looking for reliable administrative, lead generation, customer service, or business
              support? Let&rsquo;s connect and discuss how I can help keep your operations organized
              and moving forward.
            </p>
            <button
              type="button"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <p className="pixel-label mt-8 text-center">
            Cherelyn Agawin · Administrative Assistant · Lapu Lapu City, Cebu
          </p>
        </section>
      </main>
    </div>
  );
}
