
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Full-stack Osteoporosis Risk Prediction",
    description: "Developed a predictive model to assess osteoporosis risk using machine learning algorithms such as Random Forest and SVM. Designed an intuitive frontend with HTML, CSS, and JavaScript, integrated with a backend to process data inputs and predictions.",
    tech: ["Python", "Flask", "HTML/CSS", "JavaScript", "Random Forest", "SVM", "MySQL"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Stock Price Prediction using Machine Learning",
    description: "Developed a stock price prediction model using historical data with machine learning algorithms like Linear Regression and Random Forest. The system analyzes market trends and employs feature engineering to enhance prediction accuracy.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "#",
  },
  {
    title: "AI-Powered Content Recommendation System",
    description: "Built a recommendation system that analyzes user preferences and behavior to suggest personalized content using collaborative filtering algorithms. Implemented A/B testing to optimize recommendation accuracy.",
    tech: ["Python", "TensorFlow", "Flask", "MongoDB", "React"],
    github: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Created an interactive dashboard for visualizing complex datasets with real-time filtering and drill-down capabilities. Focused on intuitive UI/UX to make data insights accessible to non-technical users.",
    tech: ["Python", "Django", "D3.js", "Bootstrap", "PostgreSQL"],
    github: "#",
    liveDemo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-darkGray border-neonGreen/20 hover:border-neonGreen/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <CardHeader>
                <CardTitle className="text-neonGreen">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-darkBg text-xs rounded-md text-coolGray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coolGray hover:text-neonGreen transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
                
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coolGray hover:text-neonGreen transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
