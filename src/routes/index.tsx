import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CookingPot,
  Database,
  GraduationCap,
  Home,
  Headset,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Quote,
  Search,
  Trash2,
  UserRound,
  Users,
  Utensils,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Cherelyn Agawin | Administrative Assistant",
      },
      {
        name: "description",
        content:
          "Professional portfolio of Cherelyn Agawin, an administrative assistant with experience in customer service, lead generation, recruitment, and office support.",
      },
      {
        property: "og:title",
        content: "Cherelyn Agawin | Administrative Assistant",
      },
      {
        property: "og:description",
        content:
          "Administrative support, lead generation, customer service, recruitment, and data management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const PROFILE = {
  name: "Cherelyn Agawin",
  initials: "CA",
  email: "cherry.bumbum12@gmail.com",
  title: "Administrative Assistant",
  location: "Lapu-Lapu City, Cebu, Philippines",
  summary:
    "Iâ€™m an organized and dedicated Administrative Assistant with a proven track record of providing exceptional customer service in fast-paced environments. I bring strong attention to detail and decision-making skills, and Iâ€™m comfortable managing multiple tasks at once.",
  approach:
    "Iâ€™m self-motivated and work effectively both independently and as part of a team. I bring strong communication and project management skills, and take a proactive approach to identifying issues, improving processes, and supporting team objectives.",
};

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent("Professional inquiry")}`;
const MAILTO_URL = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Professional inquiry")}`;

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home", icon: Home },
  { label: "About", href: "#about", id: "about", icon: UserRound },
  { label: "Experience", href: "#experience", id: "experience", icon: CalendarDays },
  { label: "Services", href: "#services", id: "services", icon: BriefcaseBusiness },
  { label: "Education", href: "#education", id: "education", icon: GraduationCap },
  { label: "Contact", href: "#contact", id: "contact", icon: Mail },
];

const SNAPSHOT = [
  { value: "16 years", label: "Professional experience" },
  { value: "6 years", label: "Post-secondary education" },
  { value: "7 roles", label: "Across varied industries" },
  { value: "Cebu", label: "Philippines" },
];

const EXPERIENCE = [
  {
    period: "March 2026 â€” Present",
    company: "Dynata Philippines Inc.",
    mark: "DYN",
    role: "Survey Interviewer",
    icon: MessageCircle,
    location: "Cebu, Cebu",
    details: [
      "I follow scripted questionnaires accurately and conduct thorough interviews for reliable research data.",
      "I use precise language to minimize confusion, build rapport with respondents, and support response rates.",
      "I maintain professional communication throughout each interview.",
    ],
  },
  {
    period: "January 2024 â€” Present",
    company: "Alex",
    mark: "AX",
    role: "Lead Generation Specialist",
    icon: Search,
    location: "United States",
    details: [
      "I research business opportunities, build prospect lists, and manage multiple lead generation channels.",
      "I use data analysis to identify lead trends, evaluate performance, and adjust strategies.",
      "I implemented a CRM system to organize lead management and improve efficiency.",
      "I schedule appointments with interested customers based on availability.",
    ],
  },
  {
    period: "October 2023 â€” December 2024",
    company: "Choi Ka Wan",
    mark: "CKW",
    role: "Housekeeper / Home Tutor",
    icon: Home,
    location: "Fanling, New Territories, Hong Kong",
    details: [
      "I maintained clean, comfortable living and guest areas through regular cleaning, dusting, vacuuming, and sanitation.",
      "I followed professional housekeeping procedures and tutored a child with school homework.",
    ],
  },
  {
    period: "April 2017 â€” January 2023",
    company: "Boardwalk City Residences Condominium Corp.",
    mark: "BCR",
    role: "Administrative Assistant / Receptionist",
    icon: ClipboardList,
    location: "Mandaue City",
    details: [
      "I received, recorded, dispatched, and distributed incoming mail and packages, and communicated with vendors and contractors.",
      "I scheduled meetings and appointments, answered multi-line phones, routed messages, and welcomed visitors.",
      "I created and maintained customer databases, spreadsheets, filing systems, and administrative procedures.",
      "I improved document organization and recommended process changes to strengthen accuracy, efficiency, and service quality.",
    ],
  },
  {
    period: "March 2015 â€” July 2016",
    company: "Cebu Greenmate Manpower Services",
    mark: "CGM",
    role: "HR Recruiter",
    icon: Users,
    location: "Lapu-Lapu City",
    details: [
      "I posted job advertisements, evaluated applicant credentials, and screened candidates through interviews and assessments.",
      "I verified references and employment information, coordinated interviews with management, and maintained recruiter relationships.",
      "I developed recruitment strategies to identify qualified candidates.",
    ],
  },
  {
    period: "June 2011 â€” February 2015",
    company: "Golden Arches Development Corporation",
    mark: "GAD",
    role: "Service Crew Member",
    icon: Headset,
    location: "Cebu City",
    details: [
      "I provided customer service in a fast-paced environment, processed payments, and operated cash registers and POS systems.",
      "I prepared orders, monitored supplies, maintained clean work areas, and followed health and safety standards.",
      "I trained new team members and worked across front counter, drive-through, and other assigned areas.",
    ],
  },
  {
    period: "April 2010 â€” March 2011",
    company: "CNT Lechon",
    mark: "CNT",
    role: "Food Service Handler",
    icon: CookingPot,
    location: "Cebu City",
    details: [
      "I greeted customers, answered questions, prepared and served food, and replenished supplies.",
      "I followed food safety procedures, monitored storage dates, and cleaned and sanitized equipment and workspaces.",
    ],
  },
];

const SERVICES: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Administrative Support", description: "I assist with documentation, records, scheduling, organization, coordination, and day-to-day administrative responsibilities.", icon: ClipboardList },
  { title: "Lead Generation", description: "I research prospects, build lead lists, maintain CRM records, track leads, analyze results, and help set appointments.", icon: Search },
  { title: "Data Entry & Record Management", description: "I maintain organized spreadsheets, databases, customer records, files, and business information.", icon: Database },
  { title: "Customer Service", description: "I communicate professionally with customers, answer inquiries, and help create positive client experiences.", icon: Headset },
  { title: "Recruitment Support", description: "I can assist with candidate screening, reference verification, interviews, job advertisements, applicant records, and interview scheduling.", icon: Users },
  { title: "Scheduling & Appointment Coordination", description: "I coordinate appointments, meetings, schedules, reminders, and follow-up activities.", icon: CalendarDays },
  { title: "Research Support", description: "I conduct prospect research, gather information, and support structured data collection.", icon: Search },
];

const CORE_AREAS = [
  "Administrative Support", "Lead Generation", "Customer Service", "Recruitment", "Data Entry",
  "Record Management", "Database Management", "Scheduling", "Appointment Setting", "Research",
  "CRM Management", "Client Communication", "Office Administration", "Data Analysis", "Reporting",
  "Interviewing", "Team Coordination",
];

const SKILLS = [
  "Administrative Skills", "Customer Service", "Extended Concentration", "Attention to Detail",
  "Time Management", "Following Instructions", "Learning New Techniques", "Positive Learning Attitude",
  "Independent Work", "Communication", "Organization", "Lead Generation", "CRM Management",
  "Prospect Research", "Appointment Setting", "Recruitment Support", "Candidate Screening",
  "Data Entry", "Spreadsheet Management", "Database Management", "Record Keeping",
  "Customer Communication", "Scheduling", "Interviewing", "Reporting", "Process Improvement",
];

const STRENGTHS = [
  "Organized", "Detail-oriented", "Self-motivated", "Strong communication",
  "Sound decision-making", "Able to manage multiple tasks", "Independent and team-oriented",
  "Adaptable and proactive", "Customer-service focused", "Strong time management",
  "Quick learner", "Process-improvement mindset",
];

const EDUCATION = [
  { period: "June 2024 â€” June 2025", credential: "Bachelor of Science in Business Administration", detail: "Major in Human Resource Management", school: "New Era University", location: "Quezon City, Philippines" },
  { period: "June 2017 â€” December 2017", credential: "Hotel and Restaurant Management", detail: "Basic Vocational in Hotel Management", school: "High Skill Technical Training Center Inc.", location: "Lapu-Lapu City" },
  { period: "June 2014 â€” December 2014", credential: "Beauty Care / Cosmetology", detail: "Vocational in Health and Wellness", school: "", location: "Cebu City" },
  { period: "January 2006 â€” March 2010", credential: "High School Diploma", detail: "", school: "Felipe F. Matbagon Memorial High School", location: "Caubian, Lapu-Lapu City" },
];

const ACHIEVEMENTS = [
  "Most Outstanding Student",
  "SSG Treasurer",
  "Member of the SSG Officers as Treasurer",
  "3rd Honorable Mention",
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="section-heading">
      <div className="section-index"><span>{index}</span><span>{eyebrow}</span></div>
      <div className="max-w-3xl">
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">{title}</h2>
        {intro ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p> : null}
      </div>
    </Reveal>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between sm:px-8 lg:px-12">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label={`${PROFILE.name}, home`}>
          <span className="brand-monogram" aria-hidden="true">{PROFILE.initials}</span>
          <span className="truncate font-display text-lg font-bold text-foreground">{PROFILE.name}<span className="ml-2 hidden text-xs font-medium text-primary sm:inline">/ portfolio</span></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link inline-flex items-center gap-2 ${active === link.id ? "is-active" : ""}`}
                aria-current={active === link.id ? "page" : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
        {open ? (
          <nav className="absolute inset-x-0 top-full z-50 grid gap-1 border-t border-border bg-background px-5 py-3 shadow-editorial sm:px-8 lg:hidden" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? "page" : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-border/60 px-3 text-sm font-semibold last:border-0 ${active === link.id ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/60"}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">0{index + 1}</span>
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative scroll-mt-20 overflow-hidden">
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.8fr)] lg:gap-16 lg:px-12 lg:py-20">
        <div className="hero-copy relative z-10">
          <Reveal>
            <div className="hero-availability"><span className="status-dot" /> How I can support your team</div>
            <p className="mt-7 text-sm font-semibold uppercase text-muted-foreground">{PROFILE.title} <span className="text-primary">/ Cebu, PH</span></p>
            <h1 className="mt-3 max-w-4xl font-display text-6xl font-semibold leading-[1.04] text-foreground sm:text-7xl lg:text-8xl">
              Hello, Iâ€™m<br /><span className="hero-name">Cherelyn</span><span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{PROFILE.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="hero-button hero-button-primary">Explore experience <ArrowDown className="h-4 w-4" /></a>
              <a href="#contact" className="hero-button hero-button-secondary">Letâ€™s work together</a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{PROFILE.location}</p>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="profile-frame">
            <div className="profile-frame-heading"><span>Professional profile</span><span>Cebu, Philippines</span></div>
            <figure className="profile-figure">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Cherelyn Agawin"
              width={900}
              height={1200}
              loading="eager"
              fetchPriority="high"
              className="profile-photo aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="profile-caption">
              <span>{PROFILE.name}</span>
              <span className="shrink-0 font-medium text-primary">Admin support // Cebu</span>
            </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <a href="#about" className="absolute bottom-6 right-5 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary md:flex">
          Continue <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Snapshot() {
  return (
    <section aria-label="Career snapshot" className="snapshot-band">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {SNAPSHOT.map((item, index) => (
          <div key={item.label} className="stat-tile interactive-detail">
            <span className="snapshot-label">0{index + 1} <span>/</span> SNAPSHOT</span>
            <p className="mt-3 font-display text-2xl font-semibold text-foreground">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="01" eyebrow="A little about me" title="Reliable, organized, people-focused support" />
        <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-10">
          <Reveal>
            <div className="quote-panel interactive-detail">
              <Quote className="h-6 w-6 text-primary/70" />
              <blockquote className="mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl">â€œThere is a powerful driving force inside every human being that, once unleashed, can make any vision, dream, or desire a reality.â€</blockquote>
              <cite className="mt-4 block text-sm not-italic text-muted-foreground">â€” Tony Robbins</cite>
            </div>
          </Reveal>
          <Reveal className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>{PROFILE.summary}</p>
            <p>{PROFILE.approach}</p>
            <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
              {["16 years of professional experience", "Administrative and customer service background", "Lead generation and CRM experience", "Independent and team collaboration"].map((item) => (
                <div key={item} className="proof-point interactive-detail"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-lilac-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="02" eyebrow="My experience" title="Experience built through service and adaptability" intro="My career spans administration, recruitment, lead generation, research, hospitality, and customer service." />
        <div className="mt-12">
          <ol className="experience-index">
            {EXPERIENCE.map((job, index) => {
              const JobIcon = job.icon;
              return (
                <li key={index}>
                  <Reveal>
                    <article className="experience-card interactive-detail">
                      <div className="experience-number">{String(index + 1).padStart(2, "0")}</div>
                      <div className="experience-content">
                        <div className="experience-meta"><span>{job.period}</span><span><MapPin className="h-4 w-4" />{job.location}</span></div>
                        <div className="experience-role">
                          <span className="role-icon"><JobIcon className="h-5 w-5" aria-hidden="true" /></span>
                          <div>
                            <h3 className="font-display text-2xl font-bold text-foreground">{job.role}</h3>
                            <p className="mt-1 font-medium text-primary">{job.company}</p>
                          </div>
                        </div>
                        <ul className="experience-details mt-5">
                          {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                        </ul>
                      </div>
                      <div className="company-mark" aria-hidden="true">{job.mark}</div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="03" eyebrow="Professional Services" title="Practical help where it matters" intro="Flexible support for the daily details that keep businesses, clients, and teams moving." />
        <div className="service-grid mt-12">
          {SERVICES.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <Reveal key={service.title} className="service-tile interactive-detail">
                <div className="service-tile-heading">
                  <span className="service-icon"><ServiceIcon className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="service-tile-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">Core professional areas</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {CORE_AREAS.map((item) => <span key={item} className="skill-chip">{item}</span>)}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">Skills</h3>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {SKILLS.map((item) => <span key={item} className="skill-line"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-mint-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="04" eyebrow="Education" title="Learning through every stage" intro="I have six years of post-secondary education, alongside academic and student leadership achievements." />
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
          <ol className="border-t border-primary/20">
            {EDUCATION.map((item) => (
              <li key={item.credential} className="education-row interactive-detail grid gap-2 border-b border-primary/15 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
                <span className="text-sm text-primary">{item.period}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.credential}</h3>
                  {item.detail ? <p className="mt-1 text-base text-muted-foreground">{item.detail}</p> : null}
                  {item.school ? <p className="mt-2 text-base font-medium text-foreground">{item.school}</p> : null}
                  {item.location ? <p className="mt-1 text-base text-muted-foreground">{item.location}</p> : null}
                </div>
              </li>
            ))}
          </ol>
          <div className="achievement-panel self-start border-t border-primary/20 pt-6">
            <div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-primary" /><h3 className="font-display text-2xl font-semibold text-foreground">Academic achievements</h3></div>
            <ul className="mt-6 space-y-4">
              {ACHIEVEMENTS.map((item) => <li key={item} className="achievement-item flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="strength-section bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Professional strengths</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">A steady, service-minded approach</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">I bring care, initiative, and a practical focus to the people and details behind each task.</p>
          </Reveal>
          <div className="border-t border-border">
            {STRENGTHS.map((strength, index) => {
              return (
                <Reveal key={strength} className="strength-row group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center border-b border-border py-5 sm:grid-cols-[5rem_minmax(0,1fr)_auto]">
                  <span className="strength-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{strength}</h3>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [links, setLinks] = useState<Array<{ name: string; url: string }>>([]);
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  useEffect(() => {
    try {
      const storedLinks = window.localStorage.getItem("portfolio-contact-links");
      if (storedLinks) {
        const parsedLinks: unknown = JSON.parse(storedLinks);
        if (Array.isArray(parsedLinks)) {
          setLinks(parsedLinks.filter((link): link is { name: string; url: string } =>
            typeof link?.name === "string" && typeof link?.url === "string" && isHttpUrl(link.url),
          ));
        }
      }
    } catch {
      setSaveMessage("Saved links could not be loaded.");
    }
  }, []);

  async function saveContactLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = linkName.trim();
    const url = linkUrl.trim();

    if (!name || !isHttpUrl(url)) {
      setSaveMessage("Enter a name and a valid http or https link.");
      return;
    }

    const nextLinks = [...links, { name, url }];
    try {
      await Promise.resolve(window.localStorage.setItem("portfolio-contact-links", JSON.stringify(nextLinks)));
      setLinks(nextLinks);
      setLinkName("");
      setLinkUrl("");
      setSaveMessage("Link saved.");
      setIsAddDialogOpen(false);
    } catch {
      setSaveMessage("This link could not be saved in this browser.");
    }
  }

  async function deleteContactLink(index: number) {
    const nextLinks = links.filter((_, linkIndex) => linkIndex !== index);
    try {
      await Promise.resolve(window.localStorage.setItem("portfolio-contact-links", JSON.stringify(nextLinks)));
      setLinks(nextLinks);
      setSaveMessage("");
    } catch {
      setSaveMessage("This link could not be deleted in this browser.");
    }
  }

  return (
    <section id="contact" className="contact-zone scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="h-px w-12 bg-primary/60" />Administrative Assistant Â· Lapu-Lapu City</div>
          <div className="mt-10 max-w-4xl">
            <h2 className="font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">Letâ€™s Work Together</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">Looking for dependable administrative support, lead generation assistance, customer service, recruitment support, or help keeping business information organized? I bring years of professional experience, attention to detail, and a service-focused approach to supporting teams and clients.</p>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{PROFILE.location}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer" className="email-button"><Mail className="h-5 w-5" />Email me in Gmail</a>
              <a href={MAILTO_URL} className="email-address">{PROFILE.email}</a>
            </div>
            <div className="mt-10 max-w-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
                <h3 className="font-display text-xl font-semibold text-foreground">Additional links that can reach me</h3>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline" size="icon" aria-label="Add an additional link" title="Add an additional link">
                      <Plus aria-hidden="true" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add an additional link</DialogTitle>
                      <DialogDescription>Enter a name and web address for a way to reach me.</DialogDescription>
                    </DialogHeader>
                    <form className="contact-link-form" onSubmit={saveContactLink}>
                      <div className="contact-link-fields contact-link-modal-fields">
                        <label htmlFor="contact-link-name">Link name</label>
                        <input
                          id="contact-link-name"
                          name="linkName"
                          value={linkName}
                          onChange={(event) => setLinkName(event.target.value)}
                          placeholder="LinkedIn"
                          required
                        />
                        <label htmlFor="contact-link-url">Link URL</label>
                        <input
                          id="contact-link-url"
                          name="linkUrl"
                          type="url"
                          value={linkUrl}
                          onChange={(event) => setLinkUrl(event.target.value)}
                          placeholder="https://example.com"
                          required
                        />
                      </div>
                      <p className="contact-link-status" role="status" aria-live="polite">{saveMessage}</p>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save link</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              {links.length > 0 ? (
                <ul className="contact-link-list" aria-label="Additional links that can reach me">
                  {links.map((link, index) => (
                    <li className="contact-link-item" key={`${link.url}-${index}`}>
                      <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button type="button" variant="ghost" size="icon" aria-label={`Options for ${link.name}`} title="Link options">
                            <MoreHorizontal aria-hidden="true" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="text-destructive focus:text-destructive" onSelect={() => void deleteContactLink(index)}>
                            <Trash2 aria-hidden="true" />
                            Delete link
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="contact-link-status" role="status" aria-live="polite">{saveMessage}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-7 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 text-xs sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-8 lg:px-12">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
          <p className="mt-1 text-muted-foreground">{PROFILE.title} Â· {PROFILE.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
          <a href={MAILTO_URL} className="footer-email">{PROFILE.email}</a>
          <span>Â© {new Date().getFullYear()} {PROFILE.name}</span>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Experience />
        <Services />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
