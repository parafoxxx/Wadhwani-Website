"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "./useInView";

export default function Partnerships() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const partners = [
    {
      category: "Founding Partner",
      institutions: [
        {
          name: "Wadhwani Foundation",
          href: "https://www.wfglobal.org/",
        },
      ],
    },
    {
      category: "IITK Ecosystem Centers",
      institutions: [
        {
          name: "Gangwal School of Medical Sciences and Technology (GSMST)",
          href: "https://gsmst.iitk.ac.in/",
        },
        {
          name: "Med Tech Innovation Ecosystem",
          href: "https://www.iitk.ac.in/medtech/",
        },
        {
          name: "National Centre for Flexible Electronics (FlexE)",
          href: "https://www.iitk.ac.in/scdt/Course//index.html",
        },
        {
          name: "C3i Hub",
          href: "https://c3ihub.org/",
        },
        {
          name: "Centre for Development of Intelligent Systems (CDIS)",
          href: "https://www.iitk.ac.in/new/cdis",
        },
        {
          name: "Startup Incubation and Innovation Centre (SIIC)",
          href: "https://siicincubator.com/",
        },
      ],
    },
    {
      category: "Research Infrastructure",
      institutions: [
        {
          name: "Central Experimental Animal Facility (CEAF)",
          href: "https://www.iitk.ac.in/dord/project/ceaf-apm-24-12-20.html",
        },
        {
          name: "Biological Sciences and Bioengineering (BSBE)",
          href: "https://www.iitk.ac.in/bsbe/",
        },
        {
          name: "Chemistry Department",
          href: "https://www.iitk.ac.in/chm/",
        },
        {
          name: "Computer Science and Engineering (CSE)",
          href: "https://cse.iitk.ac.in/",
        },
      ],
    },
  ];

  return (
    <section
      id="partnerships"
      className="surface-gradient relative overflow-hidden bg-background px-5 py-20 sm:px-6 md:py-24 lg:px-12"
      ref={ref}
    >
      <div className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full bg-[#F68721]/8 blur-3xl"></div>
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
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-8 h-1 bg-[#F68721]"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            WCTRI is anchored by the Wadhwani Foundation and embedded in the IIT Kanpur ecosystem,
            leveraging institutional centers and shared research infrastructure.
          </p>
        </motion.div>

        <div className="space-y-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <h3 className="text-sm uppercase tracking-wider text-accent font-medium mb-6">
                {partner.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partner.institutions.map((institution, institutionIndex) => (
                  <motion.a
                    key={institution.name}
                    href={institution.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: index * 0.1 + institutionIndex * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group surface-gradient-soft relative flex min-h-28 items-center justify-center overflow-hidden border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F68721] transition-transform duration-300 group-hover:scale-x-100"></div>
                    <span className="pr-5 text-center text-sm font-medium leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                      {institution.name}
                    </span>
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-muted-foreground/70 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
