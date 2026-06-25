import { Briefcase, Server } from "lucide-react";

const experiences = [
  {
    title: "DevOps Intern",
    company: "Elevate Labs",
    duration: "4 Months",
    description: "Assisted in cloud infrastructure and deployment-related tasks using AWS services, working closely with Linux environments and automation workflows.",
    icon: Briefcase,
    highlights: [
      "Worked with AWS services for cloud infrastructure",
      "Hands-on with Linux & automation workflows",
      "Collaborated on deployment and troubleshooting activities",
    ],
  },
  {
    title: "DevOps Intern",
    company: "Tech Power Solutions",
    duration: "1 Month",
    description: "Supported deployment, monitoring, and maintenance activities while gaining exposure to version control systems and cloud administration tasks.",
    icon: Server,
    highlights: [
      "Supported deployment, monitoring & maintenance",
      "Worked with version control and cloud admin tasks",
      "Helped ensure system reliability and operational efficiency",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl flex-shrink-0">
                  <experience.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <span className="text-sm text-primary font-semibold">{experience.duration}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-semibold mb-4">{experience.company}</p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
