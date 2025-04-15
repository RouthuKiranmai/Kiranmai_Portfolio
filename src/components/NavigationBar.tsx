
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Find the current section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      
      if (currentSection !== -1) {
        setActiveSection(navLinks[currentSection].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-darkBg/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="font-bold text-xl md:text-2xl text-white">
              <span className="text-neonGreen">K</span>iranmai
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    activeSection === link.id
                      ? "text-neonGreen"
                      : "text-gray-300 hover:text-neonGreen"
                  )}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", menuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-darkBg/95 backdrop-blur-md">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-all duration-200",
                activeSection === link.id
                  ? "text-neonGreen bg-gray-900"
                  : "text-gray-300 hover:text-neonGreen hover:bg-gray-800"
              )}
              onClick={() => {
                setActiveSection(link.id);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
