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
    icon: "/icons/think.svg",
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
    icon: "/icons/act.svg",
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
  "/icons/facebook.svg",
  "/icons/kubernetes-logo.svg",
  "/icons/safe-vault-remix.svg",
  "/icons/ibm-quantum-safe-advisor.svg",
  "/icons/ibm-quantum-safe-advisor.svg",
  "/icons/azure-logo.svg",
  "/icons/database-encryption.svg",
  "/icons/aws-logo.svg",
  "/icons/nvidia.svg",
  "/icons/gcp.svg",
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
    items: [
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

export {
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
};
