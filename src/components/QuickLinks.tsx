"use client";

import { motion } from "framer-motion";

export default function QuickLinks() {
  const links = [
    { 
      title: "Submit Pre-Proposal", 
      description: "WIN CoE pre-proposal form",
      action: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLScHv7QxMW0jXVfREs6dwa8Kk1BRxKiMdsuYDUBTG9VFQieTsg/viewform?usp=headerLink", "_blank"),
      color: "#0D9488"
    },
    { 
      title: "Call for Proposals", 
      description: "Learn about eligibility",
      action: () => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }),
      color: "#C9A24D"
    },
    { 
      title: "Email WIN CoE", 
      description: "foundationwadhwaniiitk@gmail.com",
      action: () => window.open("mailto:foundationwadhwaniiitk@gmail.com", "_blank"),
      color: "#1E40AF"
    },
    { 
      title: "Focus Areas", 
      description: "Explore priorities",
      action: () => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" }),
      color: "#EA580C"
    }
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.button
              key={index}
              onClick={link.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-card border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: link.color }}
              ></div>
              <div 
                className="w-12 h-1 mb-4 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: link.color }}
              ></div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-2 relative z-10">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                {link.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
