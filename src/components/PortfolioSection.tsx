import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bridalImg from "@/assets/bridal.jpg";
import eventImg from "@/assets/event.jpg";
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
    title: "Siap Acara",
    tag: "Event",
    desc: "Tampilan profesional untuk acara spesial",
    img: eventImg,
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
];

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="karya" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight max-w-sm">
            Penampilan untuk<br />setiap kesempatan
          </h2>
          <span className="text-xs text-muted-foreground tracking-widest uppercase hidden md:block">
            {portfolios.length} Kategori
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {portfolios.map((item, i) => {
            const isTall = i === 0 || i === 3; // row-span untuk variasi tinggi
            return (
              <button
                key={item.slug}
                onClick={() => navigate(`/portfolio/${item.slug}`)}
                onMouseEnter={() => setHovered(item.slug)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${isTall ? "md:row-span-2" : ""}`}
                style={{ aspectRatio: isTall ? undefined : "4/5" }}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ height: isTall ? "100%" : undefined }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">
                    {item.tag}
                  </span>
                </div>

                {/* Text bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <p className="text-white font-heading text-base md:text-lg font-semibold leading-tight mb-0.5">
                    {item.title}
                  </p>
                  <p
                    className="text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;