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

const TEAM_LIST = [
  {
    name: "Joana Merry",
    details:
      "Founder | PhD Candidate in Agentic AI & Human-Centered Intelligence (AGI)",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Darlene Robertson",
    details: "Nurse | PhD in AI & Nursing Informatics",
    linkedIn: "",
  },
  {
    name: "Ralph Edwards",
    details: "Engineering | PhD",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Joana Merry",
    details: "Pharmacy | PhD",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Ralph Edwards",
    details: "BIS & Quality Assurance | Master’s",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Ralph Edwards",
    details: "Nurse | PhD in AI & Nursing Informatics",
    linkedIn: "",
  },
  { name: "Darlene Robertson", details: "Engineering | PhD", linkedIn: "" },
  {
    name: "Ralph Edwards",
    details: "Engineering & Business Economics | Master’s",
    linkedIn: "",
  },
  {
    name: "Ralph Edwards",
    details: "Pharmacy | PhD",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Joana Merry",
    details:
      "Founder | PhD Candidate in Agentic AI & Human-Centered Intelligence (AGI)",
    linkedIn: "https://linkedin.com",
  },
  { name: "Darlene Robertson", details: "Engineering | PhD", linkedIn: "" },
];

const PARTNERSHIP_LIST = [
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
  },
  {
    tier: "strategic",
    domain: "all",
    region: "all",
    status: "active",
    icon: "/icons/linktree-logo.svg",
    name: "Linktree",
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
};
