"use client";

import { color, motion } from "framer-motion";
import { useInView } from "./useInView";

export default function ResearchCards() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const cards = [
    {
      title: "AI in Healthcare & Biomedical Research",
      description: "AI-enabled diagnostics, decision support, and translational analytics for healthcare and biomedical research.",
      image: "../../public/Screenshot 2026-02-01 061855.png",
      color: "#723a3a"
      
    },
    {
      title: "Bioengineering & Regenerative Medicine",
      description: "Therapeutics and regenerative solutions for lifestyle diseases, neurodegeneration, and tissue repair.",
      image: "../../public/Screenshot 2026-02-01 061912.png",
      color: "#edd437"
    },
    {
      title: "HealthTech & Medical Device Innovations",
      description: "Translational devices, diagnostics, and validation studies focused on clinical impact.",
      image: "../public/Screenshot 2026-02-01 061943.png",
     color: "#e86195"
    },
    {
      title: "Synthetic Biology & Biomanufacturing",
      description: "Platform technologies and scalable biomanufacturing for next-generation therapeutics.",
      image: "../../public/Screenshot 2026-02-01 062001.png",
      color: "#ec2626"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-5 sm:px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Featured Focus Areas</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Innovation in Action
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full border border-border bg-card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-white flex items-center justify-center relative">

                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                    // style={{ backgroundColor: card.color }}
                  ></div>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div 
                    className="w-12 h-1 mb-4"
                    style={{ backgroundColor: card.color }}
                  ></div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
