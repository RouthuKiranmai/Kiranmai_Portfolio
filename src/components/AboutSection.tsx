
import { Code, Coffee, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card hover-lift group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neonGreen/10 mb-4 group-hover:bg-neonGreen/20 transition-all duration-300">
                <Code className="text-neonGreen" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passionate Developer</h3>
              <p className="text-coolGray">
                I'm a pre-final year B.Tech student in Computer Science & Engineering 
                specializing in Artificial Intelligence and Data Science.
              </p>
            </div>
          </div>
          
          <div className="card hover-lift group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neonGreen/10 mb-4 group-hover:bg-neonGreen/20 transition-all duration-300">
                <Lightbulb className="text-neonGreen" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-coolGray">
                I'm passionate about building intelligent systems and solving real-world problems 
                through innovative technology solutions.
              </p>
            </div>
          </div>
          
          <div className="card hover-lift group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neonGreen/10 mb-4 group-hover:bg-neonGreen/20 transition-all duration-300">
                <Coffee className="text-neonGreen" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
              <p className="text-coolGray">
                I'm eager to collaborate on innovative projects and explore cutting-edge technologies
                that make a positive impact.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg border border-neonGreen/20">
            {/* Updated About Me image with the second image */}
            <img 
              src="public/lovable-uploads/43595059-cd21-417f-9fef-40391c89a102.png" 
              alt="About Me" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-darkGray/50 rounded-lg p-6 border border-neonGreen/20">
            {/* Highlighted achievement first in My Story section */}
            <div className="bg-neonGreen/20 p-4 rounded-lg border border-neonGreen mb-6 animate-pulse">
              <p className="text-neonGreen font-bold text-lg">
                🏆 Top 250 Finalist in Walmart CodeHers 2025
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-neonGreen">My Story</h3>
            <p className="text-coolGray mb-4">
              As a Computer Science & Engineering student specializing in AI and Data Science at Vignan's Institute of 
              Information Technology, I've developed a strong foundation in both theoretical concepts and practical applications 
              of technology.
            </p>
            <p className="text-coolGray mb-4">
              My academic journey has been complemented by hands-on projects in machine learning, data analysis, and 
              full-stack development, allowing me to apply classroom knowledge to real-world scenarios.
            </p>
            
            <p className="text-coolGray">
              Currently, I'm focusing on expanding my expertise in AI/ML frameworks, cloud technologies, and full-stack 
              development while actively seeking internship opportunities to gain industry experience.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
