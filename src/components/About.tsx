"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            About WCTRI at IIT Kanpur
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 mb-20"
        >
          {/* Left Column */}
          <div>
            <div className="h-80 mb-6 overflow-hidden">
              <img
                src="/wadh1.png"
                alt="IIT Kanpur Campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The unparalleled spirit of innovation and technological advancement at IIT Kanpur
                marks it as a dynamic nexus where academia, industry, and entrepreneurial zeal
                converge. Over the years, the institute has consistently delivered groundbreaking
                products with national significance.
              </p>

              <p>
                Notably, IIT Kanpur has placed research at the core of its capabilities, engaging
                both faculty members and students in pioneering research endeavors across diverse
                disciplines.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The overall objective of WCTRI at IIT Kanpur is to enhance the ability of both
              academic and industrial sectors to collaborate effectively in order to innovate
              and create value through a strong focus on long-term research.
            </p>

            <p>
              WCTRI emphasizes responsible innovation aligned with national priorities such as
              <strong> Make in India </strong> and <strong> Atmanirbhar Bharat</strong>, ensuring
              that scientific breakthroughs are transformed into deployable, scalable, and
              sustainable solutions.
            </p>

            <div className="h-80 mt-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602052294200-a8b75e03adfe?w=1080&q=80"
                alt="Research Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
