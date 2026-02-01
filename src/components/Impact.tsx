"use client";


import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Impact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const initiatives = [
    {
      title: "Translation Transfer & Commercialization",
      description: "Enabling the progression of academic research from laboratory validation to market-ready technologies through structured support for technology readiness, intellectual property creation, licensing, and commercialization.",
      color: "#0D9488"
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Facilitating sustained collaboration with industry partners to co-develop, validate, and scale technologies in healthcare, medical devices, artificial intelligence, cybersecurity, and engineering domains.",
      color: "#C9A24D"
    },
    {
      title: "Startup & Innovation Ecosystem Enablement",
      description: "Supporting faculty- and student-led entrepreneurship by leveraging IIT Kanpur’s incubation ecosystem, mentoring translational research teams, and strengthening pathways for startup creation and growth.",
      color: "#1E40AF"
    },
    {
      title: "National Engagement & Innovation Leadership",
      description: "Aligning translational research with national missions and innovation frameworks by engaging with government agencies, innovation networks, and stakeholders to promote responsible and impactful technology development.",
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
          <p className="text-lg text-muted-foreground w-full mb-13">
           WCTRI focuses on strengthening translational research by converting academic discoveries into deployable technologies, fostering collaboration between academia, industry, startups, and policymakers to generate measurable societal and economic impact.
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
                WCTRI builds on IIT Kanpur’s established track record in translational research and innovation, reflected through sustained technology transfer, startup creation, and large-scale funded research initiatives.
              </p>
              <div className="grid grid-cols-4 gap-12">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">₹40+Cr</div>
                  <div className="text-sm opacity-80">Committed Funding Support</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm opacity-80">Startups Incubated</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">100+</div>
                  <div className="text-sm opacity-80">Patents Granted</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-mono text-3xl font-bold text-accent mb-1">20+</div>
                  <div className="text-sm opacity-80">Healthcare Technologies Commercialized</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
