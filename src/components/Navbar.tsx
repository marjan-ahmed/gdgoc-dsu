import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Users as UsersIcon, Calendar, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check if footer is in viewport
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Hide nav when footer comes into middle half of viewport
        setHideNav(footerRect.top < windowHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero", icon: Home },
    { name: "About", id: "about", icon: Info },
    { name: "What We Do", id: "services", icon: Briefcase },
    { name: "Team", id: "team", icon: UsersIcon },
    { name: "Events", id: "events", icon: Calendar },
    { name: "Contact", id: "footer", icon: Mail },
  ];

  return (
    <>
      {/* Fixed Top Logo Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <img 
                src="https://gdgoc-dsu.vercel.app/LOGO.svg" 
                alt="GDG DSU Logo" 
                className="h-60 w-60"
              />
            </div>

            {/* Desktop Join Button */}
            <div className="hidden md:block">
              <Button onClick={() => scrollToSection("footer")} className="bg-primary hover:bg-primary/90">
                Join Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Text Navigation (Desktop - Left Side) */}
      <nav className={`hidden md:flex fixed left-12 top-1/2 -translate-y-1/2 z-50 flex-col gap-8 py-12 transition-all duration-500 ${
        hideNav ? 'opacity-0 pointer-events-none -translate-x-8' : 'opacity-100'
      }`}>
        {/* Vertical Line */}
        <div className="absolute -left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        {navLinks.map((link, index) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="group relative text-sm font-bold text-foreground/40 hover:text-primary transition-all duration-500 text-left uppercase tracking-wider whitespace-nowrap py-1"
          >
            {/* Number prefix */}
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs font-mono text-primary/40 group-hover:text-primary transition-colors duration-300">
              0{index + 1}
            </span>
            
            {/* Text with slide and scale animation */}
            <span className="relative z-10 inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:scale-105">
              {link.name}
            </span>
            
            {/* Animated dot indicator */}
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
            
            {/* Underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500" />
          </button>
        ))}
      </nav>

      {/* Mobile Menu with Staggered Animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-2 h-full">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <div
                    key={link.id}
                    className="overflow-hidden"
                    style={{
                      animation: `slideInStagger 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                      animationDelay: `${index * 0.08}s`,
                      opacity: 0,
                      transform: 'translateY(20px) rotate(2deg)'
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left text-3xl sm:text-4xl font-bold text-foreground/80 hover:text-primary transition-all duration-300 py-3 uppercase tracking-tight group relative flex items-center gap-4"
                    >
                      <Icon className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                      <span 
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-normal text-primary/60"
                        style={{ opacity: 0.6 }}
                      >
                        0{index + 1}
                      </span>
                    </button>
                  </div>
                );
              })}
            </nav>
            
            <div 
              className="mt-auto pb-8 space-y-4"
              style={{
                animation: `slideInStagger 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${navLinks.length * 0.08}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <Button 
                onClick={() => scrollToSection("footer")} 
                className="bg-primary hover:bg-primary/90 w-full h-12 text-base font-semibold"
              >
                Join Us
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Google Developer Groups</span>
                <span>•</span>
                <span>DSU</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slideInStagger {
          from {
            opacity: 0;
            transform: translateY(20px) rotate(2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
