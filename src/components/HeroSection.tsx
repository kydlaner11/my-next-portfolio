import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-16 flex flex-col items-center text-center px-6">
      <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mt-8 mb-6">
        CANTIK SEGAR
      </h1>
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl mb-8">
        <img
          src={heroImg}
          alt="Makeup artist portfolio hero"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
      <button
        onClick={() => scrollTo("kontak")}
        className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        jadwalkan konsultasi
      </button>
    </section>
  );
};

export default HeroSection;
