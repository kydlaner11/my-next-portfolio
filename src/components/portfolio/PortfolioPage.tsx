import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mockup images - ganti dengan asset aslimu
import img1 from "@/assets/portfoliodetail/portone/tracking-hero.png";
import img2 from "@/assets/portfoliodetail/portone/tracking.png";
import img3 from "@/assets/portfoliodetail/portone/tracking-1.png";

const allPortfolios = [
  { 
    year: "2026", 
    slug: "tracking-system", 
    title: "Tracking Truck System", 
    tag: "Fullstack", 
    stack: ["PHP", "JavaScript", "Leaflet.js", "MySQL"], 
    images: [img1, img2, img3] // Ganti dengan 3 screenshot project terkait
  },
  // ... tambahkan images untuk data lainnya
];

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (slug: string, e: React.MouseEvent) => {
    // Jika klik pada tombol panah/link, langsung navigasi
    if ((e.target as HTMLElement).closest('.nav-action')) {
      navigate(`/portfolio/${slug}`);
      return;
    }
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-32">
          <button 
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors mb-20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Return to Base
          </button>
          
          <h1 className="font-heading text-7xl md:text-9xl leading-[0.8] tracking-tighter mb-8">
            PROJECTS<br />
            <span className="text-black/10 italic">ARCHIVE</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed font-medium">
            A comprehensive index of technical products and system architectures. Click a project to preview details.
          </p>
        </header>

        {/* List Section */}
        <div className="border-t border-black/10">
          <div className="flex flex-col">
            {allPortfolios.map((project, i) => {
              const isExpanded = expandedSlug === project.slug;

              return (
                <div key={project.slug} className="border-b border-black/5">
                  {/* Main Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => toggleExpand(project.slug, e)}
                    className={`group grid grid-cols-1 md:grid-cols-12 items-center py-10 px-4 transition-all cursor-pointer ${isExpanded ? "bg-black/[0.02]" : "hover:bg-black/[0.01]"}`}
                  >
                    <div className="col-span-1 text-xs font-mono text-muted-foreground">{project.year}</div>
                    <div className="col-span-5">
                      <h3 className={`text-2xl md:text-4xl font-heading tracking-tight transition-all ${isExpanded ? "text-primary ml-2" : "group-hover:ml-2"}`}>
                        {project.title}
                      </h3>
                    </div>
                    <div className="col-span-2 hidden md:block">
                      <span className="text-[10px] font-bold tracking-widest uppercase border border-black/10 px-2 py-1 rounded">
                        {project.tag}
                      </span>
                    </div>
                    <div className="col-span-3 hidden md:flex flex-wrap gap-2 text-muted-foreground font-mono text-[11px]">
                      {project.stack.join(" / ")}
                    </div>
                    <div className="col-span-1 text-right flex justify-end">
                      <button className="nav-action w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </motion.div>

                  {/* Animation Expansion */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden bg-black/[0.02]"
                      >
                        <div className="px-4 pb-12 pt-2">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.images?.map((img, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="aspect-video bg-white rounded-lg overflow-hidden border border-black/5 shadow-sm group/img"
                              >
                                <img 
                                  src={img} 
                                  alt="preview" 
                                  className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500 scale-105 group-hover/img:scale-100" 
                                />
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex justify-between items-end"
                          >
                             <p className="text-xs text-muted-foreground max-w-sm">
                               Detailed case study includes system architecture, database schema, and performance optimization logs.
                             </p>
                             <button 
                               onClick={() => navigate(`/portfolio/${project.slug}`)}
                               className="text-[10px] font-semibold tracking-widest uppercase border-b-2 border-primary pb-1"
                             >
                               Read Full Documentation
                             </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-40 pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="font-heading text-2xl tracking-tighter text-center md:text-left">
            Ready to integrate <span className="italic text-primary">modern solutions</span> into your business?
          </p>
          <button 
            onClick={() => navigate("/#kontak")}
            className="bg-black text-white px-12 py-5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-primary transition-all active:scale-95 whitespace-nowrap"
          >
            Start a Connection
          </button>
        </footer>
      </div>
    </main>
  );
};

export default PortfolioPage;