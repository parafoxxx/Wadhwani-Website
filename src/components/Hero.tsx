"use client";


import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DnaBackground from "./DnaBackground";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/Screenshot 2026-02-01 070356.png",
    "/Screenshot 2026-02-01 070413.png",
    "/Screenshot 2026-02-01 070456.png",
    "/bsbe.jpg"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.1 : 1
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/100 via-background/65 to-background"></div>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#BF2026] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F68721] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <DnaBackground variant="hero" className="opacity-100" />

      {/* Image Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              currentImageIndex === index ? "bg-accent" : "bg-white/30"
            }`}
            aria-label={`Go to background ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-8 text-balance tracking-tight">
            Wadhwani Center for{" "}
            <span className="text-primary">Translational Research</span>{" "}&amp;{" "}
            <span className="text-accent">Innovation</span> {" "}</h2>
              <h4 className="font-serif text-4xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 text-balance">
         IIT Kanpur
              </h4>
          <p className="text-lg md:text-.1xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            The WIN Centre of Excellence (CoE) at IIT Kanpur, established in collaboration with the Wadhwani Foundation, aims at taking groundbreaking innovations in emerging technologies from research laboratory to commercialization aligning with National Health Missions. The promotes interdisciplinary solutions bridging biology, medicine, & engineering to address national & global challenges in healthcare & technology </p> 
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
           className="px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-[#C61629] transition-colors w-full sm:w-auto"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto"
          >
            Our Programs
          </button>
          <button 
          onClick={() => {
              // Navigate to Contact page
              window.location.href = "/contact";
            }}
            className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
