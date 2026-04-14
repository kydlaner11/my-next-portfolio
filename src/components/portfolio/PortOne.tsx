import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trackingImg from "@/assets/portfoliodetail/portone/tracking.png";
import trackingheroImg from "@/assets/portfoliodetail/portone/tracking-hero.png";
import tracking1Img from "@/assets/portfoliodetail/portone/tracking-1.png";
import tracking2Img from "@/assets/portfoliodetail/portone/tracking-2.png";
import tracking3Img from "@/assets/portfoliodetail/portone/tracking-3.png";

import monitoringImg from "@/assets/portfoliodetail/porttwo/monitoring.png";
import monitoringheroImg from "@/assets/portfoliodetail/porttwo/monitoring-hero.png";
import monitoring1Img from "@/assets/portfoliodetail/porttwo/monitoring-1.png";
import monitoring2Img from "@/assets/portfoliodetail/porttwo/monitoring-2.png";
import monitoring3Img from "@/assets/portfoliodetail/porttwo/monitoring-3.png";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// ─── Types ────────────────────────────────────────────────────────────────────
type ArchTier = {
  label: string;
  variant: "fe" | "be" | "db" | "infra";
  items: string[];
};

type PortfolioItem = {
  tag: string;
  title: string;
  titleEm: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  heroImg: string;
  // All fields below are optional — component handles missing data gracefully
  detailImgs?: string[];
  stats?: { num: string; label: string }[];
  problem?: { title: string; desc: string };
  solution?: { title: string; desc: string };
  features?: { icon: string; title: string; desc: string }[];
  stack?: string[];
  archTiers?: ArchTier[];
  timeline?: { week: string; desc: string }[];
  protectedurl?: number;
  liveUrl?: string;
  liveLabel?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const portfolioData: Record<string, PortfolioItem> = {
  "tracking-system": {
    tag: "Case Study — Fullstack",
    title: "System ",
    titleEm: "Tracking Truck",
    client: "PT UNICHEM CANDI INDONESIA",
    year: "2026",
    role: "FULLSTACK DEVELOPER",
    duration: "-",
    heroImg: trackingheroImg,
    detailImgs: [tracking1Img, tracking2Img, tracking3Img],
    problem: {
      title: "Manual monitoring that slows everything down",
      desc: "The client relied on spreadsheets and manual reports to track truck locations and delivery schedules. Administrators spent hours each day cross-checking data across multiple sources, leading to delayed responses, missed updates, and no single source of truth for fleet status.",
    },
    solution: {
      title: "A centralized, tracking platform",
      desc: "Built a web-based tracking system with a live map dashboard, journey plan management, and history logs. Monitoring shifted from manual spreadsheet checks to a single screen — with real-time location updates and full route history available instantly.",
    },
    stack: ["PHP", "MySQL", "Sybase", "JavaScript", "Leaflet.js"],
    protectedurl: 1,
    liveUrl: "https://unichem.co.id",
    liveLabel: "unichem.co.id — live & production ready",
  },
  "monitoring-system": {
    tag: "Case Study — Fullstack",
    title: "System Live Monitoring ",
    titleEm: "Dashboard",
    client: "PT UNICHEM CANDI INDONESIA",
    year: "2026",
    role: "FULLSTACK DEVELOPER",
    duration: "-",
    heroImg: monitoringheroImg,
    detailImgs: [monitoring1Img, monitoring2Img, monitoring3Img],
    problem: {
      title: "Pendaftaran manual yang lambat",
      desc: "Klien mengandalkan form Google dan WhatsApp untuk pendaftaran kursus. Proses ini memakan waktu admin 3–4 jam per hari dan sering menyebabkan double booking serta data yang tidak sinkron.",
    },
    solution: {
      title: "Platform registrasi terintegrasi",
      desc: "Membangun web app dengan dashboard admin real-time, sistem slot otomatis, dan notifikasi email. Proses pendaftaran turun dari 3 langkah manual menjadi 1 klik konfirmasi.",
    },
    stack: ["PHP", "MySQL", "Sybase", "JavaScript"],
    protectedurl: 1,
    liveUrl: "https://unichem.co.id",
    liveLabel: "unichem.co.id — live & production ready",
  },
  "tracking-system1": {
    tag: "Case Study — Fullstack",
    title: "System ",
    titleEm: "Tracking Truck",
    client: "PT UNICHEM CANDI INDONESIA",
    year: "2026",
    role: "FULLSTACK DEVELOPER",
    duration: "-",
    heroImg: trackingheroImg,
    detailImgs: [trackingImg, tracking1Img],
    stats: [
      { num: "~3h", label: "Waktu admin terpangkas per hari" },
      { num: "1×", label: "Klik konfirmasi, dari 3 langkah manual" },
      { num: "0", label: "Double booking sejak sistem berjalan" },
    ],
    problem: {
      title: "Pendaftaran manual yang lambat",
      desc: "Klien mengandalkan form Google dan WhatsApp untuk pendaftaran kursus. Proses ini memakan waktu admin 3–4 jam per hari dan sering menyebabkan double booking serta data yang tidak sinkron.",
    },
    solution: {
      title: "Platform registrasi terintegrasi",
      desc: "Membangun web app dengan dashboard admin real-time, sistem slot otomatis, dan notifikasi email. Proses pendaftaran turun dari 3 langkah manual menjadi 1 klik konfirmasi.",
    },
    features: [
      { icon: "⚡", title: "Real-time Dashboard", desc: "Monitoring status truk & pendaftaran secara live" },
      { icon: "🔔", title: "Notifikasi Otomatis", desc: "Email & alert saat jadwal, konfirmasi, atau perubahan" },
      { icon: "📅", title: "Slot Management", desc: "Sistem slot otomatis, mencegah double booking" },
      { icon: "📊", title: "Laporan & Rekap", desc: "Export data dan rekap kursus per periode" },
      { icon: "🔐", title: "Auth & Role", desc: "Admin, operator, dan user dengan akses berbeda" },
      { icon: "📱", title: "Responsive UI", desc: "Optimal di desktop maupun mobile" },
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "Vercel", "Resend"],
    timeline: [
      { week: "W1–2", desc: "Discovery & wireframing — audit alur pendaftaran existing, interview admin, menyusun user flow baru dan desain komponen utama." },
      { week: "W3–4", desc: "Development — build frontend dengan React, setup backend API, integrasi database PostgreSQL, dan sistem notifikasi email otomatis." },
      { week: "W5",   desc: "QA & revisi — pengujian end-to-end, perbaikan edge case, dan optimasi performa halaman." },
      { week: "W6",   desc: "Deploy & handover — deploy ke Vercel, dokumentasi admin, dan training tim klien." },
    ],
    liveUrl: "https://macroacademy.id",
    liveLabel: "macroacademy.id — live & production ready",
  },
};

// ─── Chip variant classes ─────────────────────────────────────────────────────
const archVariantClass: Record<ArchTier["variant"], string> = {
  fe:    "bg-blue-50   text-blue-700   border-blue-200   dark:bg-blue-950  dark:text-blue-300  dark:border-blue-800",
  be:    "bg-teal-50   text-teal-700   border-teal-200   dark:bg-teal-950  dark:text-teal-300  dark:border-teal-800",
  db:    "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  infra: "bg-amber-50  text-amber-700  border-amber-200  dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-bold mb-4 ${className}`}>
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-3xl font-normal mb-6 text-foreground">{children}</h2>
);

// ─── Component ────────────────────────────────────────────────────────────────
const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = portfolioData[slug ?? ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">
      Project tidak ditemukan.
    </div>
  );

  const {
    tag, title, titleEm, client, year, role, duration, heroImg,
    detailImgs, stats, problem, solution, features,
    stack, archTiers, timeline, liveUrl, liveLabel, protectedurl,
  } = data;

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-6 py-16"
    >

      {/* ── Back Button ── */}
      <motion.button
        variants={fadeInUp}
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
          <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Kembali
      </motion.button>

      {/* ── Hero Heading ── */}
      <motion.div variants={fadeInUp}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-bold">{tag}</span>
        </div>
        <h1 className="font-heading text-[clamp(2.4rem,6vw,4rem)] font-normal leading-[1.05] mb-8">
          {title}<em className="italic text-muted-foreground">{titleEm}</em>
        </h1>
      </motion.div>

      {/* ── Meta Bar ── */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-border mb-12"
      >
        {[
          { label: "Klien",   value: client },
          { label: "Tahun",   value: year },
          { label: "Role",    value: role },
          { label: "Durasi",  value: duration },
        ].map((m) => (
          <div key={m.label}>
            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1 font-bold">{m.label}</p>
            <p className="text-[13px] font-medium">{m.value}</p>
          </div>
        ))}
      </motion.div>

      {/* ── Hero Image ── */}
      <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden mb-16 border border-white/5">
        <img src={heroImg} alt={title} className="w-full aspect-video object-cover" />
      </motion.div>

      {/* ── Key Metrics (optional) ── */}
      {stats && stats.length > 0 && (
        <motion.div variants={fadeInUp} className="mb-16">
          <SectionLabel>Project Impact</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.num} className="bg-muted/30 rounded-xl p-5 border border-border">
                <p className="font-heading text-3xl font-normal text-foreground mb-1">{s.num}</p>
                <p className="text-[13px] text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Problem & Solution (optional) ── */}
      {(problem || solution) && (
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-16">
          {problem && (
            <div className="space-y-4">
              <SectionLabel className="text-destructive">The Problem</SectionLabel>
              <div className="border-l-2 border-border pl-6 py-2">
                <h2 className="font-heading text-2xl font-normal mb-3 text-foreground">{problem.title}</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          )}
          {solution && (
            <div className="space-y-4">
              <SectionLabel className="text-primary">The Solution</SectionLabel>
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <h2 className="font-heading text-2xl font-normal mb-3 text-foreground">{solution.title}</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{solution.desc}</p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* ── Key Features (optional) ── */}
      {features && features.length > 0 && (
        <motion.div variants={fadeInUp} className="mb-16">
          <SectionLabel>Key Features</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f.title} className="bg-background border border-border rounded-xl p-4">
                <span className="text-lg block mb-2">{f.icon}</span>
                <p className="text-[13px] font-medium text-foreground mb-1">{f.title}</p>
                <p className="text-[12px] text-muted-foreground leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Detail Photos (optional) ── */}
      {detailImgs && detailImgs.length > 0 && (
        <motion.div variants={fadeInUp} className="mb-16">
          <SectionLabel>Visual Interface</SectionLabel>
          <div className="grid grid-cols-3 gap-2">
            {detailImgs.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border border-border ${i === 0 ? "aspect-[4/5]" : "aspect-[4/5]"}`}
              >
                <img src={img} alt="" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <hr className="border-border mb-12" />

      {/* ── Tech Stack chips (optional) ── */}
      {stack && stack.length > 0 && (
        <motion.div variants={fadeInUp} className="mb-16">
          <SectionTitle>Tools & Stack</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="text-[11px] px-4 py-2 rounded-full border border-border bg-muted/20 text-foreground font-medium">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Timeline (optional) ── */}
      {timeline && timeline.length > 0 && (
        <motion.div variants={fadeInUp} className="mb-16">
          <SectionLabel>Development Process</SectionLabel>
          <SectionTitle>Ideation to Deployment</SectionTitle>
          <div className="space-y-0">
            {timeline.map((t) => (
              <div
                key={t.week}
                className="flex gap-6 py-6 border-t border-border last:border-b group hover:bg-muted/10 transition-colors px-2"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary min-w-[60px] pt-1">{t.week}</span>
                <div className="relative">
                  <span className="w-2 h-2 rounded-full bg-border mt-2 flex-shrink-0 group-hover:bg-primary transition-colors block" />
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── CTA (optional) ── */}
      {liveUrl && protectedurl == 0 && (
        <motion.div
          variants={fadeInUp}
          className="group relative flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden"
        >
          <div className="relative z-10 mb-6 md:mb-0">
            <h3 className="font-heading text-2xl font-normal mb-1 text-foreground">Lihat sistem secara langsung</h3>
            {liveLabel && <p className="text-sm text-muted-foreground">{liveLabel}</p>}
          </div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-8 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all rounded-full active:scale-95"
          >
            Launch Website
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      )}
      {protectedurl == 1 && (
        <motion.div
          variants={fadeInUp}
          className="flex items-start gap-4 p-8 rounded-2xl border border-border bg-muted/20"
        >
          <div className="w-10 h-10 rounded-xl border border-border bg-muted/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="7" width="14" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5.5 7V5a3.5 3.5 0 017 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-normal mb-1 text-foreground">
              Live system access
            </h3>
            <p className="text-sm text-muted-foreground">
              This system runs on the client's internal infrastructure and is not publicly accessible.
            </p>
            <span className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-medium px-3 py-1.5 rounded-md bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1.5" y="5" width="9" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" />
                <path d="M4 5V3.5a2 2 0 114 0V5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Internal system — URL restricted
            </span>
          </div>
        </motion.div>
      )}

    </motion.main>
  );
};

export default PortfolioDetail;