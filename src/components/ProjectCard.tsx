
import { useState } from 'react';
import { Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  delay?: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  imageUrl, 
  githubUrl, 
  demoUrl,
  delay = 0 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-card/50 backdrop-blur-md border border-primary/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-neon animate-fadeIn`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full hover:bg-primary/80 transition-colors cursor-pointer"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full hover:bg-primary/80 transition-colors cursor-pointer"
            >
              <Eye className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs sm:text-sm text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
