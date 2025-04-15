
import { Book, Headphones, Code } from "lucide-react";

const hobbies = [
  {
    name: "Reading Books",
    icon: Book,
    description: "I enjoy exploring diverse topics through books, from technical subjects to fiction and personal development.",
  },
  {
    name: "Listening to Pleasant Music",
    icon: Headphones,
    description: "Music helps me relax and stay focused when working on complex problems or during coding sessions.",
  },
  {
    name: "Coding",
    icon: Code,
    description: "Beyond academics, I love building personal projects and exploring new programming languages and frameworks.",
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 bg-darkGray/30">
      <div className="section-container">
        <h2 className="section-title">Hobbies</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="card hover-lift flex flex-col items-center text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-neonGreen/10 flex items-center justify-center mb-6">
                <hobby.icon className="text-neonGreen" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{hobby.name}</h3>
              <p className="text-coolGray">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
