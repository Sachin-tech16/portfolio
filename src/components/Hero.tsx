import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/sasank-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profilePhoto}
                alt="Sasank Sekhar Patnaik"
                className="relative rounded-full w-full h-full object-cover border-4 border-primary shadow-glow transition-smooth hover:scale-105"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left animate-slide-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent whitespace-nowrap">
              Sasank Sekhar Patnaik
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Software Test Engineer
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-8">
              Manual & Automation Testing | Selenium | Java | SQL | AWS
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-smooth hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-smooth hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
