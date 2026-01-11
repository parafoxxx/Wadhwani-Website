"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Programs() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const programs = [
    {
      category: "Executive Education",
      title: "Advanced Management Program",
      description: "An intensive program for senior leaders focusing on strategic thinking, organizational transformation, and global business dynamics.",
      duration: "12 Weeks",
      format: "Hybrid",
      color: "#0D9488",
      image: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?w=1080&q=80"
    },
    {
      category: "Executive Education",
      title: "Technology Leadership Program",
      description: "Designed for technology executives and CTOs to navigate digital disruption, innovation management, and technology strategy.",
      duration: "8 Weeks",
      format: "Residential",
      color: "#C9A24D",
      image: "https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f?w=1080&q=80"
    },
    {
      category: "Student Programs",
      title: "Innovation Fellowship",
      description: "A selective fellowship supporting graduate students pursuing cutting-edge research with real-world impact potential.",
      duration: "1 Year",
      format: "On-Campus",
      color: "#1E40AF",
      image: "https://images.unsplash.com/photo-1766297248084-b32bacb4a1e4?w=1080&q=80"
    },
    {
      category: "Student Programs",
      title: "Entrepreneurship Incubation",
      description: "Comprehensive support for student ventures including mentorship, funding guidance, and access to industry networks.",
      duration: "6-12 Months",
      format: "Flexible",
      color: "#EA580C",
      image: "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=1080&q=80"
    },
    {
      category: "Faculty Development",
      title: "Research Collaboration Initiative",
      description: "Fostering interdisciplinary collaboration among faculty members and facilitating partnerships with leading global institutions.",
      duration: "Ongoing",
      format: "Collaborative",
      color: "#14B8A6",
      image: "https://images.unsplash.com/photo-1743834147172-37c12011b321?w=1080&q=80"
    },
  ];

  return (
    <section id="programs" className="py-32 px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Programs</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Educational Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            Our programs are designed to challenge, inspire, and equip participants with the knowledge 
            and capabilities needed to lead in an increasingly complex world.
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
