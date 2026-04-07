import aboutImg from "@/assets/about.jpg";

const badges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    label: "Hasil Cepat",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "Fokus pada Klien",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    label: "Kualitas Utama",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    label: "Terus Belajar",
  },
];

const AboutSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tentang" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">

          {/* Left: foto dengan accent shape */}
          <div className="md:col-span-2 relative">
            {/* Decorative accent ring */}
            <div
              className="absolute -top-4 -left-4 w-32 h-32 rounded-full border-2 border-primary/20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
              <img
                src={aboutImg}
                alt="Salma Friani - Makeup Artist"
                className="w-full h-full object-cover"
              />
              {/* Label float di foto */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-2xl px-4 py-3">
                <p className="font-heading text-sm font-semibold leading-tight">Salma Friani</p>
                <p className="text-xs text-muted-foreground mt-0.5">Makeup Artist · Sidoarjo, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right: konten */}
          <div className="md:col-span-3 flex flex-col justify-center pt-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Tentang Saya
            </p>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Saya membuat tampilan yang <em>memecahkan</em> masalah nyata
            </h2>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              <p>
                Halo, saya <span className="text-foreground font-medium">Salma Friani</span> — makeup artist yang memulai dari rasa ingin tahu, tumbuh lewat pengalaman nyata, dan kini belajar sisi bisnis dunia kecantikan.
              </p>
              <p>
                Lahir tahun 2003, berbasis di Indonesia. Saya belajar paling baik dengan melakukan langsung. Saya menyukai hal-hal yang terasa nyata — kecantikan, seni, mode, dan cerita di balik setiap wajah.
              </p>
            </div>

            {/* Badges grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                >
                  <span className="text-primary shrink-0">{b.icon}</span>
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo("karya")}
                className="bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150"
              >
                Lihat Karya
              </button>
              <button
                onClick={() => scrollTo("kontak")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
              >
                Hubungi saya →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;