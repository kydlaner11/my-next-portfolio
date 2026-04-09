import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bridalImg from "@/assets/bridal.jpg";
import eventImg from "@/assets/event.jpg";
import trackingImg from "@/assets/portfoliodetail/portone/tracking.png";
import editorialImg from "@/assets/editorial.jpg";
import everydayImg from "@/assets/everyday.jpg";
// import weddingImg from "@/assets/wedding.jpg";
// import glamourImg from "@/assets/glamour.jpg";

const portfolios = [
  {
    slug: "pengantin",
    title: "Kecantikan Pengantin",
    tag: "Bridal",
    desc: "Glamor lembut untuk hari istimewa Anda",
    img: bridalImg,
  },
  {
    slug: "acara",
    title: "System Tracking",
    tag: "Feature System",
    desc: "Tampilan profesional untuk acara spesial",
    img: trackingImg,
  },
  {
    slug: "editorial",
    title: "Editorial & Kreatif",
    tag: "Editorial",
    desc: "Pernyataan berani untuk pemotretan",
    img: editorialImg,
  },
  {
    slug: "sehari-hari",
    title: "Kilau Sehari-hari",
    tag: "Everyday",
    desc: "Tampilan menawan untuk rutinitas harian",
    img: everydayImg,
  },
  {
    slug: "pernikahan",
    title: "Pernikahan Mewah",
    tag: "Wedding",
    desc: "Elegance tak terlupakan di hari bahagia",
    img: everydayImg,
  },
  {
    slug: "glamour",
    title: "Glamour Night",
    tag: "Glamour",
    desc: "Sorotan penuh pesona untuk malam spesial",
    img: editorialImg,
  },
  {
    slug: "glamour",
    title: "Glamour Night",
    tag: "Glamour",
    desc: "Sorotan penuh pesona untuk malam spesial",
    img: eventImg,
  },
];

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section id="karya" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              Selected Work
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2.2rem,6vw,3.8rem)] font-normal leading-[1.05] max-w-lg">
            Karya yang <em className="italic text-muted-foreground not-italic font-normal">berbicara</em> sendiri
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-[4px]">
          {portfolios.map((item, i) => {
            const isTall = i === 0 || i === 3;
            return (
              <button
                key={item.slug}
                onClick={() => navigate(`/portfolio/${item.slug}`)}
                className={`group relative overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${isTall ? "row-span-2" : ""}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]
                    ${isTall ? "h-full" : "aspect-[4/5]"}`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Arrow */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/15 border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Meta */}
                <div className="flex justify-between items-baseline px-3 py-2.5 border-t border-border bg-background">
                  <span className="text-[13px] text-foreground">{item.title}</span>
                  <span className="text-[11px] text-muted-foreground tracking-wide">{item.tag}</span>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-right text-[11px] tracking-widest uppercase text-muted-foreground mt-4">
          {portfolios.length} PORTFOLIO PROJECT
        </p>

      </div>
    </section>
  );
};

export default PortfolioSection;