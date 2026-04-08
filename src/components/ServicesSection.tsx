import { useState } from "react";

const services = [
  { name: "Custom Web Development", price: "Mulai Rp5jt", desc: "Solusi fullstack menggunakan React, Next.js, dan database modern." },
  { name: "UI/UX Design & Audit", price: "Mulai Rp2jt", desc: "Desain antarmuka yang intuitif dan riset pengalaman pengguna." },
  { name: "Mobile App Development", price: "Mulai Rp8jt", desc: "Aplikasi Android/iOS menggunakan React Native atau Flutter." },
  { name: "Maintenance & SEO", price: "Mulai Rp1jt", desc: "Optimasi performa halaman dan pengelolaan berkala." },
];

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan website?",
    a: "Tergantung kompleksitas, biasanya landing page memakan waktu 1-2 minggu, sedangkan sistem custom bisa 4-8 minggu."
  },
  {
    q: "Apakah saya mendapatkan akses kode sumber (source code)?",
    a: "Ya, setelah pelunasan, seluruh source code akan diserahkan melalui repositori GitHub pribadi Anda."
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Sistem termin: DP 40% di awal, 30% saat progress development mencapai 50%, dan 30% sisanya saat handover."
  }
];

const ServicesSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* SERVICES HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-bold">Pricing & Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.1]">Investasi untuk <br /><em className="italic text-muted-foreground">Digital Presence</em> Anda</h2>
          </div>
          <button
            onClick={() => scrollTo("kontak")}
            className="w-fit bg-foreground text-background px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
          >
            Jadwalkan Konsultasi
          </button>
        </div>

        {/* SERVICES LIST */}
        <div className="mb-24">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group flex flex-col md:flex-row md:justify-between md:items-center py-8 border-t border-border last:border-b hover:bg-muted/30 transition-colors px-4"
            >
              <div className="mb-2 md:mb-0">
                <p className="text-[10px] text-muted-foreground mb-1 font-mono">0{i + 1}</p>
                <h3 className="font-heading text-2xl md:text-3xl">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-sm">{s.desc}</p>
              </div>
              <span className="font-heading text-xl md:text-3xl text-primary md:text-foreground group-hover:text-primary transition-colors">
                {s.price}
              </span>
            </div>
          ))}
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl mb-2">Pertanyaan Umum</h3>
            <p className="text-muted-foreground text-sm">Semua yang perlu Anda ketahui tentang proses kerja saya.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-border rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-sm md:text-base pr-8">{faq.q}</span>
                  <svg 
                    width="12" height="12" viewBox="0 0 12 12" fill="none" 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;