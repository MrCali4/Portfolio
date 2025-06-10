
import { useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ParticleField } from '@/components/ParticleField';
import { TypewriterText } from '@/components/TypewriterText';
import { SkillRadar } from '@/components/SkillRadar';
import { ProjectCard } from '@/components/ProjectCard';
import { StatsWidget } from '@/components/StatsWidget';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Eye, Code, Zap, Users, Mail, Phone, MapPin } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('custom-cursor');
    return () => document.body.classList.remove('custom-cursor');
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      title: "AI Task Manager",
      description: "Intelligent task management app with AI-powered prioritization and scheduling. Built with React Native and Python backend.",
      techStack: ["React Native", "Python", "TensorFlow", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization with custom charts and responsive design. Handles millions of data points.",
      techStack: ["Vue.js", "D3.js", "WebSocket", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <ThemeToggle />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block text-foreground">Nicholas</span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Maina Mureithi
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
              <span className="text-muted-foreground mr-4">I'm a</span>
              <TypewriterText 
                words={['Developer', 'Designer', 'Problem Solver', 'Creative Thinker']}
                className="text-primary font-bold"
              />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that blend innovation with functionality. 
              I turn complex problems into elegant solutions through code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Missions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <StatsWidget />
      </section>

      {/* Backstory Section */}
      <section id="backstory" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Backstory
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">The journey that shaped my code</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey into software engineering began with curiosity and a broken computer. 
                What started as an attempt to fix my family's old PC evolved into a passion for 
                understanding how technology works at its core.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Over the past 5 years, I've transformed from a curious tinkerer into a 
                full-stack developer who thrives on solving complex problems. I believe that 
                great software is not just about clean code—it's about creating experiences 
                that make people's lives better.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers. I'm passionate about 
                the intersection of technology and human experience.
              </p>
            </div>

            <Card className="bg-card/30 backdrop-blur-md border-primary/20 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                    <span>Based in Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-neon-purple" />
                    <span>5+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-neon-pink" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-neon-green" />
                    <span>Open Source Contributor</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Power-Ups Section (Skills) */}
      <section id="power-ups" className="py-20 px-6 bg-card/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Power-Ups
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">My arsenal of technical skills</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <SkillRadar />
            </div>
            
            <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
                  { name: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
                  { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
                  { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'] },
                ].map((category, index) => (
                  <Card key={index} className="bg-card/30 backdrop-blur-md border-primary/20">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-primary mb-2">{category.name}</h4>
                      <div className="space-y-1">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="text-sm text-muted-foreground">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section (Projects) */}
      <section id="missions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
                Missions Completed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Projects that showcase my journey</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Ready to start your next project?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about technology and innovation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">nicholas.maina@example.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+254 712 345 678</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-muted-foreground">@nicholasmaina</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/30 backdrop-blur-md border-primary/20 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 cursor-pointer">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Nicholas</span>
              <span className="text-foreground ml-2">Maina Mureithi</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Software Engineer • Creative Problem Solver • Innovation Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:nicholas.maina@example.com" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/10 text-sm text-muted-foreground">
              © 2024 Nicholas Maina Mureithi. Crafted with passion and code.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
