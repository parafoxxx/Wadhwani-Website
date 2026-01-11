"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function People() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const leadership = [
    {
      name: "Prof. Rajesh Sharma",
      title: "Director",
      expertise: "Innovation Strategy, Technology Management",
    },
    {
      name: "Prof. Anita Mehta",
      title: "Head of Research",
      expertise: "Artificial Intelligence, Data Science",
    },
    {
      name: "Prof. Vikram Patel",
      title: "Head of Executive Education",
      expertise: "Leadership Development, Organizational Behavior",
    },
    {
      name: "Dr. Priya Desai",
      title: "Head of Entrepreneurship",
      expertise: "Venture Capital, Startup Ecosystems",
    },
    {
      name: "Prof. Arun Kumar",
      title: "Distinguished Fellow",
      expertise: "Operations Research, Supply Chain Management",
    },
    {
      name: "Dr. Meera Singh",
      title: "Research Fellow",
      expertise: "Sustainable Technology, Energy Systems",
    },
  ];

  return (
    <section id="people" className="py-32 px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">People</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Faculty & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            Our distinguished faculty bring deep expertise, global perspectives, and a commitment 
            to excellence in teaching, research, and mentorship.
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
