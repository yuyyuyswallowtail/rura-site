import { IMG } from "./images";
import type {
  JobOpening,
  Partner,
  PressArticle,
  TeamMember,
  TechnologyStep,
} from "./types";

export const processSteps: TechnologyStep[] = [
  {
    id: "electrify",
    number: "01",
    title: "Electrify",
    text: "Renewable electricity drives an electrochemical cell that splits water into acid and base streams, replacing fuel-fired heat for this step.",
    image: IMG.power,
  },
  {
    id: "separate",
    number: "02",
    title: "Separate",
    text: "The acid dissolves calcium out of limestone, releasing a pure CO₂ stream at the source instead of inside mixed flue gas.",
    image: IMG.lab3,
  },
  {
    id: "recover",
    number: "03",
    title: "Recover",
    text: "Calcium is precipitated into a reactive intermediate while the CO₂ is captured for storage or use.",
    image: IMG.lab2,
  },
  {
    id: "integrate",
    number: "04",
    title: "Integrate",
    text: "The intermediate feeds the existing kiln line through a defined interface, so current plant equipment keeps working.",
    image: IMG.plant,
  },
];

export const features = [
  {
    label: "Retrofit",
    title: "Built for existing systems",
    text: "RURA modules connect to the kiln lines, feed systems and controls plants already run. Nothing upstream or downstream has to be rebuilt.",
    image: IMG.factory,
  },
  {
    label: "Energy",
    title: "Lower energy intensity",
    text: "Moving chemistry from heat to electricity lets each step run closer to its thermodynamic minimum and pair with renewable supply.",
    image: IMG.solar,
  },
  {
    label: "Scale",
    title: "Designed for scale",
    text: "A modular stack design means capacity grows by adding units, from laboratory rig to pilot to full production line.",
    image: IMG.crane,
  },
];

export const partners: Partner[] = [
  { name: "NORTHLINE" },
  { name: "AXIS INDUSTRIAL" },
  { name: "FORGE LABS" },
  { name: "ELEMENT" },
  { name: "NOVA ENERGY" },
  { name: "FIELDWORK" },
  { name: "VECTOR MATERIALS" },
];

export const team: (TeamMember & { bio: string })[] = [
  {
    name: "Maya Chen",
    role: "Co-Founder & CEO",
    bio: "Leads strategy and industrial partnerships.",
    image: IMG.portrait1,
  },
  {
    name: "Daniel Ortiz",
    role: "Co-Founder & CTO",
    bio: "Leads electrochemical research and process design.",
    image: IMG.portrait2,
  },
  {
    name: "Elena Park",
    role: "VP Engineering",
    bio: "Leads pilot engineering and plant integration.",
    image: IMG.portrait3,
  },
  {
    name: "Marcus Reid",
    role: "Industrial Strategy",
    bio: "Leads deployment planning with producers.",
    image: IMG.portrait4,
  },
];

export const jobs: JobOpening[] = [
  {
    title: "Senior Electrochemical Engineer",
    location: "Calgary",
    type: "Full-time",
    description:
      "Design and validate electrochemical stacks for continuous acid and base production.",
  },
  {
    title: "Process Systems Engineer",
    location: "Calgary / Remote",
    type: "Full-time",
    description:
      "Model and integrate RURA modules with existing kiln lines and plant controls.",
  },
  {
    title: "Mechanical Design Engineer",
    location: "Jakarta",
    type: "Full-time",
    description:
      "Develop pilot-scale hardware, skids and maintenance-ready equipment layouts.",
  },
  {
    title: "Research Scientist",
    location: "Calgary",
    type: "Full-time",
    description:
      "Characterise recovered calcium streams and their behaviour in cement chemistry.",
  },
];

const closing =
  "This article is fictional demo content created for the RURA portfolio project.";

export const articles: PressArticle[] = [
  {
    slug: "first-industrial-pilot-study",
    category: "Research",
    date: "2026-09-30",
    title: "RURA completes first industrial pilot study",
    excerpt:
      "A six-month study beside a live kiln tested how electrified process modules respond to variable feed and load.",
    body: [
      "The study ran alongside normal production at a partner site, measuring how electrified modules respond to changing feed composition and load.",
      "Findings will shape the engineering basis for the next demonstration phase, including control strategy and maintenance access.",
      closing,
    ],
    image: IMG.lab,
  },
  {
    slug: "materials-innovation-partnership",
    category: "Partnerships",
    date: "2026-09-18",
    title: "RURA announces materials innovation partnership",
    excerpt:
      "A joint programme will test recovered calcium streams in building-material formulations.",
    body: [
      "The programme pairs RURA process outputs with formulation testing at a materials partner.",
      "Early work focuses on consistency, reactivity and how recovered streams behave in standard mixes.",
      closing,
    ],
    image: IMG.factory,
  },
  {
    slug: "demonstration-facility-engineering",
    category: "Announcements",
    date: "2026-09-04",
    title: "New demonstration facility enters engineering phase",
    excerpt:
      "Detailed design begins for a facility sized to prove continuous operation at industrial conditions.",
    body: [
      "Engineering teams have started detailed design, covering layout, utilities and interfaces with a host plant.",
      "The facility is intended to demonstrate continuous operation rather than short campaigns.",
      closing,
    ],
    image: IMG.construction,
  },
  {
    slug: "climate-technology-accelerator",
    category: "News",
    date: "2026-08-21",
    title: "RURA selected for climate technology accelerator",
    excerpt:
      "The programme offers technical mentorship and introductions across the industrial value chain.",
    body: [
      "RURA joins a cohort of early-stage companies working on industrial emissions.",
      "The team will use the programme to widen conversations with producers and equipment suppliers.",
      closing,
    ],
    image: IMG.tower,
  },
  {
    slug: "electrochemical-stack-validation",
    category: "Research",
    date: "2026-08-09",
    title: "Electrochemical stack completes extended validation run",
    excerpt:
      "A long-duration test examined stability, efficiency drift and maintenance intervals.",
    body: [
      "The run tracked cell voltage, membrane condition and product purity over extended operation.",
      "Results guide the next stack revision and the service plan for pilot hardware.",
      closing,
    ],
    image: IMG.lab3,
  },
  {
    slug: "northline-feasibility-agreement",
    category: "Partnerships",
    date: "2026-07-29",
    title: "Northline signs feasibility agreement with RURA",
    excerpt:
      "A producer will assess how RURA modules could fit one of its existing lines.",
    body: [
      "The feasibility study will review plant layout, feedstock and utilities at a candidate site.",
      "Outputs include an integration concept and a list of open engineering questions.",
      closing,
    ],
    image: IMG.plant,
  },
  {
    slug: "jakarta-engineering-office",
    category: "Announcements",
    date: "2026-07-15",
    title: "RURA opens engineering office in Jakarta",
    excerpt:
      "A second engineering hub adds mechanical design capacity close to industrial customers.",
    body: [
      "The office focuses on mechanical design, fabrication partners and field support.",
      "It extends RURA's engineering working hours across time zones.",
      closing,
    ],
    image: IMG.crane,
  },
  {
    slug: "retrofit-integration-study",
    category: "Research",
    date: "2026-06-30",
    title: "Retrofit integration study maps kiln-line interfaces",
    excerpt:
      "A technical study documents where and how new process modules can attach to existing plants.",
    body: [
      "The study catalogues interface points for feed, power, heat and controls on typical lines.",
      "It forms the basis for RURA's standard integration package.",
      closing,
    ],
    image: IMG.concrete,
  },
  {
    slug: "limestone-feedstock-testing",
    category: "Research",
    date: "2026-06-12",
    title: "Limestone feedstock testing programme expands",
    excerpt:
      "More feedstock types are being tested to understand how composition affects dissolution.",
    body: [
      "The programme compares limestone sources across purity and particle size.",
      "Data feeds directly into process models used for plant sizing.",
      closing,
    ],
    image: IMG.site,
  },
  {
    slug: "industrial-advisory-board",
    category: "News",
    date: "2026-05-27",
    title: "RURA forms industrial advisory board",
    excerpt:
      "Experienced plant operators and engineers will review RURA's deployment plans.",
    body: [
      "The board brings operating experience from heavy-industry plants and engineering firms.",
      "Members will review pilot plans, safety cases and commercial pathways.",
      closing,
    ],
    image: IMG.worker,
  },
  {
    slug: "forge-labs-shared-test-bench",
    category: "Partnerships",
    date: "2026-05-08",
    title: "Forge Labs and RURA open shared test bench",
    excerpt: "A shared bench speeds up testing of materials and components.",
    body: [
      "The bench lets both teams run characterisation work without duplicating equipment.",
      "Early runs focus on membranes and recovered calcium products.",
      closing,
    ],
    image: IMG.lab4,
  },
  {
    slug: "process-emissions-methodology-note",
    category: "News",
    date: "2026-04-22",
    title: "RURA publishes process-emissions methodology note",
    excerpt:
      "A short note explains how RURA frames and measures process emissions in its work.",
    body: [
      "The note sets out definitions, boundaries and the data RURA will report during pilots.",
      "It is intended as a starting point for discussion with partners and reviewers.",
      closing,
    ],
    image: IMG.wind,
  },
];
