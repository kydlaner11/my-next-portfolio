import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tentang" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* <p className="text-sm font-medium text-primary mb-4">Tentang saya</p> */}
          <h2 className="font-heading text-3xl md:text-4xl leading-snug mb-6">
            Saya Salma Friani, wajah di balik <em>Makeup</em> Segar. Saya ahli menciptakan
            penampilan yang membuat klien merasa berseri dan percaya diri.
          </h2>
          <button
            onClick={() => scrollTo("karya")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Lihat Project
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-96 rounded-2xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Salma Friani - Makeup Artist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
