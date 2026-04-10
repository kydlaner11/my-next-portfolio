import { useState } from "react";

type FormState = {
  nama: string;
  email: string;
  layanan: string;
  budget: string;
  detail: string;
};

const layananOptions = [
  "Web Development",
  "UI/UX Design",
  "Mobile App",
  "Maintenance",
  "Lainnya",
];

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({
    nama: "",
    email: "",
    layanan: "",
    budget: "",
    detail: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Persiapkan data untuk dikirim ke Web3Forms
    const formData = new FormData();
    formData.append("access_key", "384a4c47-bc2f-41c7-ba7a-55c245b11788"); // Ganti dengan key kamu
    formData.append("name", form.nama);
    formData.append("email", form.email);
    formData.append("service", form.layanan || "Not Selected");
    formData.append("budget", form.budget || "Not Specified");
    formData.append("message", form.detail);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // Reset form setelah sukses
        setForm({ nama: "", email: "", layanan: "", budget: "", detail: "" });
      } else {
        alert("Terjadi kesalahan: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Form — left */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-10 border border-dashed border-primary/30 px-8 rounded-lg animate-in fade-in zoom-in duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-2xl mb-2">Message Received!</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Data kamu sudah masuk ke sistem. Saya akan meninjau detail proyekmu segera.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
                >
                  Kirim pesan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Nama Kamu
                    </label>
                    <input
                      name="nama"
                      required
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="e.g. Alex Doe"
                      className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/30 transition-colors"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Alamat Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-4">
                    Apa yang ingin kamu bangun?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {layananOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, layanan: opt })}
                        className={`px-5 py-2 rounded-full text-[11px] font-semibold border transition-all duration-300 ${
                          form.layanan === opt
                            ? "bg-foreground text-background border-foreground"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Estimasi Budget (Optional)
                  </label>
                  <select 
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors text-muted-foreground"
                  >
                    <option value="">Pilih Range Budget</option>
                    <option value="small">{"<"} Rp 5 Juta</option>
                    <option value="medium">Rp 5 - 15 Juta</option>
                    <option value="large">Rp 15 Juta +</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Detail Proyek
                  </label>
                  <textarea
                    name="detail"
                    required
                    value={form.detail}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ceritakan sedikit tentang tujuan bisnismu atau fitur yang kamu inginkan..."
                    className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 bg-foreground text-background px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Start Project"}
                  {!isSubmitting && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — Sidebar */}
          <div className="md:col-span-2 space-y-12 md:pt-4">
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase">Kontak Informasi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tersedia untuk proyek freelance dan kolaborasi tim. <br />
                Mari diskusikan bagaimana saya bisa membantu bisnis Anda tumbuh lebih cepat.
              </p>
            </div>

            <div className="space-y-6">
               <a href="https://www.instagram.com/mickael.naldy" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-[#E4405F] group-hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a href="https://linkedin.com/in/mickaelrenaldy" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>

              <a href="mailto:mickaelg566@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:bg-foreground group-hover:text-background transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">mickaelg566@gmail.com</span>
              </a>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg space-y-2 border border-border/50">
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary">Availability</p>
              <p className="text-xs text-muted-foreground italic">
                Saat ini saya menerima proyek baru untuk kuartal ke-2 2026.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;