
import { CheckCircle2, Award } from "lucide-react";

const certifications = [
  {
    title: "CCNA Cisco Module 1 & 2",
    issuer: "Cisco",
    year: 2024,
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco",
    year: 2024,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco",
    year: 2023,
  },
  {
    title: "Cyber Security Essentials",
    issuer: "Cisco",
    year: 2023,
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    year: 2024,
  },
  {
    title: "Operating Systems",
    issuer: "NPTEL",
    year: 2024,
  },
  {
    title: "Web Development",
    issuer: "Internshala",
    year: 2024,
  },
  {
    title: "AI/ML Fundamentals",
    issuer: "YBI Foundation",
    year: 2023,
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    year: 2024,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="card hover-lift group relative overflow-hidden"
            >
              {/* Certificate logo placeholder - position absolute in top right */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-darkBg/50 flex items-center justify-center">
                <Award className="text-neonGreen" size={24} />
              </div>
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-neonGreen" size={16} />
                  <span className="text-coolGray">Issued by {cert.issuer}</span>
                </div>
                <div className="text-sm text-coolGray">
                  Completed in {cert.year}
                </div>
              </div>
              
              {/* Hover effect - glow line at bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neonGreen group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/4 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
