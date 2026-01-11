export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Wadhwani Institute of Excellence</h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-md mb-6">
              IIT Kanpur, Kalyanpur<br />
              Kanpur, Uttar Pradesh 208016<br />
              India
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <span className="text-lg">in</span>
              </button>
              <button 
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </button>
              <button 
                onClick={() => window.open("mailto:contact@iitk.ac.in", "_blank")}
                className="w-10 h-10 border border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <span className="text-lg">@</span>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-accent transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-accent transition-colors">Research</button></li>
              <li><button onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-accent transition-colors">Programs</button></li>
              <li><button onClick={() => document.getElementById("people")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-accent transition-colors">People</button></li>
              <li><button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-accent transition-colors">Gallery</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="mailto:contact@iitk.ac.in" className="hover:text-accent transition-colors">contact@iitk.ac.in</a></li>
              <li><a href="mailto:admissions@iitk.ac.in" className="hover:text-accent transition-colors">admissions@iitk.ac.in</a></li>
              <li className="hover:text-accent transition-colors cursor-pointer">+91 512 259 0000</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <div className="text-center md:text-left">
            © {currentYear} Wadhwani Institute of Excellence, IIT Kanpur. All rights reserved.
          </div>
          <div className="flex gap-6 text-center md:text-right">
            <button className="hover:text-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-accent transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
