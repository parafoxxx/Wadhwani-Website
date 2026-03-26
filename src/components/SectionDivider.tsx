"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5 }}
      className="py-2 px-6 lg:px-12"
      aria-hidden="true"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#BF2026]"></span>
        <span className="h-px flex-1 bg-gradient-to-r from-[#BF2026] via-[#F68721] to-[#414042]/30"></span>
        <span className="h-2 w-2 rounded-full bg-[#F68721]"></span>
      </div>
    </motion.div>
  );
}
