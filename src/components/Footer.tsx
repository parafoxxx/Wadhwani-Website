import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6 lg:px-12 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="font-serif text-2xl font-bold mb-4">Wadhwani Center for Translational Research and Innovation (WCTRI)</h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-md mb-6">
              IIT Kanpur, Kalyanpur<br />
              Kanpur, Uttar Pradesh 208016<br />
              India
            </p>
            <div className="flex gap-4">
              <motion.button 
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <span className="text-lg">in</span>
              </motion.button>
              <motion.button 
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="X"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <span className="text-lg">X</span>
              </motion.button>
              <motion.button 
                onClick={() => window.open("mailto:foundationwadhwaniiitk@gmail.com", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <span className="text-lg">@</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1">About</button></li>
              <li><button onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })} className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1">Focus Areas</button></li>
              <li><button onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })} className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1">Programs</button></li>
              <li><button onClick={() => document.getElementById("people")?.scrollIntoView({ behavior: "smooth" })} className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1">People</button></li>
              <li><button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })} className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1">Gallery</button></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="mailto:foundationwadhwaniiitk@gmail.com" className="translate-x-0 hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block">foundationwadhwaniiitk@gmail.com</a></li>
              <li className="hover:text-accent transition-all duration-200 hover:translate-x-1 cursor-pointer">0512-6794051 / 0512-6794052</li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60"
        >
          <div className="text-center md:text-left">
            (c) {currentYear} Wadhwani Center for Translational Research and Innovation, IIT Kanpur. All rights reserved.
          </div>
          <div className="flex gap-6 text-center md:text-right">
            <button className="translate-y-0 hover:text-accent transition-all duration-200 hover:-translate-y-0.5">Privacy Policy</button>
            <button className="translate-y-0 hover:text-accent transition-all duration-200 hover:-translate-y-0.5">Terms of Use</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
