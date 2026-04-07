import { useState } from "react";

type FormState = {
  nama: string;
  email: string;
  layanan: string;
  tanggal: string;
  detail: string;
};

const layananOptions = [
  "Makeup Pengantin",
  "Makeup Acara / Event",
  "Makeup Editorial",
  "Makeup Sehari-hari",
  "Lainnya",
];

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({
    nama: "",
    email: "",
    layanan: "",
    tanggal: "",
    detail: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
          Hubungi Saya
        </p>

        {/* Heading full-width */}
        <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-14 max-w-2xl">
          Dari resepsi pernikahan hingga malam istimewa — mari tampil memukau bersama.
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">

          {/* Form — left, wider */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="font-heading text-2xl">Pesan terkirim!</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Terima kasih, <span className="text-foreground font-medium">{form.nama}</span>. Saya akan menghubungi kamu dalam 1×24 jam.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nama: "", email: "", layanan: "", tanggal: "", detail: "" }); }}
                  className="mt-2 text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kirim pesan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nama & Email row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Nama Lengkap
                    </label>
                    <input
                      name="nama"
                      required
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="Budi Santoso"
                      className="w-full border-b border-foreground/20 bg-transparent py-2.5 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                      Alamat Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="kamu@email.com"
                      className="w-full border-b border-foreground/20 bg-transparent py-2.5 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Layanan chips */}
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3">
                    Jenis Layanan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {layananOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, layanan: opt })}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                          form.layanan === opt
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-foreground/20 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tanggal */}
                <div className="group">
                  <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Tanggal Acara
                  </label>
                  <input
                    name="tanggal"
                    type="date"
                    value={form.tanggal}
                    onChange={handleChange}
                    className="w-full border-b border-foreground/20 bg-transparent py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-muted-foreground focus:text-foreground"
                  />
                </div>

                {/* Detail */}
                <div className="group">
                  <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                    Ceritakan lebih lanjut
                  </label>
                  <textarea
                    name="detail"
                    value={form.detail}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Lokasi acara, jumlah orang, referensi makeup, atau pertanyaan lainnya..."
                    className="w-full border-b border-foreground/20 bg-transparent py-2.5 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150"
                >
                  Kirim Pesan
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right — info sidebar */}
          <div className="md:col-span-2 flex flex-col gap-8 md:pt-2">

            {/* Tagline */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jadikan diri Anda bersinar. Tidak perlu ragu — konsultasi pertama gratis dan tanpa kewajiban.
            </p>

            <div className="h-px bg-border" />

            {/* Kontak langsung */}
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Atau hubungi langsung
              </p>

              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.529 5.855L.057 23.04a.75.75 0 0 0 .916.919l5.332-1.453A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.743 9.743 0 0 1-4.95-1.349l-.354-.21-3.668.999 1.025-3.574-.23-.368A9.712 9.712 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">+62 812-3456-789</p>
                </div>
              </a>

              <a
                href="mailto:salma@example.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">salma@example.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Instagram</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">@salmafriani</p>
                </div>
              </a>
            </div>

            <div className="h-px bg-border" />

            {/* Response time note */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Biasanya membalas dalam <span className="text-foreground font-medium">1×24 jam</span>. Untuk kebutuhan mendesak, hubungi langsung via WhatsApp.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;