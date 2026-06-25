import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <p className="text-center text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm actively looking for Software Testing opportunities. Whether you're a recruiter,
            hiring manager, or fellow developer, feel free to reach out!
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Chennai, India</span>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <a
              href="mailto:sasank8667@gmail.com"
              className="w-full flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-smooth hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              sasank8667@gmail.com
            </a>

            <a
              href="tel:+919342761293"
              className="w-full flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-smooth hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +91 9342761293
            </a>

            <a
              href="https://linkedin.com/in/sasank-sekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-smooth hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/sasank-sekhar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
