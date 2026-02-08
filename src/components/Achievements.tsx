"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { useState, useEffect } from "react";

export default function Achievements() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "Externally Funded Projects",
      description: "1483 ongoing externally funded projects with a total sanctioned amount of Rs. 1449 crores.",
      stat: "1483",
      color: "#96c625"
    },
    {
      title: "IPR Filings (2022-23)",
      description: "114 patents and intellectual property filings during the 2022-2023 period.",
      stat: "114",
      color: "#C9A24D"
    },
    {
      title: "Patents Granted & Commercialized",
      description: "100+ patents granted and 21 commercialized, with 200 life-sciences and med-tech patents among 1000+ filings.",
      stat: "100+ / 21",
      color: "#1E40AF"
    },
    {
      title: "Startups Graduated",
      description: "150+ startups graduated through SIIC across healthcare, agritech, cleantech, AI, ML, and cybersecurity domains.",
      stat: "150+",
      color: "#EA580C"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-12 bg-gradient-to-br from-[#0B1F3B] via-[#0D9488] to-[#0B1F3B] text-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#C9A24D] font-medium mb-4">Achievements</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Excellence in Numbers
          </h2>
        </motion.div>

        <div className="relative h-80">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                x: currentIndex === index ? 0 : currentIndex > index ? -100 : 100,
                display: currentIndex === index ? "flex" : "none"
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: currentIndex === index ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-8xl font-bold mb-6"
                style={{ color: achievement.color }}
              >
                {achievement.stat}
              </motion.div>
              <h3 className="font-serif text-3xl font-bold mb-4">
                {achievement.title}
              </h3>
              <p className="text-lg opacity-90 max-w-2xl">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#C9A24D] w-8" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
