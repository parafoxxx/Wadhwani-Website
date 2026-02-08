"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { useRef, useState, useEffect } from "react";

export default function Gallery() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const images = [
    {
      url: "/Screenshot 2026-02-01 070456.png",
      caption: "IIT Kanpur Campus",
      category: "Campus"
    },
    {
      url: "/lab.jpg",
      caption: "Bioengineering Laboratories",
      category: "Bioengineering"
    },
    {
      url: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?w=1080&q=80",
      caption: "WIN CoE Collaboration Sessions",
      category: "WIN CoE"
    },
    {
      url: "https://images.unsplash.com/photo-1758549885423-819fd86e04f0?w=1080&q=80",
      caption: "Technology Translation Hub",
      category: "Innovation"
    },
    {
      url: "https://images.unsplash.com/photo-1766297247287-9bf80d5f8281?w=1080&q=80",
      caption: "Interdisciplinary Research Teams",
      category: "Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=1080&q=80",
      caption: "Student Translational Projects",
      category: "Students"
    },
    {
      url: "https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f?w=1080&q=80",
      caption: "Program Planning Workshop",
      category: "Leadership"
    },
    {
      url: "https://images.unsplash.com/photo-1762075314731-10fa03d2727a?w=1080&q=80",
      caption: "Innovation Ecosystem",
      category: "Ecosystem"
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 px-5 sm:px-6 lg:px-12 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Glimpses
          </h2>
          <p className="text-lg opacity-90 max-w-3xl">
            A glimpse into WCTRI labs, translational programs, and the IIT Kanpur innovation ecosystem.
          </p>
        </motion.div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center hover:bg-accent/90 transition-colors"
              aria-label="Scroll left"
            >
              {"<"}
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center hover:bg-accent/90 transition-colors"
              aria-label="Scroll right"
            >
              {">"}
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 group"
              >
                <div className="relative h-96 overflow-hidden bg-secondary">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-wider text-accent font-medium mb-1">
                        {image.category}
                      </p>
                      <p className="text-lg font-serif font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
