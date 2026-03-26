"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function People() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const leadership = [
    {
      name: "Prof. Ashok Kumar",
      title: "CoE Coordinator, WCTRI (BSBE)",
      email: "ashokkum@iitk.ac.in",
      expertise: "Coordinates CoE activities, monitors research progress, and reports to the Wadhwani Foundation.",
      image: "/ashok-kumar-profile.jpg",
    },
    {
      name: "Dr. Sandeep Verma",
      title: "Program Co-coordinator, Computer Science & AI",
      expertise: "Leads the bioengineering and biotech focus area and WIN project coordination.",
    },
    {
      name: "Dr. Prerna Singh",
      title: "Program Co-coordinator, Bioengineering & Biotech",
      email: "prernas@iitk.ac.in",
      expertise: "Program Manager",
      image: "/prerna.jpg",
    },
    {
      name: "Dr. Ekta Srivastava",
      title: "Program Co-coordinator, Bioengineering & Biotech",
      email: "ektasr@iitk.ac.in",
      expertise: "Program Manager",
      image: "/ekta.jpg",
    },
  ];

  return (
    <section id="people" className="surface-gradient-soft py-20 md:py-24 px-5 sm:px-6 lg:px-12 bg-card" ref={ref}>
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
              whileHover={{ y: -4 }}
              className="group text-center transition-transform duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-secondary shadow-md relative overflow-hidden">
                <motion.div
                  className="absolute inset-x-0 top-0 h-1 bg-[#F68721]"
                  initial={{ scaleX: 0.35, transformOrigin: "left" }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.1 + 0.15 }}
                />
                {"image" in person && person.image ? (
                  <motion.img
                    src={person.image}
                    alt={person.name}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-2">{person.title}</p>
              {"email" in person && person.email ? (
                <motion.p
                  initial={{ opacity: 0.85 }}
                  whileHover={{ opacity: 1 }}
                  className="text-sm text-muted-foreground mb-2 transition-colors duration-300 group-hover:text-foreground"
                >
                  {person.email}
                </motion.p>
              ) : null}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {person.expertise}
              </p>
              {"interests" in person && person.interests ? (
                <div className="mt-4 text-left">
                  <p className="text-sm font-medium text-primary mb-2">Areas of interest:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {person.interests.map((interest) => (
                      <li key={interest} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
