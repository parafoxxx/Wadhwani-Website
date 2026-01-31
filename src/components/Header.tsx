"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ["about", "research", "programs", "impact", "gallery", "people"];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-serif font-semibold tracking-tight text-primary hover:text-accent transition-colors"
            >
              <img src="/image.png"  alt="Wadhwani Center of Excellence" className="h-20 w-80 inline-block mr-2" />

            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
              <button
                onClick={() => window.open("mailto:contact@iitk.ac.in", "_blank")}
                className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
                      <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-0 bottom-0 w-64 bg-background border-l border-border z-50 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors capitalize py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  window.open("mailto:contact@iitk.ac.in", "_blank");
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-left"
              >
                Contact Us
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
