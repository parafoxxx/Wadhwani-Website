"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function ResearchCards() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const cards = [
    {
      title: "AI & Machine Learning",
      description: "Pushing boundaries in neural networks, computer vision, and natural language processing.",
      image: "https://images.unsplash.com/photo-1758549885423-819fd86e04f0?w=1080&q=80",
      color: "#0D9488"
    },
    {
      title: "Sustainable Innovation",
      description: "Developing green technologies for renewable energy and environmental conservation.",
      image: "https://images.unsplash.com/photo-1766297248084-b32bacb4a1e4?w=1080&q=80",
      color: "#14B8A6"
    },
    {
      title: "Digital Transformation",
      description: "Exploring blockchain, IoT, and Industry 4.0 for next-generation businesses.",
      image: "https://images.unsplash.com/photo-1766297247287-9bf80d5f8281?w=1080&q=80",
      color: "#1E40AF"
    },
    {
      title: "Entrepreneurship Studies",
      description: "Analyzing startup ecosystems and venture development strategies.",
      image: "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=1080&q=80",
      color: "#EA580C"
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Featured Research</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Innovation in Action
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full border border-border bg-card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundColor: card.color }}
                  ></div>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div 
                    className="w-12 h-1 mb-4"
                    style={{ backgroundColor: card.color }}
                  ></div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
