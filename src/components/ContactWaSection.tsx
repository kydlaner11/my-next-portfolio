const ContactWaSection = () => {
  const waNumber = "6289524309404"; 
  
  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile App",
    "Maintenance",
    "Lainnya",
  ];

  const handleServiceClick = (service: string) => {
    const message = encodeURIComponent(
      `Halo! Saya tertarik dengan layanan *${service}*. Bisa kita diskusikan lebih lanjut?`
    );
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  const handleDirectContact = () => {
    const message = encodeURIComponent(
      "Halo! Saya ingin berdiskusi tentang proyek bersama kamu."
    );
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Get in Touch
          </p>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-6xl font-normal leading-[1.1] mb-14 max-w-3xl">
          Punya ide luar biasa? <br />
          <em className="italic text-muted-foreground">Mari kita bangun </em> bersama.
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">

          {/* Left — CTA */}
          <div className="md:col-span-3 space-y-10">

            {/* Pilih layanan */}
            {/* <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-4">
                Apa yang ingin kamu bangun?
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleServiceClick(opt)}
                    className="px-5 py-2 rounded-full text-[11px] font-semibold border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground/50 mt-3">
                Pilih layanan untuk langsung chat via WhatsApp
              </p>
            </div> */}

            {/* Divider */}
            {/* <div className="flex items-center gap-4">
              <div className="flex-1 border-t border-border" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                atau
              </span>
              <div className="flex-1 border-t border-border" />
            </div> */}

            {/* Main CTA button */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Ceritakan idemu langsung, saya siap membantu kamu mewujudkan proyek impian.
              </p>
              <button
                type="button"
                onClick={handleDirectContact}
                className="group flex items-center gap-4 bg-foreground text-background px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Chat di WhatsApp
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg space-y-2 border border-border/50">
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary">Availability</p>
              <p className="text-xs text-muted-foreground italic">
                Saat ini saya menerima proyek baru untuk kuartal ke-2 2026.
              </p>
            </div>

          </div>

          {/* Right — Sidebar */}
          <div className="md:col-span-2 space-y-12 md:pt-4">

            {/* <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase">Kontak Informasi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tersedia untuk proyek freelance dan kolaborasi tim. <br />
                Mari diskusikan bagaimana saya bisa membantu bisnis Anda tumbuh lebih cepat.
              </p>
            </div> */}

            <div className="space-y-6">
              <a
                href="https://www.instagram.com/mickael.naldy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-[#E4405F] group-hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://linkedin.com/in/mickaelrenaldy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>

              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

              <a
                href="mailto:mickaelg566@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-foreground group-hover:text-background transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm font-medium">mickaelg566@gmail.com</span>
              </a>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWaSection;