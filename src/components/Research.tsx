"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Research() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const domains = [
    {
      title: "Bioengineering & Biotech (Therapeutics)",
      description: "Lifestyle diseases, neurodegenerative disorders, mental health, regenerative therapies, drug delivery, antivirals, and antimicrobial resistance.",
    },
    {
      title: "AI for Healthcare & Biomedical Research",
      description: "AI-driven diagnostics and translational analytics to accelerate healthcare innovation and personalized therapies.",
    },
    {
      title: "AI for Cybersecurity & Digital Public Infrastructure",
      description: "AI-enabled governance and security for digital public infrastructure and mission-critical systems.",
    },
    {
      title: "AI for Agriculture & Energy",
      description: "Applied AI for agriculture productivity, energy systems, and sustainability-focused operations.",
    },
    {
      title: "AI for Mobility, Supply Chain & Infrastructure",
      description: "AI applications for mobility, infrastructure resilience, and supply-chain optimization.",
    },
    {
      title: "Translational Validation & Commercialization",
      description: "TRL 4+ technologies, validation studies for devices and diagnostics, and pathways from lab to market.",
    },
  ];

  return (
    <section id="research" className="py-20 md:py-28 px-5 sm:px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Focus Areas</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            WCTRI Research Priorities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            WCTRI at IIT Kanpur concentrates on bioengineering, biotechnology, and artificial intelligence
            with a strong translational pathway from research to commercialization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-accent pl-6 py-2"
            >
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {domain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
