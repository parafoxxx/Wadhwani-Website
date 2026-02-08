"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Partnerships() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const partners = [
    {
      category: "Founding Partner",
      institutions: ["Wadhwani Foundation"],
    },
    {
      category: "IITK Ecosystem Centers",
      institutions: [
        "Gangwal School of Medical Sciences and Technology (GSMST)",
        "Med Tech Innovation Ecosystem",
        "National Centre for Flexible Electronics (FlexE)",
        "C3i Hub",
        "Centre for Development of Intelligent Systems (CDIS)",
        "Startup Incubation and Innovation Centre (SIIC)"
      ],
    },
    {
      category: "Research Infrastructure",
      institutions: [
        "Central Experimental Animal Facility (CEAF)",
        "Biological Sciences and Bioengineering (BSBE)",
        "Chemistry Department",
        "Computer Science and Engineering (CSE)"
      ],
    },
  ];

  return (
    <section id="partnerships" className="py-20 md:py-32 px-5 sm:px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Partnerships</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Ecosystem Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            WCTRI is anchored by the Wadhwani Foundation and embedded in the IIT Kanpur ecosystem,
            leveraging institutional centers and shared research infrastructure.
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
