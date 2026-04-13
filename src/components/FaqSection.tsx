import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  // {
  //   q: "What is the cost of a typical website project?",
  //   a: "Prices start at $350. It varies based on the project's goals, complexity, and deliverables. I offer milestone-based payment so you stay in control throughout the process.",
  // },
  {
    q: "How long does a typical website project take?",
    a: "It can take anywhere from 1 week to 8 weeks, depending on the project scope and deliverables. A simple landing page is usually 1–2 weeks; complex fullstack systems take longer.",
  },
  {
    q: "Will I own the source code?",
    a: "Absolutely. Upon final payment, full ownership and access to the source code will be transferred via a private GitHub repository.",
  },
  {
    q: "How does the payment structure work?",
    a: "I follow a milestone-based system: 40% initial deposit, 30% after the development milestone, and the remaining 30% upon final handover.",
  },
  {
    q: "What do you need from me to get started?",
    a: "I'll need the details about your brand through a brief questionnaire and any brand collaterals uploaded to a shared Google Drive folder. I'll go over everything before the project begins.",
  },
  {
    q: "Do you offer ongoing support after the project?",
    a: "Yes. I provide post-project technical support right after the project is completed, and if needed, we can discuss an ongoing maintenance partnership.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-32 px-6 bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
            FAQs
          </span>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-20">
          Frequently asked <br />
          <em className="italic text-black/20">questions</em>
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-3 max-w-7xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-black/[0.07] rounded-2xl overflow-hidden bg-muted/20"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left hover:bg-white transition-all"
              >
                <span className="font-heading text-lg md:text-xl tracking-tight pr-8">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-black text-white border-black rotate-45"
                      : "bg-transparent text-black"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2V10M2 6H10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <div className="px-7 pb-7 pt-1">
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
    </section>
  );
};

export default FaqSection;