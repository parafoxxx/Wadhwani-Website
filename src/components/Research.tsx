"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Research() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const domains = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancing the frontiers of intelligent systems, deep learning architectures, and ethical AI frameworks for real-world applications.",
    },
    {
      title: "Sustainable Technology & Energy Systems",
      description: "Developing innovative solutions for renewable energy, smart grids, and environmentally conscious engineering practices.",
    },
    {
      title: "Digital Transformation & Innovation",
      description: "Exploring emerging technologies, digital business models, and organizational change in the context of Industry 4.0.",
    },
    {
      title: "Entrepreneurship & Venture Development",
      description: "Investigating startup ecosystems, venture financing, and the dynamics of high-growth entrepreneurial ventures.",
    },
    {
      title: "Operations & Supply Chain Excellence",
      description: "Advancing research in logistics optimization, supply chain resilience, and operational efficiency methodologies.",
    },
    {
      title: "Financial Engineering & Risk Management",
      description: "Developing quantitative models, risk assessment frameworks, and financial innovation strategies for complex markets.",
    },
  ];

  return (
    <section id="research" className="py-15 px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Research</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Domains of Inquiry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            Our research spans multiple disciplines, addressing fundamental questions and practical challenges 
            through rigorous methodologies and collaborative investigation.
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
