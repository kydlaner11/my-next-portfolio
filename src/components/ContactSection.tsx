import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ nama: "", email: "", pertanyaan: "", detail: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontak" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold mb-1">Nama</label>
            <input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full border-b border-foreground/30 bg-transparent py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Alamat email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-foreground/30 bg-transparent py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Pertanyaan</label>
            <input
              name="pertanyaan"
              value={form.pertanyaan}
              onChange={handleChange}
              className="w-full border-b border-foreground/30 bg-transparent py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Detail</label>
            <textarea
              name="detail"
              value={form.detail}
              onChange={handleChange}
              rows={3}
              className="w-full border border-foreground/30 rounded-md bg-transparent p-2 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Kirim
          </button>
        </form>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold mb-3">Jadikan diri Anda bersinar</p>
          <h2 className="font-heading text-3xl md:text-4xl leading-snug">
            Mulai dari resepsi pernikahan hingga pesta malam, saya akan membantu Anda tampil selalu cantik.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
