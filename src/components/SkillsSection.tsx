
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "SQL"],
    level: 85,
  },
  {
    category: "Machine Learning",
    items: ["Random Forest", "SVM", "TensorFlow", "Scikit-learn", "Keras"],
    level: 80,
  },
  {
    category: "Libraries",
    items: ["Pandas", "NumPy"],
    level: 90,
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Flask", "Django", "Bootstrap", "Node.js"],
    level: 75,
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    level: 80,
  },
  {
    category: "Tools",
    items: ["Git", "Docker"],
    level: 70,
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Leadership", "Communication"],
    level: 90,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-darkGray/30 relative">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid gap-8 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card hover-lift"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-neonGreen mb-2">{skill.category}</h3>
                <div className="h-1 bg-darkGray rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neonGreen animate-[grow_1.5s_ease-out]" 
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      i % 3 === 0 && "bg-neonGreen/10 text-neonGreen",
                      i % 3 === 1 && "bg-neonGreen/20 text-white",
                      i % 3 === 2 && "bg-darkGray text-neonGreen"
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative code background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -rotate-12 transform top-1/4 left-1/4 font-mono text-xs">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap text-neonGreen">
              {`function optimizeModel(data, params) { return new AIModel(data).train(params); }`}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
