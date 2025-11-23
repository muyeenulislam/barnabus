import Image from "next/image";
import { Tags } from "@/components/tags";
import Stethoscope from "../../public/icons/stethoscope";
import Chip from "../../public/icons/chip";
import StarAward from "../../public/icons/star-award";
import ArtificalIntelligence from "../../public/icons/artifical-intelligence";
import LinkedinIcon from "../../public/icons/linkedin";
import XIcon from "../../public/icons/x.js";

const ROUTES = [
  { name: "Home", route: "/" },
  { name: "Vision", route: "/vision" },
  { name: "Capabilities", route: "/capabilities" },
  { name: "Solutions", route: "/solutions" },
  { name: "System Protocol", route: "/system-protocol" },
  { name: "Enterprise", route: "/enterprise" },
  { name: "Trust", route: "/trust" },
  { name: "Roadmap", route: "/roadmap" },
  { name: "Participate", route: "/participate" },
  { name: "Team", route: "/team" },
  { name: "Technology", route: "/technology" },
  {
    name: "Business Associate Agreement",
    route: "/business-associate-agreement",
  },
  { name: "Privacy Policy", route: "/privacy-policy" },
  { name: "Terms of Use", route: "/terms-of-use" },
];

const NAV_ITEMS = [
  { title: "Vision", route: "/vision" },
  { title: "Capabilities", route: "/capabilities" },
  { title: "Solutions", route: "/solutions" },
  { title: "System Protocol", route: "/system-protocol" },
  { title: "Enterprise", route: "/enterprise" },
  { title: "Trust", route: "/trust" },
  { title: "Roadmap", route: "/roadmap" },
];

const FOOTER_NAV_ITEMS = [
  ...NAV_ITEMS,
  { title: "Participate", route: "/participate" },
];

export const FOOTER_SOCIAL_LINKS = [
  { Icon: XIcon, link: "https://x.com/BarnabusAI" },
  {
    Icon: LinkedinIcon,
    link: "https://www.linkedin.com/company/barnabus-labs/about/?viewAsMember=true",
  },
];

const FOOTER_OTHER_LINKS = [
  { title: "English", route: "/roadmap" },
  { title: "Privacy", route: "/privacy-policy" },
  { title: "Terms", route: "/terms-of-use" },
  { title: "Sitemap", route: "/sitemaps" },
];
const DEFINE_NEW_CATEGORY_TABLE_CONTENT = [
  {
    left: "Predicts outcomes",
    right: "Predicts, decides, and acts on outcomes",
  },
  {
    left: "Needs retraining to learn",
    right: "Learns in real time, in context",
  },
  {
    left: "Operates in narrow, predefined workflows",
    right: "Adapts to roles, tasks, and change",
  },
  {
    left: "Built for coders, not real users",
    right: "Designed for real-world collaboration with humans",
  },
  {
    left: "Gives one-off answers, not lasting intelligence",
    right: "Acts, adapts, and improves with every use",
  },
];

const HUMAN_UX_ITEMS = [
  {
    title: "Barnabus doesn’t just respond. It comprehends.",
    icon: "/icons/voice.svg",
  },
  {
    title: "It learns your world—not just your inputs.",
    icon: "/icons/keyboard.svg",
  },
  {
    title: "Trust isn’t built on speed. It’s earned through clarity.",
    icon: "/icons/safe.svg",
  },
];

const CLINICAL_FEED = [
  {
    title: "Risk Scoring",
    desc: "RCRI Score Calculated",
    span: 3.2,
    time: "6:17:35 AM",
    icon: "/icons/setting-error.svg",
    status: "Elevated Risk",
    accent: "red",
    bgColor: "bg-Badge-Red-Subtle-Background",
  },
  {
    title: "Medication Review",
    desc: "Clopidogrel detected, recommend hold 5 days pre-op",
    span: null,
    time: "6:17:35 AM",
    icon: "/icons/medicine1.svg",
    status: "Complete",
    accent: "green",
    bgColor: "bg-Badge-Yellow-Subtle-Background",
  },
  {
    title: "Clinical Summary",
    desc: "Drafted clearance note",
    span: null,
    time: "6:17:35 AM",
    icon: "/icons/clinic.svg",
    status: "Complete",
    accent: "green",
    bgColor: "bg-Badge-Teal-Subtle-Background",
  },
];

const CLINICAL_FEED_SUMMARY = [
  {
    title:
      "Diagnostic Context: Accurate diagnostics are essential for identifying the underlying issues affecting the patient's health.",
    desc: "Problem framing",
    status: "Success",
    accent: "green",
    percentage: 87,
    confidence: 77,
  },
  {
    title:
      "Therapeutic Context: The therapeutic approach must align with the patient's preferences and values to ensure adherence and satisfaction.",
    desc: "Problem framing",
    status: "In Progress",
    accent: "yellow",
    percentage: 87,
    confidence: 77,
  },
];

const INTELLIGENCE_KEYPOINTS = [
  {
    title: "Trustworthy, Transparent, Explainable",
    bgColor:
      "radial-gradient(50% 50% at 50% 50%, rgba(216, 255, 90, 0.08) 0%, rgba(216, 255, 90, 0.00) 100%)",
  },
  {
    title: "AI That Connects People + Tools",
    bgColor:
      "radial-gradient(50% 50% at 50% 50%, rgba(235, 165, 55, 0.08) 0%, rgba(235, 165, 55, 0.00) 100%)",
  },
  {
    title: "AI That Remembers, Learns, and Evolves",
    bgColor:
      "radial-gradient(50% 50% at 50% 50%, rgba(247, 27, 255, 0.08) 0%, rgba(247, 27, 255, 0.00) 100%)",
  },
  {
    title: "Memory + Context = True Intelligence",
    bgColor:
      "radial-gradient(50% 50% at 50% 50%, rgba(59, 245, 255, 0.08) 0%, rgba(59, 245, 255, 0.00) 100%)",
  },
];

const PROGRESS_TRACKER_POINTS = [
  {
    title: "Think",
    icon: "/icons/think.png",
    percentage: 70,
    tags: ["Reason", "Analyze", "Plan"],
  },
  {
    title: "Learn",
    icon: "/icons/learn.svg",
    percentage: 41,
    tags: ["Absorb", "Adapt", "Improve"],
  },
  {
    title: "Act",
    icon: "/icons/act.png",
    percentage: 40,
    tags: ["Execute with Context"],
  },
  {
    title: "Evolve",
    icon: "/icons/chart-up.svg",
    percentage: 24,
    tags: ["Self-improve over time"],
  },
  {
    title: "Speak",
    icon: "/icons/chat.svg",
    percentage: 80,
    tags: ["Communicate with Clarity"],
  },
];

const ECO_BREAKDOWN_POINTS = [
  {
    accordionTitle: "System Thinkers",
    accordionSubtitle: "Foundation for reasoning + awareness",
    accordionOpen: [
      {
        title: "Memory Agent",
        desc: "Remembers what matters across time, patient histories, lot yields, prior context ,  so every decision builds on accumulated knowledge.",
      },
      {
        title: "Context Agent",
        desc: "Understands the situation around each request  whether it’s a clinical workflow, fab operation, or business process and adapts decisions accordingly.",
      },
      {
        title: "World Modeler",
        desc: "Simulates cause-and-effect, testing scenarios before actions are taken  from predicting yield impact to modeling patient risk outcomes.",
      },
    ],
  },
  {
    accordionTitle: "Observers & Analysts",
    accordionSubtitle:
      "Agents that sense, monitor, and make sense of the world.",
    accordionOpen: [
      {
        title: "Signal Agent",
        desc: "Watches live streams of data (fab sensors, patient vitals) to detect anomalies in real time.",
      },
      {
        title: "Risk Agent",
        desc: "Calculates probabilities (RCRI, yield failure) and flags potential risks before they escalate.",
      },
      {
        title: "Insight Modeler",
        desc: "Surfaces patterns and trends across history, from lot yield drifts to patient outcome correlations.",
      },
    ],
  },
  {
    accordionTitle: "Communicators",
    accordionSubtitle:
      "Agents that translate intelligence into human language and interactions.",
    accordionOpen: [
      {
        title: "Narrative Agent",
        desc: "Drafts reports and summaries, from clinical clearance notes to executive fab dashboards.",
      },
      {
        title: "Dialogue Agent",
        desc: "Engages in real-time conversations, adapting style for doctors, engineers, or managers.",
      },
      {
        title: "Translator Agent",
        desc: "Bridges between technical data and human-friendly explanations (e.g., “fab yield drift → patient-friendly analogy”).",
      },
    ],
  },
  {
    accordionTitle: "Executors",
    accordionSubtitle:
      "Agents that take direct action and drive workflows forward.",
    accordionOpen: [
      {
        title: "Task Agent",
        desc: "Executes predefined tasks with speed and reliability.",
      },
      {
        title: "Orchestrator Agent",
        desc: "Coordinates multi-step processes across agents and systems, like a conductor for workflows.",
      },
      {
        title: "Optimizer Agent",
        desc: "Chooses the most efficient action path, reducing cost, time, or error.",
      },
    ],
  },
  {
    accordionTitle: "Domain Adaptors",
    accordionSubtitle:
      "Agents specialized for different industries and contexts.",
    accordionOpen: [
      {
        title: "Clinical Agent",
        desc: "Adapts Barnabus reasoning to healthcare workflows, from medication guidance to risk stratification.",
      },
      {
        title: "Semiconductor Agent",
        desc: "Optimizes for fab environments, lot scheduling, wafer yield, anomaly detection.",
      },
      {
        title: "Semiconductor Agent",
        desc: "Adjusts to business needs, integrating with tools (ERP, CRM) and aligning with strategic goals.",
      },
    ],
  },
];

const TAGS_LIST = [
  { name: "PhD", accent: "Plum" },
  { name: "Clinical", accent: "Indigo" },
  { name: "Security", accent: "Green" },
  { name: "Data", accent: "Amber" },
  { name: "Ops", accent: "Teal" },
];
const ROLE_LIST = [
  "All",
  "Product & Eng",
  "Healthcare",
  "Semiconductor",
  "Cybersecurity/Infra",
  "Automation/Robotics",
];
const TEAM_LIST = [
  {
    name: "Emad Masoud",
    headline:
      "Founder | PhD Candidate in Agentic AI & Human-Centered Intelligence (AGI)",
    badges: ["Core Leader"],
    tags: ["PhD", "Clinical", "Security", "Data", "Ops"],
    roles: [
      "Product & Eng",
      "Healthcare",
      "Semiconductor",
      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    featured: true,
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
      {
        name: "Publication 2",
        publishDate: new Date(),
        link: "#",
        tags: ["PhD", "Clinical", "Ops"],
      },
    ],
  },
  {
    name: "Bashar Abuqayas",
    headline:
      "PhD | Clinical Assistant Professor of Internal Medicine / Hospital Medicine",
    tags: ["PhD", "Clinical"],
    roles: ["Healthcare"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Alaa Albashayreh",
    headline: "PhD, MSHI, RN | Health Informatics Scientist",
    tags: ["Security", "Clinical"],
    roles: ["Product & Eng", "Semiconductor"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Ahmed Bediwy",
    headline: "PhD | Data Science & Standards Architect",
    tags: ["Data", "Ops"],
    roles: ["Product & Eng", "Cybersecurity/Infra", "Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Wesam Ismail",
    headline: "PhD | Data Science & Standards Architect",
    tags: ["Clinical"],
    roles: ["Product & Eng", "Healthcare"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Saina Salamipour",
    headline: "MSc | Intelligence Platform Experience & Innovation",
    tags: ["Clinical", "Security"],
    roles: ["Cybersecurity/Infra", "Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMfalser: true,
    advisor: true,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Kholoud Masoud",
    headline: "MSc | Quality Assurance & Business Information Systems",
    tags: ["Data", "Ops"],
    roles: ["Product & Eng"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: false,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Khalid Katranji",
    headline: "Professor | Paediatrician, ICU & Neonatology Specialist",
    tags: ["Clinical"],
    roles: ["Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: false,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Sareh Salamipour",
    headline: "MSc | Business Development and Platform Strategy",
    tags: ["PhD", "Clinical"],
    roles: ["Product & Eng", "Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: false,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Salah Abuhmoud",
    headline: "PhD | Orthodontist / Periodontist",
    tags: ["Clinical"],
    roles: ["Semiconductor", "Cybersecurity/Infra", "Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: false,
    contributor: true,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Jihad Khader",
    headline: "Python Engineer & Machine Learning",
    tags: ["PhD", "Clinical"],
    roles: ["Product & Eng", "Healthcare", "Semiconductor"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: false,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Md Mohiuddin",
    headline: "MSc | Infrastructure Software Engineer",
    tags: ["Data", "Ops"],
    roles: ["Cybersecurity/Infra", "Automation/Robotics"],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Rami Masoud",
    headline: "Finance, Accounting & International Law",
    tags: ["Clinical", "Security"],
    roles: [
      "Product & Eng",
      "Healthcare",

      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Aman Ullah",
    headline: "User Experience & Interaction Design",
    tags: ["Clinical", "Security"],
    roles: [
      "Healthcare",
      "Semiconductor",
      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Hassan Yousafzai",
    headline: "Multi-Agent System Engineer",
    tags: ["Clinical"],
    roles: [
      "Product & Eng",
      "Healthcare",
      "Semiconductor",
      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Zoe Robinson",
    headline:
      "Founder | PhD Candidate in Agentic AI & Human-Centered Intelligence (AGI)",
    tags: ["PhD", "Clinical"],
    roles: [
      "Product & Eng",
      "Healthcare",
      "Semiconductor",
      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
  {
    name: "Benjamin Young",
    headline: "Engineering & Business Economics | Master's",
    tags: ["Data", "Ops"],
    roles: [
      "Product & Eng",
      "Healthcare",
      "Semiconductor",
      "Cybersecurity/Infra",
      "Automation/Robotics",
    ],
    linkedin: "#",
    coreTeam: true,
    teamMember: true,
    advisor: true,
    contributor: false,
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    publications: [
      {
        name: "Publicaion 1",
        publishDate: new Date(),
        link: "#",
        tags: ["Security", "Data"],
      },
    ],
  },
];

const REGION_LIST = [
  { name: "Asia", value: "Asia" },
  { name: "Australia", value: "Australia" },
  { name: "UK", value: "UK" },
];
const DOMAIN_LIST = [
  { name: "MLOps", value: "MLOps", accent: "Plum" },
  { name: "Semiconductor", value: "Semiconductor", accent: "Indigo" },
];
const TIER_LIST = [
  { name: "Strategic", value: "Strategic", accent: "Gold" },
  { name: "Non Strategic", value: "Non Strategic", accent: "Indigo" },
];
const PARTNERSHIP_LIST = [
  {
    tier: "Non Strategic",
    domain: ["Semiconductor", "MLOps"],
    region: "Australia",
    status: "active",
    icon: "/icons/pinterest-logo.svg",
    name: "Pinterest",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor", "MLOps"],
    region: "UK",
    status: "active",
    icon: "/icons/facebook-logo.svg",
    name: "Facebook",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor", "MLOps"],
    region: "Australia",
    status: "active",
    icon: "/icons/microsoft-logo.svg",
    name: "Microsoft",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor", "MLOps"],
    region: "Asia",
    status: "inactive",
    icon: "/icons/kickstarter-logo.svg",
    name: "Kickstarter",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor", "MLOps"],
    region: "Australia",
    status: "active",
    icon: "/icons/verisign-logo.svg",
    name: "Verisign",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor"],
    region: "Australia",
    status: "inactive",
    icon: "/icons/pinterest-logo.svg",
    name: "Pinterest",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor"],
    region: "Australia",
    status: "active",
    icon: "/icons/facebook-logo.svg",
    name: "Facebook",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor"],
    region: "Australia",
    status: "active",
    icon: "/icons/microsoft-logo.svg",
    name: "Microsoft",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor"],
    region: "Australia",
    status: "active",
    icon: "/icons/kickstarter-logo.svg",
    name: "Kickstarter",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
  {
    tier: "Strategic",
    domain: ["Semiconductor"],
    region: "Australia",
    status: "active",
    icon: "/icons/verisign-logo.svg",
    name: "Verisign",
    bio: "Emad Masoud, Founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. He blends technology with human insight, focusing on AI solutions that prioritize user experience and ethics, enhancing human capabilities and collaboration with machines.",
    currentContributions:
      "Emad Masoud, founder of Barnabus, leads in Agentic AI and Human-Centered Intelligence. His work creates ethical AI solutions that enhance user experience and empower users, ensuring harmony between intelligent systems and human capabilities.",
    link: "#",
    headline:
      "A cutting-edge analytics company that specializes in providing real-time insights into customer behavior and digital experiences.",
  },
];

const DOMAIN_MEMORY_HEADER_ITEMS = [
  {
    title: "Patient History",
    titleCls: "text-Content-Warning-Bold",
    desc: "Previous diagnoses, allergies, lab results",
  },
  {
    title: "Medication Records",
    titleCls: "text-Content-Info-Bold",
    desc: "Antiplatelet therapy timing, interactions",
  },
  {
    title: "Risk Scores",
    titleCls: "text-Content-Error-Bold",
    desc: "Past NSQIP, DASI, RCRI outputs",
  },
];

const DOMAIN_MEMORY_CHIPS = [
  {
    icon: "/icons/medicine.svg",
    text: "Your relevant text goes here",
    position: "right-[-9rem] top-[2.2rem]",
    variant: "default",
  },
  {
    icon: "/icons/test-tube.svg",
    text: "Your relevant text goes here",
    position: "right-[-9rem] top-[6.2rem]",
    variant: "default",
  },
  {
    icon: "/icons/medical-file.svg",
    text: "Your relevant...",
    position: "right-[-4.2rem] top-[10.2rem]",
    variant: "default",
  },
  {
    icon: "/icons/doctor.svg",
    text: "Healthcare Specialist",
    position: "right-[-6rem] bottom-[4rem]",
    variant: "accent",
  },
];

const NOT_JUST_AI_LIST = [
  {
    title: "The Problem",
    subtitle:
      "AI today is powerful but shallow. It forgets between sessions, imitates reasoning without true understanding, and delivers generic answers without context or collaboration.",
    bg: "radial-gradient(50% 50% at 50% 50%, rgba(216, 255, 90, 0.08) 0%, rgba(216, 255, 90, 0.00) 100%)",
  },
  {
    title: "The Principles That Guide Us",
    subtitle:
      "We prioritize clarity, trust, and intuition. Memory is key, because systems that remember show care. And true domain understanding is essential for specialized agents.",
    bg: "radial-gradient(50% 50% at 50% 50%, rgba(59, 245, 255, 0.08) 0%, rgba(59, 245, 255, 0.00) 100%)",
  },
  {
    title: "The Future We’re Building",
    subtitle:
      "We’re building a future where teams collaborate with agents that remember history, understand needs, and act with purpose.",
    bg: "radial-gradient(50% 50% at 50% 50%, rgba(216, 255, 90, 0.08) 0%, rgba(216, 255, 90, 0.00) 100%)",
  },
  {
    title: "The Barnabus AGI Promise: Think • Learn • Act • Evolve • Speak",
    subtitle: "",
    list: [
      { point: "Think with Clarity", color: "Brand-Accent" },
      { point: "Learn Continuously", color: "Violet" },
      { point: "Act with Safety", color: "Amber" },
      { point: "Evolve with Feedback", color: "Purple" },
      { point: "Speak with Evidence", color: "Gold" },
    ],
  },
];

const GRADE_INTELLIGENCE = [
  "Domain-specific intelligence, shared global memory",
  "Human-in-the-loop feedback for safe deployment",
  "Multi-agent coordination and observability",
  "Interrupt, rollback, and auditing mechanisms",
];

const KEY_ENTERPRISE_DOMAINS = [
  {
    title: "Healthcare",
    subtitle: "From Data to Understanding",
    icon: "/icons/healthcare.svg",
  },
  {
    title: "Semiconductors",
    subtitle: "Design simulations, anomaly detection",
    icon: "/icons/chip-neon.svg",
  },
  {
    title: "Cybersecurity",
    subtitle: "Threat modeling, behavior prediction",
    icon: "/icons/ai-security.svg",
  },
  {
    title: "Industrial Ops",
    subtitle: "Real-time control, fault recovery",
    icon: "/icons/factory-industrial-robot-arm.svg",
  },
  {
    title: "Simulation",
    subtitle: "Internal world modeling, scenario planning",
    icon: "/icons/cube-scan.svg",
  },
];

const SAFE_BY_DESIGN = [
  {
    title: "Feedback Loops",
    subtitle: "Barnabus learns not just from data, but from decisions.",
  },
  {
    title: "Ethical Layer",
    subtitle: "Track source, purpose, and sensitivity of every data point.",
  },
  {
    title: "Auditable Actions",
    subtitle: "Every decision is traceable — and reversible.",
  },
];
const RUN_ANYWHERE = [
  "/icons/kubernetes-logo.png",
  "/icons/safe-vault-remix.svg",
  "/icons/ibm-quantum-safe-advisor.svg",
  "/icons/azure-logo.svg",
  "/icons/database-encryption.svg",
  "/icons/aws-logo.svg",
  "/icons/nvidia.svg",
  "/icons/gcp.png",
];

const EVOLUTION_PATH = [
  {
    phase: 1,
    key: "autonomous-agents",
    title: "Autonomous Agents",
    summary:
      "Single agents performing isolated tasks (e.g., copilots, assistants).",
    icon: "/icons/robot1.svg",
  },
  {
    phase: 2,
    key: "agentic-collaboration",
    title: "Agentic Collaboration",
    summary: "Multi-agent systems coordinating across domains or workflows.",
    icon: "/icons/organization.svg",
  },
  {
    phase: 3,
    key: "agentic-organization",
    title: "Agentic Organization",
    summary: "Hierarchical + distributed agents mimicking org structures.",
    icon: "/icons/organization-regular.svg",
  },
  {
    phase: 4,
    key: "cognitive-mesh",
    title: "Cognitive Mesh",
    summary: "Agents with memory, reasoning, and shared knowledge graphs.",
    icon: "/icons/brain-cognitive.svg",
  },
  {
    phase: 5,
    key: "general-intelligence",
    title: "General Intelligence",
    summary:
      "Abstract reasoning, situational adaptation, human-AI co-development.",
    icon: "/icons/artificial-intelligence.svg",
  },
  {
    phase: 6,
    key: "alignment-layer",
    title: "Alignment Layer",
    summary:
      "Ethics, control systems, value alignment, human-in-the-loop safeguards.",
    icon: "/icons/lens-alignment.svg",
    steps: [
      {
        code: "6A",
        title: "Moral Core",
        desc: "Embedding values, norms, human behavior simulation.",
        status: "done",
      },
      {
        code: "6B",
        title: "Oversight Framework",
        desc: "Auditing, rollback, agent-level governance (ties into Barnabus’ NAYAR guardian layer).",
        status: "done",
      },
    ],
  },
  {
    phase: 7,
    key: "agi-integration",
    title: "AGI Integration",
    icon: "/icons/agile.svg",
    summary:
      "Seamless human-AI collaboration at system level, co-piloting, decision-making, autonomous discovery.",
  },
];

const VERIFICATION_HELP = [
  {
    title: "Canada",
    subtitle: "Enter your MINC.",
    link: "/participate?country=Canada#complete-free-registration",
    linkText: "Learn more",
  },
  {
    title: "USA",
    subtitle: "Enter your NPI or valid state medical license number.",
    link: "/participate?country=United States of America#complete-free-registration",
    linkText: "Lookup",
  },
];

const INDUSTRIES = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "/icons/healthcare.svg",
    items: [
      {
        title: "Bedside & Point of Care",
        subtitle: "Pre-op clearance, ICU/ER support, real-time alerts",
      },
      {
        title: "Specialty & Department Level",
        subtitle: "Tumor boards, oncology, pathology, ophthalmology modules",
      },
      {
        title: "Hospital Operations",
        subtitle: "Patient flow optimization, scheduling, risk calculators",
      },
      {
        title: "Population Health",
        subtitle:
          "Chronic disease management, preventive screening, epidemiology",
      },
      {
        title: "Global / System-Level",
        subtitle: "Compliance, knowledge federation, cross-border learning",
      },
    ],
  },
  {
    slug: "semiconductors",
    title: "Semiconductors",
    icon: "/icons/semiconductor.svg",
    items: [
      {
        title: "Wafer & Die Intelligence",
        subtitle: "Maps, binning, excursion detection",
      },
      {
        title: "Yield Optimization",
        subtitle: "Root-cause analysis, predictive forecasting",
      },
      {
        title: "Process & Equipment Health",
        subtitle: "Chamber drift, inline defect inspection",
      },
      {
        title: "Test & Probe Data Analytics",
        subtitle: "Wafer sort, multi-site probing, final test correlation",
      },
      {
        title: "Cross-Fab & Design Feedback",
        subtitle: "Design-to-yield loops, global fab learning",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "/icons/manufacturing.svg",
    items: [
      {
        title: "Equipment Intelligence",
        subtitle:
          "Predictive maintenance, drift detection, uptime optimization",
      },
      {
        title: "Defect Detection & Quality",
        subtitle:
          "Inline visual inspection, anomaly detection, scrap reduction",
      },
      {
        title: "Process Optimization",
        subtitle: "Yield improvement, cycle time reduction, energy efficiency",
      },
      {
        title: "Factory Operations",
        subtitle:
          "Scheduling, bottleneck identification, throughput optimization",
      },
      {
        title: "Enterprise Integration",
        subtitle: "Linking production data to supply chain & design feedback",
      },
      {
        title: "Supply Chain",
        subtitle: "Demand forecasting, resilience modeling",
      },
    ],
  },
];

const SYSTEM_STACK = [
  {
    title: "Action Agents",
    tag: "DO → EXECUTE",
    description: "Decision execution.",
  },
  {
    title: "Intelligence Units",
    tag: "THINK",
    description: "Domain-specialized reasoning.",
  },
  {
    title: "Core Intelligence",
    tag: "Barnabus",
    description: "Multi-agent orchestration + conscience.",
  },
  {
    title: "Routing Layer",
    tag: "AXON",
    description: "Directs information flow.",
  },
  {
    title: "Memory Fabric",
    tag: "Remember",
    description: "Persistent knowledge and provenance.",
  },
];

const INTELLIGENCE_INPUTS = [
  {
    key: "text-docs",
    title: "Text & Documents",
    icon: "/icons/text-creation.svg",
    variant: "teal",
    items: [
      {
        label: "Clinical",
        detail: "EHR notes, discharge summaries",
        icon: <Stethoscope variant="teal" />,
      },
      {
        label: "Semiconductor",
        detail: "Yield logs, test reports",
        icon: <Chip variant="teal" />,
      },
      {
        label: "Compliance",
        detail: "HIPAA/SOC-2 checklists, contracts",
        icon: <StarAward variant="teal" />,
      },
      {
        label: "Value",
        detail: "Turns unstructured text into structured reasoning.",
        icon: <ArtificalIntelligence variant="teal" />,
      },
    ],
  },
  {
    key: "images",
    title: "Images",
    icon: "/icons/ai-image.svg",
    variant: "purple",
    items: [
      {
        label: "Clinical",
        detail: "Radiology (X-ray, CT, MRI)",
        icon: <Stethoscope variant="purple" />,
      },
      {
        label: "Semiconductor",
        detail: "Wafer/Die maps, defect maps",
        icon: <Chip variant="purple" />,
      },
      {
        label: "Industrial",
        detail: "Optical inspection photos",
        icon: <StarAward variant="purple" />,
      },
      {
        label: "Value",
        detail: "Converts pixels into measurable signals.",
        icon: <ArtificalIntelligence variant="purple" />,
      },
    ],
  },
  {
    key: "videos-streams",
    title: "Videos & Streams",
    icon: "/icons/video-camera-ai.svg",
    variant: "yellow",
    items: [
      {
        label: "Clinical",
        detail: "Surgical footage, endoscopy",
        icon: <Stethoscope variant="yellow" />,
      },
      {
        label: "Manufacturing",
        detail: "Process video, defect detection",
        icon: <Chip variant="yellow" />,
      },
      {
        label: "Cyber/IoT",
        detail: "Security camera feeds, real-time events",
        icon: <StarAward variant="yellow" />,
      },
      {
        label: "Value",
        detail: "Real-time situational awareness.",
        icon: <ArtificalIntelligence variant="yellow" />,
      },
    ],
  },
  {
    key: "3d-sensor",
    title: "3D & Sensor Data",
    icon: "/icons/3d-view.svg",
    variant: "violet",
    items: [
      {
        label: "Semiconductor",
        detail: "Wafer sort / probe data",
        icon: <Stethoscope variant="violet" />,
      },
      {
        label: "IoT",
        detail: "Vibration, temperature, LiDAR",
        icon: <Chip variant="violet" />,
      },
      {
        label: "Robotics",
        detail: "Automation feedback loops",
        icon: <StarAward variant="violet" />,
      },
      {
        label: "Value",
        detail: "Precision + contextual grounding.",
        icon: <ArtificalIntelligence variant="violet" />,
      },
    ],
  },
];

const ROADMAP_TABLES_CONTENT = [
  {
    title: "Foundational Agents",
    subtitle:
      "Build the base intelligence: memory, knowledge retention, and reuse.",
    icon: "/icons/building-construction.svg",
    rows: [
      {
        id: 1,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/workflow-circle.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="workflow-circle"
            />
            <span>Knowledge</span>
          </div>
        ),
        agent: "Shadow Knowledge",
        problem: "Tacit knowledge is lost or siloed",
        value: "Captures tribal behavior, formalizes SOPs",
        stage: <Tags label="MVP" variant="Lime" size="M" leadingDot={true} />,
      },
      {
        id: 2,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/memory-card.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="memory-card"
            />
            <span>Memory</span>
          </div>
        ),
        agent: "Memory Bridge",
        problem: "Learnings not reused across projects",
        value: "Enables cross-domain transfer learning",
        stage: (
          <Tags
            label="FUTURE"
            variant="Brand-Accent"
            size="M"
            leadingDot={true}
          />
        ),
      },
      {
        id: 3,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/content-paper-edit.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="content-paper-edit"
            />
            <span>Context</span>
          </div>
        ),
        agent: "Thought Trace",
        problem: "No trace of why past decisions were made",
        value: "Stores contextual breadcrumbs for explainability",
        stage: (
          <Tags label="MOONSHOT" variant="Violet" size="M" leadingDot={true} />
        ),
      },
    ],
  },
  {
    title: "Operational Flow Agents",
    subtitle: "Build intelligent action through automation and coordination.",
    icon: "/icons/weather-wind-flow.svg",
    rows: [
      {
        id: 1,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/workflow-circle.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="workflow-circle"
            />
            <span>Flow/Design</span>
          </div>
        ),
        agent: "Shadow Knowledge",
        problem: "Tacit knowledge is lost or siloed",
        value: "Captures tribal behavior, formalizes SOPs",
        stage: (
          <Tags
            label="FUTURE"
            variant="Brand-Accent"
            size="M"
            leadingDot={true}
          />
        ),
      },
      {
        id: 2,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/ibm-event-automation.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="ibm-event-automation"
            />
            <span>Automation</span>
          </div>
        ),
        agent: "Memory Bridge",
        problem: "Learnings not reused across projects",
        value: "Enables cross-domain transfer learning",
        stage: (
          <Tags
            label="FUTURE"
            variant="Brand-Accent"
            size="M"
            leadingDot={true}
          />
        ),
      },
      {
        id: 3,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/navy-federal.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="navy-federal"
            />
            <span>Federation</span>
          </div>
        ),
        agent: "Thought Trace",
        problem: "No trace of why past decisions were made",
        value: "Stores contextual breadcrumbs for explainability",
        stage: <Tags label="MVP" variant="Lime" size="M" leadingDot={true} />,
      },
    ],
  },
  {
    title: "Meta/AI Management Agents",
    subtitle: "Build the agents that manage and improve other agents.",
    icon: "/icons/ai.svg",
    rows: [
      {
        id: 1,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/bug-antivirus-debugging.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="bug-antivirus-debugging"
            />
            <span>Debugging</span>
          </div>
        ),
        agent: "AI-to-AI Debugger",
        problem: "Black-box models can't explain themselves",
        value:
          "Interprets, audits, and corrects AI outputs tribal behavior, formalizes SOPs",
        stage: (
          <Tags
            label="FUTURE"
            variant="Brand-Accent"
            size="M"
            leadingDot={true}
          />
        ),
      },
      {
        id: 2,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/floor-plan.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="floor-plan"
            />
            <span>Planning</span>
          </div>
        ),
        agent: "Meta-Agent Planner",
        problem: "Uncoordinated agent actions",
        value: "Aligns agent actions with system goals",
        stage: (
          <Tags label="MOONSHOT" variant="Violet" size="M" leadingDot={true} />
        ),
      },
    ],
  },
  {
    title: "Human-Centric Agents",
    subtitle: "Build emotional, explainable, and intent-aware AI.",
    icon: "/icons/human-resources-network.svg",
    rows: [
      {
        id: 1,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/emotion-happy.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="emotion-happy"
            />
            <span>Emotion/Intent</span>
          </div>
        ),
        agent: "Intent & Emotion Modeler",
        problem: "Emotion and motivation behind decisions lost",
        value: "Captures affective context to align reasoning",
        stage: <Tags label="MVP" variant="Lime" size="M" leadingDot={true} />,
      },
      {
        id: 2,
        type: (
          <div className="flex items-center gap-2">
            <Image
              src="/icons/mentoring.svg"
              width={36}
              height={36}
              className="p-2 h-[2rem] w-[2rem] rounded-full bg-Surface0"
              alt="mentoring"
            />
            <span>Mentorship</span>
          </div>
        ),
        agent: "Design Mentor",
        problem: "New engineers lack embedded know-how",
        value: "Mentors others based on expert design patterns",
        stage: (
          <Tags
            label="FUTURE"
            variant="Brand-Accent"
            size="M"
            leadingDot={true}
          />
        ),
      },
    ],
  },
];

const TECHNOLOGY_STACK = [
  {
    title: "Architecture & Orchestration",
    subtitle: "The Brain of Barnabus",
    desc: "Barnabus operates through the Axon Routing Layer — the neural bridge that lets agents communicate, collaborate, and reason together. Each workflow is dynamically assembled, combining data access, domain reasoning, and safety in real time.",
    image: "/images/architecture-and-orchestration.webp",
    neonText:
      "Every workflow in Barnabus is built through modular orchestration — connecting reasoning, safety, and domain expertise into one adaptive network.",
    list: [],
  },
  {
    title: "Agent Builder & Deployment Fabric",
    subtitle: "From Idea to Intelligence",
    desc: "With the Barnabus Builder, teams can design, configure, and deploy domain-specific intelligence units in minutes — no coding required. Every agent is built from modular components that blend reasoning, data, and governance into a single, explainable system.",
    image: null,
    neonText: null,
    list: [
      {
        title: "2.1.  Custom Agent Builder",
        subtitle:
          "Select, combine, and shape the intelligence you need. Barnabus Intelligence Units include healthcare reasoning, semiconductor analytics, and causality logic — all integrated with partner LLMs like GPT-4, Llama 2, and Cohere Command.",
        image: "/images/custom-agent-builder.webp",
        neonText:
          "From Healthcare Actions to Semiconductor Analytics — configure any agent through Barnabus’ modular intelligence library.",
      },
      {
        title: "2.2.  Training Data & Context Integration",
        subtitle:
          "Agents don’t just generate results — they understand their environment.\n\nThrough secure CORTEX Memory Fabric and private dataset connections, each agent learns from structured and unstructured data while preserving context, privacy, and compliance.",
        image: "/images/training-data.webp",
        neonText:
          "Securely connect agents to your private datasets and knowledge bases with full governance and contextual alignment.",
      },
      {
        title: "2.3.  Governance & Safety Validation",
        subtitle:
          "Before deployment, every build passes through NAYAR Governance, enforcing frameworks like HIPAA, SOC-2, and internal policy controls.\n\nBarnabus validates every rule, ensuring intelligence never compromises compliance or safety.",
        image: "/images/governance-and-safety-validation.webp",
        neonText:
          "Governance and compliance are integrated at the design level — not added after the fact.",
      },
      {
        title: "2.4.  Deployment & Status",
        subtitle:
          "Deploying an agent is a one-click transition from knowledge to action.\n\nOnce live, the Barnabus Fabric continuously monitors and validates each agent’s performance, security, and compliance state.",
        image: "/images/deployment-and-status.webp",
        neonText:
          "From knowledge to action — agents go live instantly with continuous performance monitoring.",
      },
    ],
  },
  {
    title: "Evaluation & Reliability Dashboard",
    subtitle: "Reliability Built In",
    desc: "Barnabus measures what matters: accuracy, recall, and risk. Each deployment includes a built-in evaluation suite that runs real-world simulations and verifies every decision before release.",
    image: "/images/evaluation-dashboard.webp",
    neonText:
      "Real-time evaluation ensures every decision remains accurate, compliant, and explainable.",
    list: [],
  },
  {
    title: "Traceability & Audit Layer",
    subtitle: "Explainable by Design",
    desc: "Every decision made by Barnabus is fully traceable — from input to outcome. The Trace View allows teams to inspect reasoning paths, validate outputs, and perform complete audits in seconds.",
    image: "/images/traceability-and-audit.webp",
    neonText:
      "Complete decision traceability ensures transparency, compliance, and human oversight at every step.",
    list: [],
  },
  {
    title: "Custom Evaluation Framework",
    subtitle: "Your Rules. Your Metrics. Your Confidence.",
    desc: "Barnabus adapts to your standards. Define your own evaluation metrics — from factual accuracy to ethical compliance — and plug them directly into the feedback loop that drives retraining and system evolution.",
    image: "/images/custom-evaluation-framework.webp",
    neonText:
      "Custom metrics, automated retraining, and human feedback — all built into the evaluation lifecycle.",
    list: [],
  },
  {
    title: "Continuous Learning & Evolution",
    subtitle: "The Living Intelligence Loop",
    desc: "Barnabus never stands still. It learns from every interaction through a structured feedback cycle that combines human review, evaluation pipelines, and adaptive retraining. Over time, it doesn’t just get better — it becomes trustworthy intelligence that evolves with you.",
    image: "/images/continuos-learning-evolution.webp",
    neonText:
      "From oversight to evolution — Barnabus learns, adapts, and improves through continuous feedback and human collaboration.",
    list: [],
  },
];

const BAA = [
  {
    title: "A Living System, Not a Static Platform",
    desc1: `This Business Associate Agreement ("Agreement") is entered into by and between Barnabus Inc., a corporation incorporated in Ontario, Canada under provincial and federal law ("Business Associate" or "Barnabus"), and the applicable healthcare provider, organization, or licensed professional ("Covered Entity").\nThis Agreement is incorporated into and forms part of the Barnabus Terms of Use. It governs how Barnabus handles Protected Health Information ("PHI") and Electronic Protected Health Information ("ePHI") in accordance with:`,
    list1: [
      `The Health Insurance Portability and Accountability Act of 1996 ("HIPAA"), as amended`,
      `The Health Information Technology for Economic and Clinical Health Act ("HITECH"),`,
      `And applicable Canadian privacy laws, including but not limited to PIPEDA, PHIPA (Ontario), and other provincial acts.`,
    ],
  },
  {
    title: "Purpose",
    desc1: `Barnabus provides AI-powered services that may involve creating, receiving, maintaining, or transmitting PHI for clinical decision support, diagnostics, workflow automation, or research. This Agreement ensures compliance with HIPAA and Canadian laws and defines the mutual obligations for safeguarding PHI.`,
  },
  {
    title: "Definitions",
    desc1: `Terms such as "Protected Health Information (PHI)," "Electronic PHI (ePHI)," "Individual," "Subcontractor," "Use," and "Disclosure" have the meanings set forth in 45 C.F.R. §160.103 and applicable Canadian privacy law.`,
  },
  {
    title: "Obligations of Barnabus (Business Associate)",
    desc1: `Barnabus agrees to:`,
    list1: [
      `Use or disclose PHI only as permitted by this Agreement or as Required by Law.`,
      `Implement appropriate administrative, technical, and physical safeguards to protect ePHI in accordance with 45 C.F.R. §164 Subpart C and equivalent Canadian standards.`,
      `Report to Covered Entity any breach, unauthorized use, or security incident involving PHI within 10 business days of discovery.`,
      `Notify Covered Entity of any attempted but unsuccessful security incidents.`,
      `Ensure that subcontractors with PHI access enter into agreements with obligations no less stringent than this Agreement.`,
      `Make PHI available to Covered Entity to meet access or amendment obligations under HIPAA and applicable Canadian regulations.`,
      `Refer any individual requests for PHI access or changes directly to Covered Entity unless otherwise instructed in writing.`,
      `Cooperate with audits by the U.S. Secretary of Health and Human Services or Canadian regulators.`,
    ],
  },
  {
    title: "Permitted Uses and Disclosures",
    desc1: `Barnabus may:`,
    list1: [
      `Use PHI to provide services under its Terms of Use.`,
      `Use PHI for its internal operations, legal compliance, or de-identification (in accordance with HIPAA §164.514 and Canadian anonymization standards).`,
      `Disclose PHI as Required by Law.`,
      `Use PHI for Data Aggregation related to healthcare operations.`,
      `Share PHI with authorized subcontractors under appropriate agreements.`,
    ],
  },
  {
    title: "Additional Canadian-Specific Commitments",
    desc1: `Barnabus agrees to:`,
    list1: [
      `Comply with PIPEDA, PHIPA (Ontario), and other applicable provincial legislation where PHI is collected, used, or disclosed.`,
      `Address any conflicts between HIPAA and Canadian law by applying the most protective standard.`,
      `Disclose PHI as Required by Law.`,
      `Use PHI for Data Aggregation related to healthcare operations.`,
      `Share PHI with authorized subcontractors under appropriate agreements.`,
    ],
  },
  {
    title: "Data Residency and Cross-Border Transfers",
    desc1: `Covered Entity acknowledges that Barnabus may use secure cloud infrastructure located in the United States, Canada, or other approved jurisdictions. All cross-border transfers of PHI shall be encrypted and governed by appropriate contractual and technical safeguards.`,
  },
  {
    title: "Subcontractor Accountability",
    desc1: `Barnabus remains directly responsible for its subcontractors’ handling of PHI and shall require them to:`,
    list1: [
      `Enter written agreements with equivalent privacy and security obligations.`,
      `Notify Barnabus of any security incident or breach related to Covered Entity’s PHI.`,
    ],
  },
  {
    title: "Breach Notification and Incident Handling",
    desc1: ``,
    list1: [
      `Barnabus will notify Covered Entity of any confirmed breach or material incident involving PHI within 10 business days.`,
      `Where full impact assessment is delayed, Barnabus will provide an initial notice and issue updates as more details become available.`,
    ],
  },
  {
    title: "Liability Limitation",
    desc1: `Except in cases of gross negligence or willful misconduct, Barnabus’s total liability under this Agreement is limited to the total amount paid by Covered Entity for services in the twelve (12) months preceding any claim.`,
  },
  {
    title: "Right to Audit",
    desc1: `Covered Entity may, no more than once annually and with reasonable advance notice, request evidence of Barnabus’s HIPAA and Canadian privacy compliance. Barnabus may provide:`,
    list1: [
      `Summaries of third-party security assessments (e.g., SOC 2, ISO 27001),`,
      `Documentation of internal safeguards,`,
      `Annual risk audit summaries, All subject to a mutually agreed non-disclosure agreement or standard confidentiality protections.`,
    ],
  },
  {
    title: "Term & Termination",
    desc1: `Covered Entity shall:`,
    list1: [
      `**Effective Date:** Upon activation of Covered Entity’s Barnabus account.`,
      `**Termination for Cause:** Either party may terminate this Agreement with 30 days’ notice upon a material breach.`,
      `**Post-Termination:**\n• Barnabus will retain only PHI needed for legal or operational purposes.
• Return or securely destroy remaining PHI where feasible.
• Maintain protections and restrict use of retained PHI.`,
    ],
  },
  {
    title: "Miscellaneous",
    list1: [
      `**Governing Law:** Laws of Ontario, Canada, unless overridden by applicable federal privacy laws or HIPAA.`,
      `**Dispute Resolution:** Any dispute shall be resolved via binding arbitration under the rules of JAMS, with hearings held in a mutually agreed location.`,
      `**Amendments:** May be modified to reflect legal changes or regulatory updates.`,
      `**Severability:** If a provision is found unenforceable, the remainder shall still apply.`,
      `**No Third-Party Rights:** This Agreement benefits only Barnabus and the Covered Entity.`,
    ],
  },
  {
    title: "Acceptance",
    desc1: `By registering for and using Barnabus services, the Covered Entity agrees to the terms of this Business Associate Agreement.`,
  },
];

const TERMS = [
  {
    title: "Account Registration",
    desc1: `To access certain Services, you must register and create an account. You agree to provide accurate, current, and complete registration information, including your name, professional credentials, and contact details. You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.`,
  },
  {
    title: "Use of the Services",
    desc1:
      "The Services are intended only for licensed healthcare professionals in Canada, the United States, and other authorized jurisdictions. By using the Services, you represent that you:",
    list1: [
      `Are legally authorized to practice in your jurisdiction;`,
      `Have provided accurate professional credentials;`,
      `Will use the Services in accordance with these Terms and applicable law.`,
    ],
    desc2:
      "The Services do not constitute medical advice. Information provided is for professional support and reference only. Decisions about diagnosis or treatment remain the sole responsibility of the healthcare provider. You are responsible for complying with all applicable laws, including HIPAA, PIPEDA, PHIPA (Ontario), and other relevant federal and provincial regulations.\nIf you are a Covered Entity under HIPAA and use Barnabus to transmit Protected Health Information (PHI), our Business Associate Agreement (BAA) applies and is incorporated herein by reference.",
  },
  {
    title: "Professional Use Only",
    desc1: `Barnabus is not intended for direct use by patients or consumers. If you are a non-professional accessing the Services, you acknowledge that content provided is not a substitute for professional medical advice, diagnosis, or treatment.`,
  },
  {
    title: "Privacy and Security",
    desc1: `Our Privacy Policy outlines how we collect, store, and process personal and non-personal information. By using the Services, you agree to the terms of our Privacy Policy.\nPHI submitted through the Services is protected under HIPAA, PIPEDA, and other applicable regulations. We apply strict security protocols, including encryption, access controls, and audit logging.`,
  },
  {
    title: "Acceptable Use",
    desc1: "You agree not to:",
    list1: [
      `Use the Services for unlawful, unethical, or unauthorized purposes;`,
      `Upload content that includes PHI without appropriate patient consent;`,
      `Violate privacy, copyright, trademark, or other legal rights;`,
      `Attempt to probe, scan, or test system security;`,
      `Use bots, crawlers, or scraping tools to access the Services;`,
      `Reverse-engineer or disassemble any part of the Services.`,
    ],
    desc2:
      "We reserve the right to suspend or terminate accounts found to be in violation of these Terms.",
  },
  {
    title: "User-Generated Content",
    desc1:
      "If you submit content (e.g., case notes, annotations, feedback), you retain ownership but grant Barnabus a royalty-free, worldwide license to use, display, and improve our Services. You are solely responsible for the legality and compliance of any information you submit.",
    desc2:
      "Do not upload PHI or personally identifiable information without obtaining all legally required patient consents.",
  },
  {
    title: "Data Collection and Use",
    desc1:
      "Barnabus may collect de-identified usage data, interaction logs, and prompt inputs for the purpose of improving system performance, safety, and AI models. This data may be shared or licensed in anonymized form but will never include identifiable personal or patient data unless expressly permitted by law or consent.",
  },
  {
    title: "Third-Party Content and Integrations",
    desc1:
      "Barnabus may provide access to third-party tools, content, or APIs. We do not endorse, and are not responsible for, the accuracy, availability, or security of any third-party resources.",
  },
  {
    title: "Service Availability and Modifications",
    desc1:
      "We may modify, suspend, or discontinue parts of the Services at any time. We are not liable for loss of access, data, or interruptions caused by such changes.",
  },
  {
    title: "Intellectual Property",
    desc1:
      "All content, trademarks, designs, and software associated with Barnabus are owned by Barnabus Inc. or its licensors. You are granted a limited, non-transferable license to use the Services for personal and professional healthcare use. Any commercial use, distribution, or reproduction is strictly prohibited.",
  },
  {
    title: "Limitation of Liability",
    desc1:
      "To the maximum extent permitted by law, Barnabus and its officers, directors, employees, contractors, and partners are not liable for indirect, incidental, or consequential damages arising from use of the Services.",
    desc2: "Barnabus’s total liability for any claim will not exceed CAD $100.",
  },
  {
    title: "Indemnity",
    desc1:
      "You agree to indemnify and hold harmless Barnabus and its affiliates against claims arising from your use of the Services, your violation of these Terms, or any unauthorized disclosure of patient or third-party data.",
  },
  {
    title: "Governing Law",
    desc1:
      "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada. Any disputes shall be resolved under binding arbitration in Ontario.",
  },
  {
    title: "Termination",
    desc1:
      "We reserve the right to suspend or terminate your access at our discretion, particularly in cases of fraud, misuse, or breach of these Terms.",
  },
  {
    title: "Feedback",
    desc1:
      "Any suggestions or feedback submitted become the property of Barnabus Inc. and may be used to improve the Services without obligation or compensation.",
  },
  {
    title: "Changes to These Terms",
    desc1:
      "We may update these Terms at any time. Changes will be posted on our website. Continued use of the Services after changes means you accept the updated Terms.",
  },
  {
    title: "Contact Us",
    desc1: "For questions, legal notices, or support:",
    list1: [
      `**Email:** #support@barnabus.ai#`,
      `**Mailing Address:** Barnabus Inc., [Insert Canadian office address here]`,
    ],
  },
];

const PRIVACY = [
  {
    title: "Scope and Applicability",
    desc1:
      "This Privacy Policy applies to all users of Barnabus Services, including healthcare professionals, researchers, and invited collaborators. If you are a patient, please note that Barnabus is not intended for direct consumer use. Any patient information processed is done solely on behalf of authorized healthcare professionals using our Services.",
  },
  {
    title: "Use of the Services",
    desc1:
      "The Services are intended only for licensed healthcare professionals in Canada, the United States, and other authorized jurisdictions. By using the Services, you represent that you:",
    list1: [
      `Are legally authorized to practice in your jurisdiction;`,
      `Have provided accurate professional credentials;`,
      `Will use the Services in accordance with these Terms and applicable law.`,
    ],
    desc2:
      "The Services do not constitute medical advice. Information provided is for professional support and reference only. Decisions about diagnosis or treatment remain the sole responsibility of the healthcare provider. You are responsible for complying with all applicable laws, including HIPAA, PIPEDA, PHIPA (Ontario), and other relevant federal and provincial regulations.\nIf you are a Covered Entity under HIPAA and use Barnabus to transmit Protected Health Information (PHI), our Business Associate Agreement (BAA) applies and is incorporated herein by reference.",
  },
  {
    title: "Professional Use Only",
    desc1:
      "Barnabus is not intended for direct use by patients or consumers. If you are a non-professional accessing the Services, you acknowledge that content provided is not a substitute for professional medical advice, diagnosis, or treatment.",
  },
  {
    title: "Privacy and Security",
    desc1:
      "Our Privacy Policy outlines how we collect, store, and process personal and non-personal information. By using the Services, you agree to the terms of our Privacy Policy.\nPHI submitted through the Services is protected under HIPAA, PIPEDA, and other applicable regulations. We apply strict security protocols, including encryption, access controls, and audit logging.",
  },
  {
    title: "Acceptable Use",
    desc1: "You agree not to:",
    list1: [
      `Use the Services for unlawful, unethical, or unauthorized purposes;`,
      `Upload content that includes PHI without appropriate patient consent;`,
      `Violate privacy, copyright, trademark, or other legal rights;`,
      `Attempt to probe, scan, or test system security;`,
      `Use bots, crawlers, or scraping tools to access the Services;`,
      `Reverse-engineer or disassemble any part of the Services.`,
    ],
    desc2:
      "We reserve the right to suspend or terminate accounts found to be in violation of these Terms.",
  },
  {
    title: "User-Generated Content",
    desc1:
      "If you submit content (e.g., case notes, annotations, feedback), you retain ownership but grant Barnabus a royalty-free, worldwide license to use, display, and improve our Services. You are solely responsible for the legality and compliance of any information you submit.",
    desc2:
      "Do not upload PHI or personally identifiable information without obtaining all legally required patient consents.",
  },
  {
    title: "Data Collection and Use",
    desc1:
      "Barnabus may collect de-identified usage data, interaction logs, and prompt inputs for the purpose of improving system performance, safety, and AI models. This data may be shared or licensed in anonymized form but will never include identifiable personal or patient data unless expressly permitted by law or consent.",
  },
  {
    title: "Third-Party Content and Integrations",
    desc1:
      "Barnabus may provide access to third-party tools, content, or APIs. We do not endorse, and are not responsible for, the accuracy, availability, or security of any third-party resources.",
  },
  {
    title: "Service Availability and Modifications",
    desc1:
      "We may modify, suspend, or discontinue parts of the Services at any time. We are not liable for loss of access, data, or interruptions caused by such changes..",
  },
  {
    title: "Intellectual Property",
    desc1:
      "All content, trademarks, designs, and software associated with Barnabus are owned by Barnabus Inc. or its licensors. You are granted a limited, non-transferable license to use the Services for personal and professional healthcare use. Any commercial use, distribution, or reproduction is strictly prohibited.",
  },
  {
    title: "Limitation of Liability",
    desc1:
      "To the maximum extent permitted by law, Barnabus and its officers, directors, employees, contractors, and partners are not liable for indirect, incidental, or consequential damages arising from use of the Services.",
    desc2: "Barnabus’s total liability for any claim will not exceed CAD $100.",
  },
  {
    title: "Indemnity",
    desc1:
      "You agree to indemnify and hold harmless Barnabus and its affiliates against claims arising from your use of the Services, your violation of these Terms, or any unauthorized disclosure of patient or third-party data.",
  },
  {
    title: "Governing Law",
    desc1:
      "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada. Any disputes shall be resolved under binding arbitration in Ontario.",
  },
  {
    title: "Termination",
    desc1:
      "We reserve the right to suspend or terminate your access at our discretion, particularly in cases of fraud, misuse, or breach of these Terms.",
  },
  {
    title: "Feedback",
    desc1:
      "Any suggestions or feedback submitted become the property of Barnabus Inc. and may be used to improve the Services without obligation or compensation.",
  },
  {
    title: "Changes to These Terms",
    desc1:
      "We may update these Terms at any time. Changes will be posted on our website. Continued use of the Services after changes means you accept the updated Terms.",
  },
  {
    title: "Contact Us",
    desc1: "For questions, legal notices, or support:",
    list1: [
      `**Email:** #support@barnabus.ai#`,
      `**Mailing Address:** Barnabus Inc., [Insert Canadian office address here]`,
    ],
  },
];

const AGI_COMPASS = [
  {
    title: "A System That Knows Why",
    subtitle: "From Data to Understanding",
    list: [
      {
        listTitle: "Persistent Memory Across Agents",
        listSubtitle: "What it knows isn’t lost between tasks.",
      },
      {
        listTitle: "Human Feedback Loops",
        listSubtitle: "When people correct the system, it learns why.",
      },
      {
        listTitle: "Contextual Awareness",
        listSubtitle: "Actions are shaped by time, domain, and consequence.",
      },
    ],
  },
  {
    title: "Giving Intelligence a Soul",
    subtitle: "Why Barnabus Exists",
    list: [
      {
        listTitle: "Our Mission",
        listSubtitle:
          "To build aligned, evolving intelligence that supports and scales human judgment.",
      },
      {
        listTitle: "Ethics-First Framework",
        listSubtitle: "Transparency, traceability, value-alignment.",
      },
      {
        listTitle: "A Compass, Not Just a Map",
        listSubtitle: "Barnabus doesn’t just act — it reflects on why it acts.",
      },
    ],
  },
];

const CAPABILITIES_POINTS = [
  {
    icons: "/icons/barnabus-logo-neon.svg",
    title: "Core Intelligence (Barnabus)",
    subtitle: `The Brain, Alignment Hub for All Reasoning.\n\nAt the center is Barnabus Core, where knowledge, memory, and routing converge into aligned decisions. It orchestrates complexity into clarity, scaling across industries, missions, and nations.`,
    neonText: "The reasoning engine of living intelligence.",
  },
  {
    icons: "/icons/navigator.svg",
    title: "Routing Layer (AXON)",
    subtitle: `The Nervous System,  Intent Flows Across the Ecosystem.\n\nAXON is the neural highway that routes signals across agents and domains. It ensures decisions never stall in silos, but flow seamlessly — from ICUs to semiconductor fabs to defense command.`,
    neonText: "The connective tissue of modular intelligence.",
  },
  {
    icons: "/icons/guardian-layer.svg",
    title: "Guardian Layer (NAYAR)",
    subtitle: `The Conscience, Sovereignty, Trust, and Compliance by Design.\n\nNAYAR is Barnabus’ built-in conscience. Every decision is auditable, explainable, and governed by human oversight. For governments, it means sovereignty. For enterprises, it means compliance. For humanity, it means trust.`,
    neonText: "Ethics not as policy, but as architecture.",
  },
  {
    icons: "/icons/touch-interaction.svg",
    title: "Action Agents",
    subtitle: `The Hands, From Intelligence to Execution.\n\nBarnabus doesn’t just recommend. It acts. From reducing surgical delays to optimizing global supply chains, Action Agents deliver outcomes that matter. Every action is traceable, accountable, and aligned with mission goals.`,
    neonText: "The execution layer of trusted intelligence.",
  },
  {
    icons: "/icons/cells.svg",
    title: "Modular Intelligence Units",
    subtitle: `The Minds Within the Mind, Specialized Reasoning at Scale.\n\nAround the Core orbit specialized intelligence units, empathy, ethics, simulation, planning, cause-effect reasoning. They adapt to new domains without starting from zero.`,
    neonText: "A constellation of minds, growing toward AGI.",
  },
  {
    icons: "/icons/usb-memory.svg",
    title: "Memory & Data Fabric",
    subtitle: `The Living Memory, Knowledge That Compounds, Never Resets.\n\nUnlike today’s AI that forgets with each reset, Barnabus remembers. Short-term recall, long-term semantic memory, and domain-specific ontologies build a compounding intelligence fabric.`,
    neonText:
      "The living archive of intelligence, growing stronger with every cycle.",
  },
];
const SOLUTIONS_POINTS = [
  {
    icons: "/icons/stethoscope.svg",
    title: "Healthcare & Clinical AI",
    subtitle: "Reimagining clinical decision support.",
    desc: `Barnabus brings structure and safety to clinical data. Its healthcare agents assist physicians and hospital systems in automating pre-operative clearance, risk prediction, medication reconciliation, and multi-specialty case reviews.\n\nEach solution operates under strict compliance (HIPAA, SOC-2) and provides full reasoning traceability — turning fragmented EHR data into validated clinical insights.`,
    useCases: [
      "Pre-operative risk assessment and clearance workflows",
      "Tumor board reasoning and report generation",
      "Medication reconciliation and interaction safety",
      "Patient-centric insight summarization",
      "Automated documentation with audit trail",
    ],
  },
  {
    icons: "/icons/chip-neon.svg",
    title: "Semiconductor & Manufacturing Intelligence",
    subtitle: "Driving yield and reliability through agentic analytics.",
    desc: `For fabs and manufacturing environments, Barnabus transforms complex production data into actionable intelligence.\n\nIts specialized agents (like Vorin and E142) perform deep wafer analysis, pattern recognition, and anomaly detection, helping engineers make faster and more accurate yield decisions while keeping data local and secure.`,
    useCases: [
      "Automated wafer map and defect analysis",
      "Yield prediction and anomaly correlation",
      "Process control and optimization",
      "AI-assisted troubleshooting and digital twin insights",
      "Secure cross-fab data orchestration",
    ],
  },
  {
    icons: "/icons/permanent-job.svg",
    title: "Enterprise Intelligence & Automation",
    subtitle: "Secure intelligence for organizations that demand precision.",
    desc: `Barnabus augments decision-making within enterprises by combining structured databases with unstructured knowledge.\n\nFrom financial systems to logistics and compliance automation, its multi-agent architecture provides clarity, context, and control, enabling smarter decisions without compromising governance.`,
    useCases: [
      "AI-powered insight extraction from documents",
      "Fraud and anomaly detection for finance teams",
      "Policy-aware automation for compliance operations",
      "Secure retrieval-augmented generation (RAG) within private data",
      "Decision orchestration across teams and workflows",
    ],
  },
  {
    icons: "/icons/test-tube1.svg",
    title: "Research, Education & Innovation",
    subtitle: "Accelerating scientific and academic discovery.",
    desc: `Barnabus enables researchers, universities, and think-tanks to build their own AI reasoning environments, combining literature, datasets, and experimental data into one intelligent ecosystem.\n\nAgents reason over context, cite evidence, and maintain transparency in every hypothesis, enabling safe and auditable innovation.`,
    useCases: [
      "Automated literature review and summarization",
      "Multi-source data correlation and hypothesis testing",
      "Scientific writing with verifiable references",
      "Data curation and semantic search for academic datasets",
    ],
  },
  {
    icons: "/icons/legal-hammer.svg",
    title: "Government & Public Sector",
    subtitle: "Responsible AI for regulated environments.",
    desc: `Barnabus delivers auditable, privacy-preserving AI infrastructure for governments and public institutions.\n\nIts architecture ensures sensitive information never leaves approved environments, while decision agents operate under strict policy and traceability controls.`,
    useCases: [
      "Citizen service automation with data privacy compliance",
      "Policy analysis and evidence-based decision systems",
      "Secure AI sandboxes for classified or regulated data",
      "Multilingual document intelligence and translation",
    ],
  },
  {
    icons: "/icons/3d-scale.svg",
    title: "Configurable, Scalable, and Evolving",
    subtitle:
      "Barnabus is not locked to one domain or workflow; it’s a foundation that can expand with you.",
    desc: `Through modular agents, secure APIs, and adaptive orchestration layers, it can be configured for new challenges, extended to new data sources, and tuned for new levels of reasoning, all without rebuilding from scratch.\n\nOne ecosystem. Infinite configurations. From hospitals to fabs, from enterprises to labs, Barnabus adapts to you.`,
    closingStatement: `Barnabus was not built to automate tasks, it was built to earn trust.\n\nAcross every domain, its agents operate with precision, transparency, and compliance — transforming AI from a black box into a reliable, human-aligned partner for real-world decision-making.`,
  },
];

const CORE_INTELLIGENCE = [
  {
    sectionTitle: "Core Intelligence",
    items: [
      {
        title: "BARNABUS",
        subTitle:
          "The central reasoning unit,  where decisions are made, logic is orchestrated, and systems align.",
        color: "green",
      },
      {
        title: "AXON",
        subTitle:
          "Routes intent across modular agents and links thought to execution.",
        color: "violet",
      },
      {
        title: "NAYAR",
        subTitle:
          "The system’s conscience,  ethical guardian, override logic, and escalation handler.",
        color: "yellow",
      },
    ],
  },
];
const AGENT_STACK_DETAILS = [
  {
    sectionTitle: "Action Agents",
    items: [
      {
        title: "YARM",
        subTitle:
          "Executes clinical actions and health insights with embedded medical ethics.",
      },
      {
        title: "VORIN",
        subTitle:
          "Analyzes semiconductor data and orchestrates yield-based decisions.",
      },
      {
        title: "FARO",
        subTitle:
          "Scans, defends, and adapts in cybersecurity environments in real-time.",
      },
      {
        title: "KRON",
        subTitle:
          "Manages real-time controls across industrial and manufacturing systems.",
      },
      {
        title: "DEKA",
        subTitle:
          "Simulates complex scenarios for training, planning, and foresight.",
      },
      {
        title: "SYNRIX",
        subTitle:
          "Maintains system integrity through diagnostics, repair, and resilience checks.",
      },
      {
        title: "ZARIF",
        subTitle:
          "Provides traceable forensic audit trails across all agent decisions.",
      },
      {
        title: "OBRAH",
        subTitle:
          "Optimizes logistics and resource routing in time sensitive environments.",
      },
    ],
  },
  {
    sectionTitle: "Modular Intelligence Units",
    items: [
      {
        title: "NIVARA",
        subTitle:
          "Understands, explains, and communicates decisions across human and machine interfaces.",
      },
      {
        title: "AQIRA",
        subTitle:
          "Aligns agent actions with ethical values and domain-specific norms.",
      },
      {
        title: "EDIOS",
        subTitle:
          "Builds models of cause, effect, and abstract world reasoning.",
      },
      {
        title: "ZINDRA",
        subTitle:
          "Monitors system reflection — adapting protocols based on past learning.",
      },
      {
        title: "MYRA",
        subTitle:
          "Models human empathy, intention, and social nuance in interactions.",
      },
      {
        title: "VELON",
        subTitle:
          "Breaks down goals into structured, executable plans for other agents.",
      },
      {
        title: "ORBITA",
        subTitle:
          "Processes visual inputs and converts spatial context into actionable insight.",
      },
      {
        title: "KANUN",
        subTitle:
          "Applies legal frameworks and compliance rules to system decisions.",
      },
    ],
  },
  {
    sectionTitle: "Memory & Fabric Agents",
    items: [
      {
        title: "CORTEX",
        subTitle: "Short-term, volatile memory tuned to live agent operations.",
      },
      {
        title: "SYNTRIX",
        subTitle: "Long-term, multi-agent memory with shared semantic context.",
      },
      {
        title: "ETHRA",
        subTitle:
          "Medical memory engine with diagnostic pathways and knowledge graphs.",
      },
      {
        title: "LUMINA",
        subTitle:
          "Curates and maintains the Barnabus ontology, the semantic brain of the system.",
      },
      {
        title: "ZARIF",
        subTitle:
          "Archives decision trails for transparency and post-analysis.",
      },
    ],
  },
];

const LEARNING_IN_MOTION = [
  {
    title: "Track not just what a user does — but why they do it",
    icon: "/icons/ai-governance-tracked.svg",
  },
  {
    title: "Override mechanisms treated as training events",
    icon: "/icons/cics-sit-overrides.svg",
  },
  { title: "Feedback loop embedded in protocol flow", icon: "/icons/loop.svg" },
];

const TRUST_BY_DESIGN = [
  {
    title: "Orbit Layer",
    subtitle: "Human-in-the-loop review and continuous accountability feedback",
    icon: "/icons/orbit.svg",
  },
  {
    title: "NAYAR Governance",
    subtitle: "Ethical alignment, compliance validation, and risk oversight",
    icon: "/icons/ai-governance-tracked.svg",
  },
  {
    title: "Axon Core",
    subtitle: "Reasoning with transparent logic graphs and explainable paths",
    icon: "/icons/orbital.svg",
  },
  {
    title: "Memory Fabric",
    subtitle:
      "Temporal recall, version control, and audit trails for every decision",
    icon: "/icons/design-layer.svg",
  },
  {
    title: "Fuel Layer",
    subtitle: "Data lineage, encryption, and provenance validation",
    icon: "/icons/layer-diagonal-sparkle.svg",
  },
];

const TRUST_FRAMEWORK_PILLARS = [
  {
    title: "Explainability",
    subtitle:
      "Every output includes a visible reasoning trace — data sources, contributing agents, and decision logic.",
    icon: "/icons/trace-eye.svg",
  },
  {
    title: "Governance & Oversight",
    subtitle:
      "Built-in multi-tier audit systems ensure all reasoning conforms to institutional and ethical boundaries.",
    icon: "/icons/building-government-search.svg",
  },
  {
    title: "Privacy & Security",
    subtitle:
      "Enforced under HIPAA, SOC-2, GDPR, PHIPA, and ISO 27001. Data remains encrypted in motion and at rest.",
    icon: "/icons/personal-privacy.svg",
  },
  {
    title: "Ethical Intelligence",
    subtitle:
      "The NAYAR layer prevents bias, enforces boundaries, and aligns agentic behavior with human-defined ethics.",
    icon: "/icons/artificial-intelligence1.svg",
  },
  {
    title: "Compliance-Ready",
    subtitle:
      "Integrated validation for CAP/CLIA (labs), ABIM (clinicians), and ISO (enterprises). Continuous audit synchronization.",
    icon: "/icons/ibm-cloud-security.svg",
  },
  {
    title: "Traceability & Accountability",
    subtitle:
      "Every model, dataset, and decision is versioned, timestamped, and reversible through our Explainability Console.",
    icon: "/icons/inprivate-account.svg",
  },
];
const DEMAND_PROOF = [
  {
    title: "Clinicians",
    subtitle:
      "Verified medical provenance, explainable recommendations, and override control.",
    icon: "/icons/user-nurse.svg",
  },
  {
    title: "Researchers",
    subtitle:
      "Full lineage tracking for datasets, features, and model versions.",
    icon: "/icons/virus-lab-research-microscope.svg",
  },
  {
    title: "Enterprises",
    subtitle:
      "SOC-2, HIPAA, and ISO-27001 frameworks mapped directly into the NAYAR governance fabric.",
    icon: "/icons/enterprise.svg",
  },
  {
    title: "Regulators",
    subtitle:
      "Transparent audit logs, policy mappings, and continuous monitoring of decision pipelines.",
    icon: "/icons/law.svg",
  },
  {
    title: "Partners & Competitors",
    subtitle:
      "Architectural integrity that cannot be imitated — trust enforced at the system level, not the marketing layer.",
    icon: "/icons/handshake.svg",
  },
];

const COMPLIANCE_READY = [
  "HIPAA",
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "PHIPA",
  "CAP/CLIA",
];

const SECURITY_PRACTICES = [
  "End-to-end encryption (AES-256, TLS 1.3)",
  "Role-based secrets management (Vault integrated)",
  "Immutable audit trails for all agentic actions",
  "Multi-tenant isolation with dedicated compliance sandboxes",
  "Zero-trust network architecture",
  "Fine-grained ABAC/ReBAC access control",
  "Continuous vulnerability scanning and threat modeling",
];

const OCCUPATIONS = [
  "Physician",
  "Nurse Practitioner",
  "Physician Assistant",
  "Medical Student",
  "NP Student",
  "PA Student",
  "Registered Nurse",
  "Pharmacist",
  "Dentist",
  "Other",
];

const REFERRAL_SOURCES = [
  "From a Physician Friend / Colleague",
  "From a Non-Physician Friend / Colleague",
  "Employer",
  "Professional Organization",
  "Google / Search Engine",
  "Email",
  "Facebook",
  "Instagram",
  "TikTok",
  "Conference",
  "Other",
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo (the Democratic Republic of the)",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands [Malvinas]",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States Minor Outlying Islands",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

export {
  ROUTES,
  NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_OTHER_LINKS,
  DEFINE_NEW_CATEGORY_TABLE_CONTENT,
  HUMAN_UX_ITEMS,
  CLINICAL_FEED,
  CLINICAL_FEED_SUMMARY,
  INTELLIGENCE_KEYPOINTS,
  PROGRESS_TRACKER_POINTS,
  ECO_BREAKDOWN_POINTS,
  TEAM_LIST,
  PARTNERSHIP_LIST,
  DOMAIN_MEMORY_HEADER_ITEMS,
  DOMAIN_MEMORY_CHIPS,
  NOT_JUST_AI_LIST,
  TAGS_LIST,
  ROLE_LIST,
  REGION_LIST,
  DOMAIN_LIST,
  TIER_LIST,
  GRADE_INTELLIGENCE,
  KEY_ENTERPRISE_DOMAINS,
  SAFE_BY_DESIGN,
  RUN_ANYWHERE,
  EVOLUTION_PATH,
  VERIFICATION_HELP,
  INDUSTRIES,
  SYSTEM_STACK,
  INTELLIGENCE_INPUTS,
  ROADMAP_TABLES_CONTENT,
  TECHNOLOGY_STACK,
  BAA,
  PRIVACY,
  TERMS,
  AGI_COMPASS,
  CAPABILITIES_POINTS,
  SOLUTIONS_POINTS,
  CORE_INTELLIGENCE,
  AGENT_STACK_DETAILS,
  LEARNING_IN_MOTION,
  TRUST_BY_DESIGN,
  TRUST_FRAMEWORK_PILLARS,
  DEMAND_PROOF,
  COMPLIANCE_READY,
  SECURITY_PRACTICES,
  OCCUPATIONS,
  REFERRAL_SOURCES,
  COUNTRIES,
};
