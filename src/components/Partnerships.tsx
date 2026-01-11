"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Partnerships() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const partners = [
    {
      category: "Global Universities",
      institutions: ["MIT", "Stanford University", "Oxford University", "ETH Zurich"],
    },
    {
      category: "Industry Leaders",
      institutions: ["Tata Group", "Infosys", "Reliance Industries", "Microsoft"],
    },
    {
      category: "Government Bodies",
      institutions: ["NITI Aayog", "Department of Science & Technology", "MEITY"],
    },
  ];

  return (
    <section id="partnerships" className="py-32 px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Partnerships</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Global Collaborations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            We maintain strategic partnerships with leading universities, corporations, and 
            government organizations to amplify our impact and facilitate knowledge exchange.
          </p>
        </motion.div>

        <div className="space-y-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm uppercase tracking-wider text-accent font-medium mb-6">
                {partner.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partner.institutions.map((institution, idx) => (
                  <div
                    key={idx}
                    className="h-24 border border-border bg-card flex items-center justify-center p-4 hover:border-accent transition-colors"
                  >
                    <span className="text-sm text-center text-muted-foreground font-medium">
                      {institution}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
