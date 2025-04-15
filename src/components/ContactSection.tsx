
import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xdoqgnpp"); // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg border border-neonGreen/20 mb-6">
              {/* Using the uploaded contact image */}
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Contact" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-darkGray/50 rounded-lg p-6 border border-neonGreen/20">
              <p className="text-lg italic mb-6">
                "Let's turn ideas into algorithms. Reach out and let's create something amazing together!"
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-neonGreen/10 p-3 rounded-full">
                    <Mail className="text-neonGreen" size={20} />
                  </div>
                  <a 
                    href="mailto:kiranrouthu19@gmail.com" 
                    className="text-coolGray hover:text-neonGreen transition-colors"
                  >
                    kiranrouthu19@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-neonGreen/10 p-3 rounded-full">
                    <Linkedin className="text-neonGreen" size={20} />
                  </div>
                  <a 
                    href="https://linkedin.com/in/kiranmai19" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-coolGray hover:text-neonGreen transition-colors"
                  >
                    linkedin.com/in/kiranmai19
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coolGray mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-darkBg border border-neonGreen/30 focus:border-neonGreen focus:outline-none focus:ring-1 focus:ring-neonGreen/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coolGray mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-darkBg border border-neonGreen/30 focus:border-neonGreen focus:outline-none focus:ring-1 focus:ring-neonGreen/50 transition-all"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coolGray mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-darkBg border border-neonGreen/30 focus:border-neonGreen focus:outline-none focus:ring-1 focus:ring-neonGreen/50 transition-all resize-none"
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {state.submitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-darkBg border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              
              {state.succeeded && (
                <div className="p-3 bg-neonGreen/20 border border-neonGreen/40 rounded-lg text-neonGreen text-center animate-fade-in">
                  Message sent successfully!
                </div>
              )}
              
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-center animate-fade-in">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
