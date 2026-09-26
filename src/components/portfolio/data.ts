export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "experience", label: "Experience", icon: "Briefcase" },
  { id: "services", label: "Services", icon: "Sparkles" },
  { id: "skills", label: "Skills", icon: "Layers" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

export const CORE_AREAS = [
  "Administrative Support",
  "Lead Generation",
  "Customer Service",
  "Scheduling",
  "CRM Management",
  "Research",
  "Data Management",
  "Recruitment",
  "Communication",
];

export const EXPERIENCE = [
  {
    role: "Lead Generation Specialist",
    org: "Alex, United States",
    period: "January 2024 — Present",
    tone: "sky" as const,
    points: [
      "Lead research",
      "Prospect list building",
      "CRM management",
      "Lead tracking",
      "Appointment setting",
      "Performance monitoring",
    ],
  },
  {
    role: "Survey Interviewer",
    org: "Dynata Philippines Inc.",
    period: "March 2026 — Present",
    tone: "sage" as const,
    points: [
      "Professional interviewing",
      "Accurate information gathering",
      "Following structured questionnaires",
      "Respondent communication",
      "Research data collection",
    ],
  },
  {
    role: "Administrative Assistant / Receptionist",
    org: "Boardwalk City Residences Condominium Corp.",
    period: "April 2017 — January 2023",
    tone: "peach" as const,
    points: [
      "Office administration",
      "Records and document management",
      "Scheduling meetings and appointments",
      "Vendor and client communication",
      "Spreadsheet and database management",
      "Phone support",
      "Reception duties",
      "Administrative process improvement",
    ],
  },
  {
    role: "HR Recruiter",
    org: "Cebu Greenmate Manpower Services",
    period: "March 2015 — July 2016",
    tone: "lavender" as const,
    points: [
      "Candidate screening",
      "Applicant interviews",
      "Recruitment coordination",
      "Job advertisements",
      "Reference verification",
      "Interview scheduling",
    ],
  },
];

export const ADDITIONAL_EXPERIENCE = [
  "Housekeeper / Home Tutor",
  "Service Crew Member",
  "Food Service Handler",
];

export const SERVICES = [
  {
    title: "Administrative Support",
    icon: "ClipboardList",
    tone: "sky" as const,
    body: "Assist with daily administrative tasks, organization, documentation, and general operational support.",
  },
  {
    title: "Lead Generation",
    icon: "Target",
    tone: "sage" as const,
    body: "Research potential clients, organize prospect information, maintain lead lists, and support outreach activities.",
  },
  {
    title: "Data Entry & Record Management",
    icon: "Database",
    tone: "peach" as const,
    body: "Maintain accurate spreadsheets, databases, records, and organized digital information.",
  },
  {
    title: "Calendar & Appointment Coordination",
    icon: "CalendarCheck",
    tone: "lavender" as const,
    body: "Assist with scheduling, appointments, meetings, reminders, and follow ups.",
  },
  {
    title: "Customer Support",
    icon: "Headset",
    tone: "sky" as const,
    body: "Provide professional communication and assistance to customers, clients, and business contacts.",
  },
  {
    title: "Recruitment Support",
    icon: "UserSearch",
    tone: "sage" as const,
    body: "Assist with candidate research, screening coordination, interview scheduling, and applicant organization.",
  },
];

export const SKILLS = [
  "Administrative Skills",
  "Customer Service",
  "Attention to Detail",
  "Time Management",
  "Professional Communication",
  "Organization",
  "Multitasking",
  "Research",
  "Data Management",
  "Problem Solving",
  "Adaptability",
  "Ability to Work Independently",
  "Quick Learner",
];

export const EDUCATION = [
  {
    title: "Bachelor of Science in Business Administration",
    detail: "Human Resource Management",
    org: "New Era University",
    period: "2024 — 2025",
  },
  {
    title: "Hotel and Restaurant Management",
    detail: "",
    org: "High Skill Technical Training Center Inc.",
    period: "2017",
  },
  {
    title: "Beauty Care / Cosmetology",
    detail: "Health and Wellness Vocational Training",
    org: "",
    period: "2014",
  },
  {
    title: "High School Diploma",
    detail: "",
    org: "Felipe F. Matbagon Memorial High School",
    period: "2006 — 2010",
  },
];

export const ACHIEVEMENTS = ["Most Outstanding Student", "SSG Treasurer", "3rd Honorable Mention"];

export const STRENGTHS = [
  "Reliable administrative support",
  "Strong attention to detail",
  "Professional customer communication",
  "Ability to manage multiple responsibilities",
  "Independent work capability",
  "Fast learner",
  "Organized record keeping",
  "Process improvement mindset",
  "Consistent follow through",
  "Service oriented attitude",
];
