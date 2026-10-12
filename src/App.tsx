import { useState, type ReactNode } from "react";

type IconName =
  | "activity"
  | "alert"
  | "audit"
  | "bell"
  | "calendar"
  | "check"
  | "chevron"
  | "clipboard"
  | "clock"
  | "document"
  | "heart"
  | "home"
  | "mail"
  | "menu"
  | "people"
  | "plus"
  | "report"
  | "search"
  | "shield"
  | "sparkles"
  | "target"
  | "training"
  | "trend"
  | "user"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2-6 4 12 2-6h6" /></>,
  alert: <><path d="M12 9v4m0 4h.01" /><path d="M10.3 3.8 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.8a2 2 0 0 0-3.4 0Z" /></>,
  audit: <><path d="M9 11l2 2 4-4" /><path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" /><rect x="9" y="3" width="6" height="4" rx="1" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  clipboard: <><rect x="4" y="4" width="16" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M8 10h8M8 14h5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  document: <><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 13h6M9 17h6" /></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /><path d="M7 12h3l1-3 2 6 1-3h3" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  report: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  sparkles: <><path d="m12 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3ZM5 14l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2ZM18 13l-1.3 3.7L13 18l3.7 1.3L18 23l1.3-3.7L23 18l-3.7-1.3L18 13Z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  training: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c3 3 9 3 12 0v-4.5M22 9v6" /></>,
  trend: <><path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

const toneStyles = {
  blue: "bg-blue-50 text-blue-700",
  teal: "bg-teal-50 text-teal-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-rose-50 text-rose-700",
  slate: "bg-slate-100 text-slate-600",
};

function Badge({ children, tone = "green" }: { children: ReactNode; tone?: keyof typeof toneStyles }) {
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${toneStyles[tone]}`}>{children}</span>;
}

function Progress({ value, tone = "blue", label }: { value: number; tone?: "blue" | "teal" | "green" | "amber" | "red"; label?: string }) {
  const fills = { blue: "bg-blue-600", teal: "bg-teal-500", green: "bg-emerald-500", amber: "bg-amber-500", red: "bg-rose-500" };
  return (
    <div className="space-y-2">
      {label && <div className="flex justify-between text-sm"><span className="font-medium text-slate-700">{label}</span><span className="font-semibold text-slate-900">{value}%</span></div>}
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${fills[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm ${className}`}>{children}</section>;
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between lg:p-6">
      <div>
        <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

const summaryCards: { label: string; value: string; trend: string; trendUp: boolean; icon: IconName; tone: keyof typeof toneStyles }[] = [
  { label: "Active clinical audits", value: "18", trend: "3 this week", trendUp: true, icon: "audit", tone: "blue" },
  { label: "Completed this month", value: "24", trend: "12% vs last month", trendUp: true, icon: "check", tone: "green" },
  { label: "Open CAPA actions", value: "31", trend: "6 due soon", trendUp: false, icon: "target", tone: "amber" },
  { label: "Safety incidents", value: "12", trend: "8% decrease", trendUp: true, icon: "shield", tone: "teal" },
  { label: "Complaints received", value: "9", trend: "2 awaiting review", trendUp: false, icon: "people", tone: "red" },
  { label: "Accreditation compliance", value: "94.2%", trend: "2.4% increase", trendUp: true, icon: "clipboard", tone: "blue" },
  { label: "Training compliance", value: "91%", trend: "On track", trendUp: true, icon: "training", tone: "green" },
  { label: "Policies due for review", value: "7", trend: "Within 30 days", trendUp: false, icon: "document", tone: "amber" },
];

const indicators = [
  { label: "Hand hygiene compliance", value: "96.4%", goal: "Target 95%", progress: 96, tone: "green" as const, delta: "+1.8%" },
  { label: "Medication error rate", value: "1.2", goal: "per 1,000 doses", progress: 78, tone: "teal" as const, delta: "−0.3" },
  { label: "Patient falls", value: "2.1", goal: "per 1,000 bed days", progress: 74, tone: "amber" as const, delta: "−6.2%" },
  { label: "30-day readmission", value: "7.8%", goal: "Target < 8.5%", progress: 88, tone: "blue" as const, delta: "−0.6%" },
  { label: "Average length of stay", value: "4.3d", goal: "Target 4.1 days", progress: 81, tone: "amber" as const, delta: "+0.2d" },
  { label: "Mortality review completion", value: "98%", goal: "Target 95%", progress: 98, tone: "green" as const, delta: "+3.0%" },
  { label: "ED waiting time", value: "38m", goal: "Target < 45 min", progress: 86, tone: "teal" as const, delta: "−4m" },
  { label: "Surgical site infection", value: "0.7%", goal: "Target < 1.0%", progress: 92, tone: "green" as const, delta: "−0.1%" },
  { label: "Patient satisfaction", value: "4.7/5", goal: "1,248 responses", progress: 94, tone: "blue" as const, delta: "+0.2" },
];

const navItems = ["Home", "Clinical Audit", "KPIs & Quality Indicators", "Patient Safety", "Risk Management", "Complaints & Experience", "Accreditation", "Policies & Documents", "Training", "Reports"];

function Logo() {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div className="grid size-10 place-items-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-200">
        <span className="relative block size-5">
          <span className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 rounded-sm bg-white" />
          <span className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-sm bg-white" />
        </span>
      </div>
      <div className="hidden leading-tight sm:block">
        <p className="font-bold tracking-tight text-slate-900">Northstar Medical</p>
        <p className="text-xs font-medium text-slate-500">Quality Department</p>
      </div>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 sm:px-6">
        <Logo />
        <div className="ml-auto hidden max-w-md flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 lg:flex">
          <Icon name="search" className="size-4 text-slate-400" />
          <input className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" aria-label="Search dashboard" placeholder="Search audits, policies, reports..." />
          <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400">⌘ K</kbd>
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button className="relative grid size-10 place-items-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800" aria-label="Notifications">
            <Icon name="bell" />
            <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-rose-500" />
          </button>
          <button className="hidden items-center gap-2 rounded-xl border border-slate-200 py-1.5 pl-1.5 pr-3 transition hover:bg-slate-50 sm:flex">
            <span className="grid size-8 place-items-center rounded-lg bg-teal-100 text-sm font-bold text-teal-700">SA</span>
            <span className="text-left leading-tight"><span className="block text-xs font-semibold text-slate-800">Dr. Sarah Ali</span><span className="block text-[10px] text-slate-500">Quality Director</span></span>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="grid size-10 place-items-center rounded-xl text-slate-600 hover:bg-slate-100 xl:hidden" aria-label="Toggle navigation">
            <Icon name={mobileOpen ? "x" : "menu"} />
          </button>
        </div>
      </div>
      <nav className="hidden border-t border-slate-100 xl:block">
        <div className="mx-auto flex max-w-screen-2xl items-center gap-1 overflow-x-auto px-6 py-2">
          {navItems.map((item, index) => (
            <button key={item} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition ${index === 0 ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>{item}</button>
          ))}
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white p-4 xl:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
            <Icon name="search" className="size-4 text-slate-400" />
            <input className="w-full bg-transparent text-sm outline-none" aria-label="Search dashboard" placeholder="Search dashboard..." />
          </div>
          <nav className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item, index) => <button key={item} className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium ${index === 0 ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>{item}</button>)}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-teal-700 p-6 text-white shadow-xl shadow-blue-100 sm:p-8 lg:p-10">
      <div className="absolute -right-16 -top-32 size-80 rounded-full border-[48px] border-white/5" />
      <div className="absolute bottom-0 right-1/4 h-32 w-32 translate-y-20 rounded-full bg-teal-300/10 blur-xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <Badge tone="blue"><span className="size-1.5 rounded-full bg-emerald-400" /> Live quality overview</Badge>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Hospital Quality Department Dashboard</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">Monitoring quality, safety, compliance, and continuous improvement across the hospital.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50">
              <Icon name="audit" className="size-4" /> View Clinical Audits
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
              <Icon name="report" className="size-4" /> Open KPI Dashboard
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:w-72">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-medium text-blue-100">Quality score</p><p className="mt-1 text-2xl font-bold">92.8</p><p className="mt-1 text-xs text-emerald-300">↑ 2.1 this quarter</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-medium text-blue-100">Hospital rank</p><p className="mt-1 text-2xl font-bold">Top 8%</p><p className="mt-1 text-xs text-blue-100">Peer benchmark</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryGrid() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div><h2 className="text-lg font-bold text-slate-900">At a glance</h2><p className="mt-1 text-sm text-slate-500">Key quality metrics for June 2025</p></div>
        <button className="hidden items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 sm:flex">View all metrics <Icon name="chevron" className="size-4" /></button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <article key={card.label} className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className={`grid size-10 place-items-center rounded-xl ${toneStyles[card.tone]}`}><Icon name={card.icon} /></span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${card.trendUp ? "text-emerald-600" : "text-amber-600"}`}>
                {card.trendUp && <Icon name="trend" className="size-3.5" />}{card.trend}
              </span>
            </div>
            <p className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{card.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-500">{card.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AuditSection() {
  const bars = [
    { label: "Patient care", value: 84, color: "bg-blue-600" },
    { label: "Medication", value: 64, color: "bg-teal-500" },
    { label: "Documentation", value: 47, color: "bg-amber-500" },
    { label: "Infection control", value: 35, color: "bg-emerald-500" },
    { label: "Environment", value: 26, color: "bg-violet-500" },
  ];
  return (
    <SectionCard>
      <SectionHeader title="Clinical Audit" subtitle="2025 annual audit plan and findings" action={<button className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">Open Audit Tracker <Icon name="chevron" className="size-4" /></button>} />
      <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1.2fr_1fr] lg:p-6">
        <div>
          <p className="text-sm font-semibold text-slate-700">Annual plan progress</p>
          <div className="mt-5 flex items-center gap-5">
            <div className="relative grid size-32 shrink-0 place-items-center rounded-full bg-[conic-gradient(var(--color-blue-600)_0_72%,var(--color-slate-100)_72%_100%)]">
              <div className="grid size-24 place-items-center rounded-full bg-white text-center">
                <div><p className="text-2xl font-bold text-slate-900">72%</p><p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Complete</p></div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div><p className="text-slate-500">Scheduled</p><p className="font-bold text-slate-900">42 audits</p></div>
              <div><p className="text-slate-500">Completed</p><p className="font-bold text-emerald-600">31 audits</p></div>
              <div><p className="text-slate-500">Overdue</p><p className="font-bold text-rose-600">3 audits</p></div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="flex items-center justify-between"><p className="text-sm font-semibold text-slate-700">Findings by category</p><span className="text-xs text-slate-400">87 total</span></div>
          <div className="mt-5 space-y-4">
            {bars.map((bar) => <div key={bar.label} className="grid grid-cols-[7rem_1fr_2rem] items-center gap-3"><span className="truncate text-xs font-medium text-slate-500">{bar.label}</span><div className="h-2 rounded-full bg-slate-100"><div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.value}%` }} /></div><span className="text-right text-xs font-bold text-slate-700">{Math.round(bar.value / 3)}</span></div>)}
          </div>
        </div>
        <div className="border-t border-slate-100 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="flex items-center justify-between"><p className="text-sm font-semibold text-slate-700">Department compliance</p><Badge tone="green">Good standing</Badge></div>
          <p className="mt-5 text-3xl font-bold text-slate-900">89.6%</p>
          <p className="mt-1 text-xs font-medium text-emerald-600">↑ 3.4% from last quarter</p>
          <div className="mt-5 space-y-4"><Progress label="Nursing" value={94} tone="green" /><Progress label="Surgery" value={89} tone="blue" /><Progress label="Pharmacy" value={86} tone="teal" /></div>
        </div>
      </div>
    </SectionCard>
  );
}

function IndicatorsSection() {
  return (
    <SectionCard>
      <SectionHeader title="Quality Indicators" subtitle="Performance against hospital-wide targets" action={<div className="flex rounded-lg bg-slate-100 p-1 text-xs font-semibold"><button className="rounded-md bg-white px-3 py-1.5 text-slate-800 shadow-sm">Monthly</button><button className="px-3 py-1.5 text-slate-500">Quarterly</button></div>} />
      <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-3">
        {indicators.map((item) => (
          <article key={item.label} className="bg-white p-5">
            <div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold text-slate-700">{item.label}</p><span className="whitespace-nowrap text-xs font-semibold text-emerald-600">{item.delta}</span></div>
            <div className="mt-4 flex items-end justify-between"><p className="text-2xl font-bold text-slate-900">{item.value}</p><p className="text-xs text-slate-400">{item.goal}</p></div>
            <div className="mt-3"><Progress value={item.progress} tone={item.tone} /></div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

function SafetySection() {
  return (
    <SectionCard>
      <SectionHeader title="Patient Safety & Risk" subtitle="Incident oversight and enterprise risk monitoring" action={<Badge tone="red"><span className="size-1.5 rounded-full bg-rose-500" /> 3 high priority</Badge>} />
      <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-6">
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["Incident reports", "46", "8 new", "blue"],
              ["Near misses", "18", "39% of reports", "teal"],
              ["Sentinel events", "1", "Under review", "red"],
              ["Risk assessments due", "8", "Next 30 days", "amber"],
              ["Open investigations", "6", "2 near deadline", "amber"],
              ["CAPA follow-up", "87%", "On schedule", "green"],
            ].map(([label, value, detail, tone]) => <div key={label} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"><p className="text-xs font-medium text-slate-500">{label}</p><p className="mt-2 text-xl font-bold text-slate-900">{value}</p><p className={`mt-1 text-xs font-medium ${tone === "red" ? "text-rose-600" : tone === "amber" ? "text-amber-600" : tone === "green" ? "text-emerald-600" : "text-slate-400"}`}>{detail}</p></div>)}
          </div>
          <div className="mt-5">
            <div className="mb-3 flex justify-between text-sm"><span className="font-semibold text-slate-700">CAPA completion status</span><span className="font-bold text-slate-900">27 of 31</span></div>
            <Progress value={87} tone="teal" />
          </div>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-5">
          <div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-rose-100 text-rose-700"><Icon name="alert" className="size-4" /></span><div><p className="text-sm font-bold text-slate-900">High-risk attention panel</p><p className="text-xs text-slate-500">Items requiring leadership review</p></div></div>
          <div className="mt-5 space-y-3">
            {[
              ["Medication reconciliation", "ICU", "Critical"],
              ["Falls prevention controls", "Ward 4B", "High"],
              ["Fire safety assessment", "Facilities", "High"],
            ].map(([item, dept, level], index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white bg-white p-3 shadow-sm"><span className={`size-2.5 rounded-full ${index === 0 ? "bg-rose-500" : "bg-amber-500"}`} /><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-slate-800">{item}</p><p className="text-[11px] text-slate-400">{dept}</p></div><Badge tone={index === 0 ? "red" : "amber"}>{level}</Badge></div>)}
          </div>
          <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl border border-rose-200 bg-white py-2.5 text-xs font-bold text-rose-700 hover:bg-rose-50">View risk register <Icon name="chevron" className="size-3.5" /></button>
        </div>
      </div>
    </SectionCard>
  );
}

function AccreditationSection() {
  const departments = [["Nursing", 97], ["Pharmacy", 95], ["Laboratory", 92], ["Surgery", 88], ["Facilities", 81]] as const;
  return (
    <SectionCard>
      <SectionHeader title="Accreditation & Compliance" subtitle="Readiness overview for upcoming regulatory surveys" action={<Badge tone="blue"><Icon name="calendar" className="size-3.5" /> Mock survey in 24 days</Badge>} />
      <div className="grid gap-6 p-5 md:grid-cols-2 lg:grid-cols-[0.8fr_1.1fr_1.1fr] lg:p-6">
        <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-teal-600 p-5 text-white">
          <p className="text-sm font-medium text-blue-100">Accreditation readiness</p>
          <p className="mt-3 text-4xl font-bold">94.2%</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[94%] rounded-full bg-white" /></div>
          <p className="mt-4 text-xs leading-5 text-blue-100">Our readiness score has improved by 2.4% since the last assessment.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700">Standards tracker</p>
          <div className="mt-4 space-y-3">
            {[["Compliant", "286", "green"], ["In progress", "34", "blue"], ["Needs attention", "12", "amber"], ["Non-compliant", "4", "red"]].map(([label, value, tone]) => <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-3"><Badge tone={tone as keyof typeof toneStyles}>{label}</Badge><span className="text-sm font-bold text-slate-800">{value}</span></div>)}
          </div>
          <p className="mt-4 text-xs font-medium text-slate-500"><strong className="text-slate-800">23</strong> action plans currently in progress</p>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold text-slate-700">Compliance by department</p>
          <div className="mt-4 space-y-3">
            {departments.map(([name, value]) => <Progress key={name} label={name} value={value} tone={value >= 90 ? "green" : value >= 85 ? "blue" : "amber"} />)}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function ExperienceSection() {
  const chart = [36, 43, 39, 54, 49, 62, 58, 72, 66, 78, 76, 88];
  return (
    <SectionCard>
      <SectionHeader title="Complaints & Patient Experience" subtitle="Voice of patient metrics and service recovery" action={<button className="text-sm font-semibold text-blue-700">View experience report</button>} />
      <div className="grid gap-6 p-5 lg:grid-cols-[0.8fr_1.2fr] lg:p-6">
        <div className="grid grid-cols-2 gap-3">
          {[["9", "Complaints this month", "−3 vs May"], ["3.2d", "Resolution time", "Target < 5d"], ["4.7/5", "Feedback score", "+0.2 this month"], ["68", "Compliments", "+14% increase"]].map(([value, label, detail]) => <div key={label} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"><p className="text-xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs font-semibold text-slate-600">{label}</p><p className="mt-2 text-[11px] font-medium text-emerald-600">{detail}</p></div>)}
          <div className="col-span-2 flex flex-wrap gap-2 pt-1"><Badge tone="blue">Communication 4</Badge><Badge tone="amber">Waiting time 3</Badge><Badge tone="teal">Care quality 2</Badge></div>
        </div>
        <div>
          <div className="flex items-center justify-between"><div><p className="text-sm font-semibold text-slate-700">Patient experience trend</p><p className="mt-1 text-xs text-slate-400">Satisfaction index, last 12 months</p></div><Badge tone="green">+8.4% YoY</Badge></div>
          <div className="mt-6 flex h-36 items-end gap-2 border-b border-slate-200">
            {chart.map((height, index) => <div key={index} className="group relative flex h-full flex-1 items-end"><div className={`w-full rounded-t-md transition group-hover:bg-blue-700 ${index === chart.length - 1 ? "bg-blue-700" : "bg-blue-100"}`} style={{ height: `${height}%` }} /></div>)}
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wide text-slate-400"><span>Jul</span><span>Oct</span><span>Jan</span><span>Apr</span><span>Jun</span></div>
        </div>
      </div>
    </SectionCard>
  );
}

const shortcuts: { label: string; icon: IconName; tone: keyof typeof toneStyles }[] = [
  { label: "Submit Incident Report", icon: "alert", tone: "red" },
  { label: "Start New Clinical Audit", icon: "plus", tone: "blue" },
  { label: "View Audit Calendar", icon: "calendar", tone: "teal" },
  { label: "View CAPA Register", icon: "target", tone: "amber" },
  { label: "Open Policies & SOPs", icon: "document", tone: "blue" },
  { label: "Accreditation Files", icon: "shield", tone: "green" },
  { label: "Quality Improvement Projects", icon: "sparkles", tone: "teal" },
  { label: "Monthly Reports", icon: "report", tone: "slate" },
];

function QuickAccess() {
  return (
    <SectionCard>
      <SectionHeader title="Quick Access" subtitle="Frequently used quality tools and resources" />
      <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 lg:p-6">
        {shortcuts.map((item) => <button key={item.label} className="group flex min-h-28 flex-col items-start justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><span className={`grid size-9 place-items-center rounded-lg ${toneStyles[item.tone]}`}><Icon name={item.icon} className="size-4.5" /></span><span className="mt-4 flex w-full items-end justify-between gap-2 text-xs font-bold leading-5 text-slate-700"><span>{item.label}</span><Icon name="chevron" className="size-3.5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" /></span></button>)}
      </div>
    </SectionCard>
  );
}

function Alerts() {
  const alerts: { title: string; detail: string; meta: string; tone: keyof typeof toneStyles; icon: IconName }[] = [
    { title: "ICU medication audit due", detail: "Final evidence submission is required.", meta: "Due tomorrow", tone: "red", icon: "audit" },
    { title: "7 policies require review", detail: "Owners have been notified automatically.", meta: "Within 30 days", tone: "amber", icon: "document" },
    { title: "Accreditation mock survey", detail: "Department schedules are now available.", meta: "July 18", tone: "blue", icon: "shield" },
    { title: "Updated safety alert", detail: "New guidance for high-alert medications.", meta: "2 hours ago", tone: "teal", icon: "alert" },
    { title: "Mandatory training deadline", detail: "Hand hygiene competency renewal.", meta: "June 30", tone: "green", icon: "training" },
  ];
  return (
    <SectionCard>
      <SectionHeader title="Announcements & Alerts" subtitle="Important updates requiring your attention" action={<button className="text-sm font-semibold text-blue-700">View all</button>} />
      <div className="divide-y divide-slate-100">
        {alerts.map((alert) => <article key={alert.title} className="flex gap-3 p-4 transition hover:bg-slate-50/70"><span className={`grid size-9 shrink-0 place-items-center rounded-lg ${toneStyles[alert.tone]}`}><Icon name={alert.icon} className="size-4.5" /></span><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><p className="text-sm font-bold text-slate-800">{alert.title}</p><span className="whitespace-nowrap text-[10px] font-semibold text-slate-400">{alert.meta}</span></div><p className="mt-1 text-xs leading-5 text-slate-500">{alert.detail}</p></div></article>)}
      </div>
    </SectionCard>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4"><Logo /><div className="hidden h-8 w-px bg-slate-200 md:block" /><div className="text-xs leading-5 text-slate-500"><p className="flex items-center gap-1.5"><Icon name="mail" className="size-3.5" /> quality@northstarmedical.org</p><p>Quality Office · Extension 2480</p></div></div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500"><button className="hover:text-blue-700">Hospital Intranet</button><button className="hover:text-blue-700">Help & Support</button><button className="hover:text-blue-700">Privacy</button><span className="text-slate-400">Last updated June 18, 2025 · 09:42</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="mx-auto max-w-screen-2xl space-y-6 px-4 py-6 sm:px-6 lg:space-y-8 lg:py-8">
        <Hero />
        <SummaryGrid />
        <AuditSection />
        <IndicatorsSection />
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <SafetySection />
          <Alerts />
        </div>
        <AccreditationSection />
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <ExperienceSection />
          <QuickAccess />
        </div>
      </main>
      <Footer />
    </div>
  );
}
