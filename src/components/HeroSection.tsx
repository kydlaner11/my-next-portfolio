import heroImg from "@/assets/hero1.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-20 flex flex-col items-center text-center px-6 overflow-hidden">
      {/* Background Decorative Text / Blur */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 blur-[120px] bg-primary/30 rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Label Kecil */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            Available for New Projects 2026
          </span>
        </div>

        {/* Main Heading */}
        <h3 className="font-heading text-lg md:text-2xl tracking-tight mb-4">
          HI! I'M <em className="italic font-normal text-muted-foreground">MICKAEL</em><br />
        </h3>
        <h1 className="font-heading text-[clamp(3rem,12vw,9rem)] font-normal leading-[0.9] tracking-tighter mb-10">
          <span className="text-primary">FULLSTACK</span> DEV
        </h1>

        {/* Image Container with Parallax-like feel */}
        <div className="relative w-full max-w-6xl mx-auto group">
          <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-transparent rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl border border-white/5">
            <img
              src={heroImg}
              alt="Mickael - Website Developer Portfolio"
              className="w-full h-[300px] md:h-[550px] object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Floating Stats / Info */}
          <div className="absolute -bottom-6 -right-4 md:right-10 bg-background border border-border p-4 md:p-6 rounded-2xl shadow-xl hidden sm:block">
            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Based in</p>
            <p className="text-sm font-semibold italic">Sidoarjo, Indonesia</p>
          </div>
        </div>

        {/* Subtext & CTA */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col items-center">
          <p className="hidden md:block text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Crafting digital experiences that bridge the gap between information system 
            functionality and modern design aesthetics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => scrollTo("kontak")}
              className="group relative bg-foreground text-background px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="relative z-10">Start Consultation</span>
            </button>
            
            <button
              onClick={() => scrollTo("karya")}
              className="px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase border border-border hover:bg-muted transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;