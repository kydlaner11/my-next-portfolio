import aboutImg from "@/assets/about.jpg";
import video from "@/assets/about-video.mp4";

const badges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
      </svg>
    ),
    label: "Clean Code",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    label: "User Centric",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="M2 12h20"/><path d="m19.07 4.93-14.14 14.14"/>
      </svg>
    ),
    label: "Scalable Architecture",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    label: "Modern Stack",
  },
];

const AboutSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tentang" className="py-24 px-6 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">

          {/* Left: Image with Decorative Elements */}
          <div className="md:col-span-2 relative">
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/5] bg-muted shadow-2xl">
                <video
                  autoPlay
                  loop
                  src={video}
                  muted
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Glass Label */}
                <div className="absolute bottom-5 left-5 right-5 bg-background/80 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4 shadow-lg">
                  <p className="font-heading text-primary text-base font-medium tracking-tight">Mickael</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em] font-bold mt-0.5">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 flex flex-col pt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                The Developer behind the code
              </p>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Crafting digital experiences that <em className="italic text-muted-foreground">make a difference</em>
            </h2>

            <div className="space-y-6 text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              <p>
                Hi, I'm <span className="text-foreground font-semibold">Mickael</span> — a Web Developer and Information Systems graduate from Telkom University Surabaya. I bridge the gap between aesthetic design and robust technical performance.
              </p>
              <p>
                My primary focus is building web applications that not only function seamlessly but also provide a memorable user experience. Through my brand, HEALU, I continue to explore the creative potential within the world of digital and technology.
              </p>
            </div>

            {/* Tech-centric Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                  <span className="text-[13px] font-bold tracking-tight">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollTo("karya")}
                className="bg-foreground text-background px-9 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all active:scale-95 shadow-lg shadow-foreground/10"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("kontak")}
                className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors"
              >
                Say Hello 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;