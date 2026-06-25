import { GraduationCap, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Sasank Sekhar Patnaik, an aspiring Software Test Engineer based in Chennai, India.
              I have hands-on knowledge of Manual Testing, Selenium WebDriver, Java, and SQL, along with a solid grasp of SDLC and STLC.
              I'm skilled in test case design, defect tracking, functional and regression testing, and automation fundamentals,
              backed by internship experience in DevOps and cloud technologies.
            </p>
          </div>

          {/* Education */}
          <div className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">B.E. Computer Science and Engineering</span> (2022 – 2026)
              <br />
              C. Abdul Hakeem College of Engineering and Technology
            </p>
          </div>

          {/* Certifications */}
          <div className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                DevOps Internship Certificate – Elevate Labs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                DevOps Internship Certificate – Tech Power Solutions
              </li>
            </ul>
          </div>

          {/* Interests / Soft Skills */}
          <div className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability"].map((s) => (
                <span key={s} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
