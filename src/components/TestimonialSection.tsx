import testimonialImg from "@/assets/testimonial.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold mb-10">Testimoni klien</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl mb-4 leading-snug">
              Foto-fotoku hasilnya sempurna.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Saya menggunakan layanan <em>Makeup</em> Segar untuk sesi foto profesional. Riasan
              wajahku terlihat indah saat difoto, tetapi tidak terasa berat di wajah.
            </p>
            <p className="text-sm font-semibold">Jana Maria H.</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={testimonialImg}
              alt="Testimoni klien"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
