
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-coolGray text-sm">
              © {currentYear} Routhu Kiranmai. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-sm flex items-center gap-1">
              <span className="text-coolGray">Built with</span>
              <Heart className="text-neonGreen" size={16} fill="#00FF88" />
              <span className="text-coolGray">using React & TailwindCSS</span>
            </p>
          </div>
          
          <div>
            <a 
              href="#home"
              className="text-sm text-neonGreen hover:underline"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
