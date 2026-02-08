"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Programs() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const programs = [
    {
      category: "WIN Call for Proposals",
      title: "Translational WIN Projects (TRL 4+)",
      description: "Rolling call announced on November 26, 2025. Supports technologies at TRL 4 or above, validated by publications, patents, grants, or test licenses, to move proof-of-concept toward commercialization.",
      duration: "TRL 4+ readiness",
      format: "Rolling call | IITK PI required",
      color: "#0D9488",
      image: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?w=1080&q=80"
    },
    {
      category: "Focus Area",
      title: "Bioengineering & Biotech Therapeutics",
      description: "Targets lifestyle diseases, neurodegeneration, mental health, regenerative therapies, drug delivery, antivirals, and antimicrobial resistance with high translational potential.",
      duration: "Long-term research",
      format: "Interdisciplinary | Translational",
      color: "#C9A24D",
      image: "https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f?w=1080&q=80"
    },
    {
      category: "Focus Area",
      title: "Artificial Intelligence for Societal Impact",
      description: "AI applications for healthcare, agriculture, energy, cybersecurity, digital public infrastructure, mobility, and supply-chain systems.",
      duration: "Applied research",
      format: "Interdisciplinary | Applied",
      color: "#1E40AF",
      image: "https://images.unsplash.com/photo-1766297248084-b32bacb4a1e4?w=1080&q=80"
    },
    {
      category: "Commercialization",
      title: "Spin-off & Technology Transfer Support",
      description: "Supports spin-off startups with pre-seed networks, business strategy, product roadmap guidance, and industry-academia collaboration.",
      duration: "Spin-off support",
      format: "Industry-linked | SIIC ecosystem",
      color: "#EA580C",
      image: "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=1080&q=80"
    },
    {
      category: "Capacity Building",
      title: "Training & Collaboration Network",
      description: "Builds researcher capacity through training, workshops, and national and international collaboration networks.",
      duration: "Continuous",
      format: "Workshops | Collaboration",
      color: "#14B8A6",
      image: "https://images.unsplash.com/photo-1743834147172-37c12011b321?w=1080&q=80"
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 px-5 sm:px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Programs</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Translational Programs
          </h2>
          <p className="text-lg text-muted-foreground w-full mb-16">
            WCTRI programs strengthen translational research, accelerate technology development, and
            build industry-academia partnerships for commercialization.
          </p>
        </motion.div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group border border-border bg-background overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundColor: program.color }}
                  ></div>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-110 h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-2"
                    style={{ backgroundColor: program.color }}
                  ></div>
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider font-medium mb-2"
                      style={{ color: program.color }}
                    >
                      {program.category}
                    </p>
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-3 group-hover:text-[#0D9488] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-mono font-medium" style={{ color: program.color }}>
                        {program.duration}
                      </span>
                    </div>
                    <div className="text-muted-foreground">{program.format}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
