"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function People() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const leadership = [
    {
      name: "Prof. Ashok Kumar",
      title: "CoE Coordinator, WCTRI (BSBE)",
      expertise: "Coordinates CoE activities, monitors research progress, and reports to the Wadhwani Foundation.",
    },
    {
      name: "Dr. Sandeep Verma",
      title: "Program Co-coordinator, Bioengineering & Biotech",
      expertise: "Leads the bioengineering and biotech focus area and WIN project coordination.",
    },
    {
      name: "Dr. Tushar Sandhan",
      title: "Program Co-coordinator, Artificial Intelligence",
      expertise: "Leads the AI focus area and WIN project coordination.",
    },
    {
      name: "Program Managers (2 per theme)",
      title: "Program Managers",
      expertise: "Portfolio execution, investigator coordination, reporting, and seed-funding outreach.",
    },
    {
      name: "Communication & Outreach Manager",
      title: "Partnerships and Outreach",
      expertise: "Stakeholder engagement, workshops, and national and international collaboration networks.",
    },
    {
      name: "Support Staff",
      title: "Operations Support",
      expertise: "Records maintenance, office support, and operational coordination.",
    },
  ];

  return (
    <section id="people" className="py-20 md:py-32 px-5 sm:px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">People</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Leadership & Coordination
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            WCTRI is led by IIT Kanpur faculty and program coordinators supported by dedicated
            program management and outreach roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadership.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-secondary border border-border"></div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-2">{person.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {person.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
