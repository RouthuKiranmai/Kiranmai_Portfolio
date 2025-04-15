
import { GraduationCap, Calendar } from "lucide-react";

const educations = [
  {
    degree: "B.Tech CSE (AI & DS)",
    institution: "Vignan's Institute of Information Technology",
    period: "2022 - Present",
    score: "CGPA: 9.11",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Jr. College",
    period: "2022",
    score: "93.7%",
  },
  {
    degree: "SSC",
    institution: "Sri Gayathri Vidya Nilayam",
    period: "2020",
    score: "CGPA: 10.0",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-darkGray/30 relative">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden h-full shadow-lg border border-neonGreen/20">
              {/* Replace with education-themed image when available */}
              <img 
                src="public/lovable-uploads/3483c5fd-d3c6-4189-837a-11d0f96c810e.png" 
                alt="Education" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative border-l-2 border-neonGreen/50 pl-8 ml-4">
              {educations.map((edu, index) => (
                <div 
                  key={index} 
                  className="mb-12 relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -left-[42px] bg-darkBg p-1 rounded-full border-4 border-neonGreen/30">
                    <GraduationCap className="text-neonGreen" size={24} />
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-neonGreen mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-coolGray mb-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-neonGreen/10 rounded-full text-neonGreen text-sm">
                      {edu.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
