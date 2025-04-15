
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);
  
  const quotes = [
    "A journey of a thousand miles begins with a single step.",
    "Your only limit is your mind.",
    "Dream it. Code it. Achieve it."
  ];
  
  const taglines = [
    "Turning curiosity into code, and code into impact.",
    "Building intelligent solutions with a touch of creativity.",
    "Aspiring Data Scientist | Problem Solver | Tech Dreamer"
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);
    
    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-darkGray via-darkBg to-black z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Hi, I'm <span className="text-neonGreen">Routhu Kiranmai</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-4 text-coolGray">
              Student from Vignan's Institute of Information Technology
            </p>
            
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl font-medium mb-6">
                {taglines[currentQuote % taglines.length]}
              </p>
            </div>
            
            <div className="bg-darkGray/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neonGreen/20 shadow-lg mb-8 min-h-[100px]">
              <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-lg md:text-xl italic text-gray-300">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects" 
                className="button-primary"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="button-outline"
              >
                Get in Touch
              </a>
            </div>
            
            {/* New motivational quote */}
            <div className="bg-neonGreen/10 p-4 rounded-lg border border-neonGreen/30 animate-pulse">
              <p className="text-center text-lg md:text-xl font-medium text-neonGreen">
                "MIRACLES HAPPEN TO THOSE WHO BELIEVE IN THEM"
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neonGreen shadow-[0_0_25px_rgba(0,255,136,0.5)] animate-float">
              {/* Updated profile image */}
              <img 
                src="public/lovable-uploads/f85e9beb-ea22-4f10-a9c1-b4a7359b4d23.png" 
                alt="Routhu Kiranmai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-neonGreen/30 animate-pulse"></div>
            <div className="absolute -inset-8 rounded-full border border-neonGreen/20 animate-pulse [animation-delay:1s]"></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neonGreen animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-neonGreen/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-neonGreen/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}
