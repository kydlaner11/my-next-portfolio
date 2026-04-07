const services = [
  { name: "Rias Pengantin", price: "Rp3.000.000" },
  { name: "Rias Wajah Acara", price: "Rp600.000" },
  { name: "Pemotretan", price: "Rp400.000" },
];

const ServicesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <p className="text-sm font-semibold">Layanan saya</p>
          <button
            onClick={() => scrollTo("kontak")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            jadwalkan konsultasi
          </button>
        </div>
        <div className="space-y-0">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex justify-between items-center py-5 border-t border-foreground/15"
            >
              <span className="font-heading text-2xl md:text-3xl">{s.name}</span>
              <span className="font-heading text-2xl md:text-3xl">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
