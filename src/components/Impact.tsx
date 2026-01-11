"use client";


import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Impact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const initiatives = [
    {
      title: "Technology Transfer & Commercialization",
      description: "Bridging the gap between academic research and market applications through strategic partnerships and licensing agreements.",
      color: "#0D9488"
    },
    {
      title: "Industry Collaboration Projects",
      description: "Co-creating solutions with leading corporations to address real-world challenges in manufacturing, services, and technology sectors.",
      color: "#C9A24D"
    },
    {
      title: "Startup Ecosystem Development",
      description: "Nurturing early-stage ventures through mentorship, seed funding, and connections to venture capital networks.",
      color: "#1E40AF"
    },
    {
      title: "Policy Advisory & Thought Leadership",
      description: "Contributing to national discourse on innovation policy, technology governance, and economic development strategies.",
      color: "#EA580C"
    },
  ];

  return (
    <section id="impact" className="py-32 px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Impact</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Innovation & Engagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            We translate research insights into tangible outcomes, fostering innovation ecosystems 
            that drive economic growth and societal progress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-border bg-card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: initiative.color }}
              ></div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {initiative.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary opacity-95"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1762075314731-10fa03d2727a?w=1080&q=80"
              alt="Innovation Impact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-12 text-primary-foreground">
            <div className="max-w-3xl">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Measurable Outcomes
              </h3>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                Our initiatives have resulted in significant technology transfers, patent filings, 
                startup successes, and policy contributions that shape India's innovation landscape.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">₹50Cr+</div>
                  <div className="text-sm opacity-80">Funding Secured</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">30+</div>
                  <div className="text-sm opacity-80">Patents Filed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm opacity-80">Ventures Launched</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
