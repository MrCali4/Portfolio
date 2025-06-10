
import { ProjectCard } from '@/components/ProjectCard';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="missions" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            <span className="bg-gradient-to-r from-primary to-electric-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Solutions that showcase my journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
