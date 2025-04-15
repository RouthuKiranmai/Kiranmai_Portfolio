
import { Briefcase, Users, Star, Trophy } from "lucide-react";

export default function TrainingLeadershipSection() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="section-title">My Learning Journey</h2>
            
            <div className="mt-12 card hover-lift">
              <div className="flex gap-4">
                <div className="bg-neonGreen/10 p-3 rounded-lg self-start">
                  <Briefcase className="text-neonGreen" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trainee at ServiceNow</h3>
                  <p className="text-neonGreen mb-4">2025</p>
                  <p className="text-coolGray">
                    Participated in an intensive training program at ServiceNow, gaining hands-on experience 
                    with their Now Platform and learning about enterprise workflow automation, cloud services,
                    and digital transformation strategies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 card hover-lift">
              <div className="flex gap-4">
                <div className="bg-neonGreen/10 p-3 rounded-lg self-start">
                  <Star className="text-neonGreen" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Workshops & Seminars</h3>
                  <p className="text-coolGray">
                    Participated in multiple workshops on AI, Data Science, and Full-stack development, 
                    gaining valuable insights from industry experts and enhancing practical skills through 
                    hands-on learning experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Leadership</h2>
            
            <div className="mt-12 bg-darkGray/50 rounded-lg p-6 border border-neonGreen/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-neonGreen/10 p-3 rounded-full">
                  <Users className="text-neonGreen" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Leadership Roles</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Trophy className="text-neonGreen mt-1" size={18} />
                  <div>
                    <h4 className="font-medium">Anchoring Club Member</h4>
                    <p className="text-sm text-coolGray">
                      Coordinated and hosted various college events, developing strong public speaking and event management skills.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Trophy className="text-neonGreen mt-1" size={18} />
                  <div>
                    <h4 className="font-medium">Class Representative</h4>
                    <p className="text-sm text-coolGray">
                      Served as a liaison between students and faculty, demonstrating strong communication and problem-solving abilities.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Trophy className="text-neonGreen mt-1" size={18} />
                  <div>
                    <h4 className="font-medium">Event Organizer</h4>
                    <p className="text-sm text-coolGray">
                      Organized technical and cultural events at the college level, managing teams and resources effectively.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-lg font-medium mb-2">Key Achievement</h4>
                <div className="bg-neonGreen/10 rounded-lg p-4">
                  <p className="text-neonGreen font-medium mb-1">Top 250 in Walmart CodeHers</p>
                  <p className="text-sm text-coolGray">
                    Selected among the Top 250 in Walmart CodeHers, a national-level coding competition
                    recognizing top women technologists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
