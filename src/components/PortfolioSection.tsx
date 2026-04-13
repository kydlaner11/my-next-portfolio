import { useNavigate } from "react-router-dom";
import bridalImg from "@/assets/bridal.jpg";
import eventImg from "@/assets/event.jpg";
import trackingImg from "@/assets/portfoliodetail/portone/tracking.png";
import editorialImg from "@/assets/editorial.jpg";
import everydayImg from "@/assets/everyday.jpg";

const portfolios = [
  {
    slug: "tracking-system",
    title: "System Tracking",
    tag: "Fullstack",
    desc: "logistics and data monitoring system",
    img: trackingImg,
  },
];

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section id="karya" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - More Minimalist & Bold */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                Selected Works
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tighter">
              Done <br /> <span className="text-muted-foreground italic">Projects</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
              {portfolios.length} FEATURED PROJECTS
            </span>
          </div>
        </div>

        {/* Grid - Clean Minimalist style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {portfolios.map((item) => (
            <div 
              key={item.slug}
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${item.slug}`)}
            >
              {/* Image Container with cleaner hover effect */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle dark tint on hover only */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Floating Arrow Icon */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-background flex items-center justify-center rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Info Area - Placed Outside for "Tegas" look */}
              <div className="space-y-2 px-1">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase text-primary bg-primary/5 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-bold border-b border-foreground/20 pb-0.5 group-hover:border-primary transition-colors uppercase tracking-widest">
                    Explore Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <button 
          onClick={() => navigate("/portfolio")} // Arahkan ke page baru ini
          className="group flex items-center gap-4 border border-border px-12 py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Explore All Projects
          <div className="relative overflow-hidden w-4 h-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="absolute group-hover:translate-x-6 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="absolute -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;