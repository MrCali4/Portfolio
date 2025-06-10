
import { SkillRadar } from '@/components/SkillRadar';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Users, Eye } from 'lucide-react';

export const PowerUpsSection = () => {
  const skillCategories = [
    { name: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'], icon: <Code className="w-5 h-5" /> },
    { name: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], icon: <Zap className="w-5 h-5" /> },
    { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'], icon: <Users className="w-5 h-5" /> },
    { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'], icon: <Eye className="w-5 h-5" /> },
  ];

  const stats = [
    { title: 'Years of Experience', value: '5+', icon: <Zap className="w-6 h-6" /> },
    { title: 'Projects Completed', value: '50+', icon: <Code className="w-6 h-6" /> },
    { title: 'Technologies Mastered', value: '20+', icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section id="power-ups" className="py-20 px-6 bg-card/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            <span className="bg-gradient-to-r from-electric-500 to-primary bg-clip-text text-transparent">
              Power-Ups
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">My arsenal of technical skills</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fadeIn">
            <SkillRadar />
          </div>
          
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <Card key={index} className="group bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-primary text-lg">{category.name}</h4>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          • {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group bg-gradient-to-br from-primary/5 to-electric-400/5 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow transform hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
