import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { 
    name: "Custom Web Development", 
    price: "From $350", 
    desc: "Fullstack solutions leveraging React, Next.js, and modern cloud databases for high-performance applications." 
  },
  { 
    name: "UI/UX Design & Audit", 
    price: "From $150", 
    desc: "User-centric interface design focused on conversion, accessibility, and intuitive digital experiences." 
  },
  { 
    name: "Mobile App Development", 
    price: "From $550", 
    desc: "Native-feel cross-platform applications built with React Native or Flutter for iOS and Android." 
  },
  { 
    name: "Maintenance & SEO", 
    price: "From $75", 
    desc: "Performance monitoring, technical SEO optimization, and periodic security updates to keep your site ahead." 
  },
];

const faqs = [
  {
    q: "What is the typical project timeline?",
    a: "Timelines vary by complexity. A high-converting landing page usually takes 1-2 weeks, while complex custom systems or MVP developments can span 4-8 weeks."
  },
  {
    q: "Will I own the source code?",
    a: "Absolutely. Upon final payment, full ownership and access to the source code will be transferred via a private GitHub repository."
  },
  {
    q: "How does the payment structure work?",
    a: "I follow a milestone-based system: 40% initial deposit, 30% after the development milestone, and the remaining 30% upon final handover."
  }
];

const ServicesSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-6 bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* SERVICES HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">Strategic Value</span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tighter">
              Services & <br /><em className="italic text-black/20">Pricing</em>
            </h2>
          </div>
          <button
            onClick={() => scrollTo("kontak")}
            className="w-fit bg-black text-white px-10 py-4 rounded-full text-[11px] font-semibold tracking-widest uppercase hover:bg-primary transition-all active:scale-95"
          >
            Schedule a Briefing
          </button>
        </div>

        {/* SERVICES LIST */}
        <div className="mb-32">
          {services.map((s, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={s.name}
              className="group flex flex-col md:grid md:grid-cols-12 py-10 border-t border-black/10 last:border-b hover:bg-black/[0.01] transition-all px-4"
            >
              <div className="col-span-1 text-[10px] font-mono text-muted-foreground mb-4 md:mb-0">0{i + 1}</div>
              <div className="col-span-7 pr-8">
                <h3 className="font-heading text-2xl md:text-4xl tracking-tight mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{s.desc}</p>
              </div>
              <div className="col-span-4 flex md:justify-end items-center mt-6 md:mt-0">
                <span className="font-heading text-2xl md:text-4xl tracking-tighter">
                  {s.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto pt-20 border-t border-black/5">
          <div className="flex flex-col items-center text-center mb-16">
            <h3 className="font-heading text-4xl md:text-5xl tracking-tighter mb-4">FAQ</h3>
            <p className="text-muted-foreground text-sm font-medium tracking-tight">Everything you need to know about the partnership and technical workflow.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-black/5 rounded-2xl overflow-hidden bg-muted/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-7 text-left hover:bg-white transition-all"
                >
                  <span className="font-heading text-lg md:text-xl tracking-tight pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-transform duration-500 ${openFaq === index ? 'rotate-180 bg-black text-white' : ''}`}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-8">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;