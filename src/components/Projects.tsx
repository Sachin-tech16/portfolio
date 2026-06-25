import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud-Based Rental Management System",
    description: "Final year project — a cloud-based platform to manage rental properties, tenants, payments, and agreements with secure, scalable data storage.",
    technologies: ["Cloud", "Java", "SQL", "Web"],
    highlights: [
      "Modules for property listing, tenant management & rent tracking",
      "Reporting dashboard for owners and administrators",
      "Cloud-backed storage for scalability and accessibility",
    ],
  },
  {
    title: "Email Notification System for S3 Uploads",
    description: "An automated notification system built with AWS Lambda and Amazon S3 that triggers email alerts whenever files are uploaded to a configured S3 bucket.",
    technologies: ["AWS S3", "AWS Lambda", "SNS", "Event-Driven"],
    highlights: [
      "Event-driven serverless architecture",
      "Real-time email alerts on file uploads",
      "Improved monitoring & visibility of cloud storage activity",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="gradient-card rounded-3xl p-8 shadow-card transition-smooth hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-smooth">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-smooth">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="text-sm">Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
