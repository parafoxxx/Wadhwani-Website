"use client";


import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const metrics = [
    { value: "500+", label: "Executive Alumni", color: "#0D9488" },
    { value: "50+", label: "Research Publications", color: "#C9A24D" },
    { value: "25+", label: "Industry Partners", color: "#1E40AF" },
    { value: "15+", label: "Years of Excellence", color: "#EA580C" },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4"></p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
<<<<<<< HEAD
            About WCTRI at IIT Kanpur
=======
            Innovation Through Translation
>>>>>>> 8dcf1075eff9799adfd2dff9b5dba2c3d6fcdb4c
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 mb-20"
        >
          <div>
            <div className="h-80 mb-6 overflow-hidden">
              <img 
                src="../../public/wadh1.png"
                alt="IIT Kanpur Campus"
                className="w-200 h-110 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <br />
              <p>
<<<<<<< HEAD
                The unparalleled spirit of innovation and technological advancement at IIT Kanpur marks
it as a dynamic nexus where academia, industry, and entrepreneurial zeal converge. Over
the years, the institute has consistently delivered groundbreaking products with national
significance, epitomizing its commitment to progress.      </p>
              <p>
                Notably, IIT Kanpur has placed
research at the core of its capabilities, engaging both faculty members and students in
pioneering research endeavors across diverse disciplines  </p>
=======
               WCTRI adopts an interdisciplinary approach that integrates engineering, biotechnology, artificial intelligence, and entrepreneurship to strengthen the translation of research into practical solutions.
              </p>
              <p>
                Located within one of India’s leading research institutions, the center leverages world-class infrastructure, established research ecosystems, and strong industry linkages to support innovation that meets national and global standards.
              </p>
>>>>>>> 8dcf1075eff9799adfd2dff9b5dba2c3d6fcdb4c
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
<<<<<<< HEAD
              The vision for WCTRI at IITK would be to become a leader in the development and
translation of creative research and innovation in strategically important areas through
product generation and spinout startups.  </p>
            <p>
              The overall objective of WCTRI at IITK would be
to enhance the ability of both the academic and industrial sectors to join hands in-order
to innovate and create value through a greater focus on long-term research.
 </p>
=======
              Established at the Indian Institute of Technology Kanpur, the Wadhwani Center for Translational Research and Innovation (WCTRI) aims to become a national leader in translational research and technology commercialization. The center is envisioned as a long-term initiative that fosters collaboration between academia, industry, startups, and policymakers.
            </p>
            <p>
              WCTRI emphasizes responsible innovation aligned with national priorities such as Make in India and Atmanirbhar Bharat, ensuring that scientific breakthroughs are transformed into deployable, scalable, and sustainable solutions.
            </p>
>>>>>>> 8dcf1075eff9799adfd2dff9b5dba2c3d6fcdb4c
            <div className="h-80 mt-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1602052294200-a8b75e03adfe?w=1080&q=80"
                alt="Research Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-mono text-4xl font-bold mb-2 transition-colors" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
