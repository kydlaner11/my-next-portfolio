import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventImg from "@/assets/portfoliodetail/portone/tracking.png";
import editorialImg from "@/assets/editorial.jpg";
import everydayImg from "@/assets/everyday.jpg";

// Variasi animasi untuk stagger effect
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const portfolioData: Record<string, {
  tag: string;
  title: string;
  titleEm: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  heroImg: string;
  detailImgs: string[];
  problem: { title: string; desc: string };
  solution: { title: string; desc: string };
  stack: string[];
  timeline: { week: string; desc: string }[];
  liveUrl: string;
  liveLabel: string;
}> = {
  acara: {
    tag: "Case Study — Fullstack",
    title: "System ",
    titleEm: "Tracking Truck",
    client: "PT UNICHEM CANDI INDONESIA",
    year: "2026",
    role: "FULLSTACK DEVELOPER",
    duration: "6 Weeks",
    heroImg: eventImg,
    detailImgs: [eventImg, everydayImg, editorialImg],
    problem: {
      title: "Pendaftaran manual yang lambat",
      desc: "Klien mengandalkan form Google dan WhatsApp untuk pendaftaran kursus. Proses ini memakan waktu admin 3–4 jam per hari dan sering menyebabkan double booking serta data yang tidak sinkron.",
    },
    solution: {
      title: "Platform registrasi terintegrasi",
      desc: "Membangun web app dengan dashboard admin real-time, sistem slot otomatis, dan notifikasi email. Proses pendaftaran turun dari 3 langkah manual menjadi 1 klik konfirmasi.",
    },
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

  return (
    <motion.main 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      {/* Back Button */}
      <motion.button
        variants={fadeInUp}
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
          <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Kembali
      </motion.button>

      {/* Hero Heading */}
      <motion.div variants={fadeInUp}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-bold">{data.tag}</span>
        </div>
        <h1 className="font-heading text-[clamp(2.4rem,6vw,4rem)] font-normal leading-[1.05] mb-8">
          {data.title}<em className="italic text-muted-foreground">{data.titleEm}</em>
        </h1>
      </motion.div>

      {/* Meta Bar */}
      <motion.div 
        variants={fadeInUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-border mb-12"
      >
        {[
          { label: "Klien", value: data.client },
          { label: "Tahun", value: data.year },
          { label: "Role", value: data.role },
          { label: "Durasi", value: data.duration },
        ].map((m) => (
          <div key={m.label}>
            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1 font-bold">{m.label}</p>
            <p className="text-[13px] font-medium">{m.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Hero Image */}
      <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden mb-16 shadow-2xl border border-white/5">
        <img src={data.heroImg} alt={data.title} className="w-full aspect-video object-cover" />
      </motion.div>

      {/* Problem & Solution */}
      <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-bold">The Problem</p>
          <div className="border-l-2 border-border pl-6 py-2">
            <h2 className="font-heading text-2xl font-normal mb-3 text-foreground">{data.problem.title}</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{data.problem.desc}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-bold">The Solution</p>
          <div className="bg-muted/30 rounded-2xl p-6 border border-border">
            <h2 className="font-heading text-2xl font-normal mb-3 text-foreground">{data.solution.title}</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{data.solution.desc}</p>
          </div>
        </div>
      </motion.div>

      {/* Detail Photos */}
      <motion.div variants={fadeInUp} className="mb-16">
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-4 font-bold">Visual Interface</p>
        <div className="grid grid-cols-3 gap-2">
          {data.detailImgs.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-xl border border-border ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/5]"}`}>
              <img src={img} alt="" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="border-border mb-12" />

      {/* Tech Stack */}
      <motion.div variants={fadeInUp} className="mb-16">
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-4 font-bold">System Architecture</p>
        <h2 className="font-heading text-3xl font-normal mb-6">Tools & Stack</h2>
        <div className="flex flex-wrap gap-2">
          {data.stack.map((s) => (
            <span key={s} className="text-[11px] px-4 py-2 rounded-full border border-border bg-muted/20 text-foreground font-medium">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={fadeInUp} className="mb-16">
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-4 font-bold">Development Process</p>
        <h2 className="font-heading text-3xl font-normal mb-8">Ideation to Deployment</h2>
        <div className="space-y-0">
          {data.timeline.map((t) => (
            <div key={t.week} className="flex gap-6 py-6 border-t border-border last:border-b group hover:bg-muted/10 transition-colors px-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary min-w-[60px] pt-1">{t.week}</span>
              <div className="relative">
                <span className="w-2 h-2 rounded-full bg-border mt-2 flex-shrink-0 group-hover:bg-primary transition-colors block" />
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        variants={fadeInUp}
        className="group relative flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden"
      >
        <div className="relative z-10 mb-6 md:mb-0">
          <h3 className="font-heading text-2xl font-normal mb-1 text-foreground">Lihat sistem secara langsung</h3>
          <p className="text-sm text-muted-foreground">{data.liveLabel}</p>
        </div>
        <a
          href={data.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-8 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all rounded-full active:scale-95"
        >
          Launch Website
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>

    </motion.main>
  );
};

export default PortfolioDetail;