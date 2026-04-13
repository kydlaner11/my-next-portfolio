import { motion } from "framer-motion";

const services = [
  {
    name: "Custom Web Development",
    price: "From $350",
    desc: "Fullstack solutions leveraging React, Next.js, and modern cloud databases for high-performance applications.",
  },
  {
    name: "UI/UX Design & Audit",
    price: "From $150",
    desc: "User-centric interface design focused on conversion, accessibility, and intuitive digital experiences.",
  },
  {
    name: "Mobile App Development",
    price: "From $550",
    desc: "Native-feel cross-platform applications built with React Native or Flutter for iOS and Android.",
  },
  {
    name: "Maintenance & SEO",
    price: "From $75",
    desc: "Performance monitoring, technical SEO optimization, and periodic security updates to keep your site ahead.",
  },
];

const ServicesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-6 bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                Strategic Value
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tighter">
              Services & <br />
              <em className="italic text-black/20">Pricing</em>
            </h2>
          </div>
          <button
            onClick={() => scrollTo("kontak")}
            className="w-fit bg-black text-white px-10 py-4 rounded-full text-[11px] font-semibold tracking-widest uppercase hover:bg-primary transition-all active:scale-95"
          >
            Schedule a Briefing
          </button>
        </div>

        {/* Services List */}
        <div>
          {services.map((s, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={s.name}
              className="group flex flex-col md:grid md:grid-cols-12 py-10 border-t border-black/10 last:border-b hover:bg-black/[0.01] transition-all px-4"
            >
              <div className="col-span-1 text-[10px] font-mono text-muted-foreground mb-4 md:mb-0">
                0{i + 1}
              </div>
              <div className="col-span-7 pr-8">
                <h3 className="font-heading text-2xl md:text-4xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{s.desc}</p>
              </div>
              <div className="col-span-4 flex md:justify-end items-center mt-6 md:mt-0">
                <span className="font-heading text-2xl md:text-4xl tracking-tighter">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;