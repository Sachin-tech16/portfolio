import { Cloud, Code, Bug, Database, GitBranch, Layout, Workflow, Monitor } from "lucide-react";

const skills = [
  {
    name: "Manual Testing",
    icon: Bug,
    description: "Functional, Regression, Smoke & Integration testing",
  },
  {
    name: "Automation Testing",
    icon: Workflow,
    description: "Selenium WebDriver, TestNG",
  },
  {
    name: "Programming",
    icon: Code,
    description: "Core Java fundamentals & OOP concepts",
  },
  {
    name: "Database",
    icon: Database,
    description: "SQL & MySQL for data validation",
  },
  {
    name: "Version Control",
    icon: GitBranch,
    description: "Git & GitHub for collaborative workflows",
  },
  {
    name: "Cloud (AWS)",
    icon: Cloud,
    description: "S3, Lambda and serverless basics",
  },
  {
    name: "Web Technologies",
    icon: Layout,
    description: "HTML & CSS for UI understanding",
  },
  {
    name: "Operating Systems",
    icon: Monitor,
    description: "Windows & Linux environments",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="gradient-card rounded-3xl p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-smooth">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
