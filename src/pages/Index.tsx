import { useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ParticleField } from '@/components/ParticleField';
import { TypewriterText } from '@/components/TypewriterText';
import { SkillRadar } from '@/components/SkillRadar';
import { ProjectCard } from '@/components/ProjectCard';
import { StatsWidget } from '@/components/StatsWidget';
import { Navigation } from '@/components/Navigation';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Eye, Code, Zap, Users, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

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
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fadeIn">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-electric-400/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-electric-400/10 flex items-center justify-center text-muted-foreground">
                <span className="text-4xl font-bold text-primary">N</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-inter">
              <span className="block text-foreground">Nick</span>
              <span className="block bg-gradient-to-r from-primary via-electric-400 to-electric-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
              <span className="text-muted-foreground mr-4 font-medium">I'm a</span>
              <TypewriterText 
                words={['Full-Stack Developer', 'Problem Solver', 'Code Architect', 'Tech Enthusiast']}
                className="text-primary font-bold font-mono"
              />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Crafting elegant digital solutions with modern technologies. 
              I transform complex problems into clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-electric-500 hover:from-electric-600 hover:to-primary transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold shadow-glow"
                onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
              <span className="bg-gradient-to-r from-primary to-electric-500 bg-clip-text text-transparent">
                Backstory
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">The journey that shaped my code</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey into software engineering began with curiosity and a passion for solving problems. 
                What started as building simple websites evolved into a deep love for crafting scalable, 
                efficient solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Over the past 5 years, I've evolved from a curious beginner into a full-stack developer 
                who thrives on turning complex challenges into elegant solutions. I believe great software 
                is not just about clean code—it's about creating experiences that enhance people's lives.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers. I'm passionate about the intersection of 
                technology and human experience.
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-md border-border animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-electric-500" />
                    <span>Based in Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>5+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-electric-400" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-electric-600" />
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
                {[
                  { name: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'], icon: <Code className="w-5 h-5" /> },
                  { name: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], icon: <Zap className="w-5 h-5" /> },
                  { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'], icon: <Users className="w-5 h-5" /> },
                  { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'], icon: <Eye className="w-5 h-5" /> },
                ].map((category, index) => (
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

          {/* Additional interactive skill features */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Years of Experience', value: '5+', icon: <Zap className="w-6 h-6" /> },
              { title: 'Projects Completed', value: '50+', icon: <Code className="w-6 h-6" /> },
              { title: 'Technologies Mastered', value: '20+', icon: <Users className="w-6 h-6" /> },
            ].map((stat, index) => (
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

      {/* Missions Section (Projects) */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
              <span className="bg-gradient-to-r from-electric-400 to-primary bg-clip-text text-transparent">
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
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">nick@example.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+254 712 345 678</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-muted-foreground">@nick</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-md border-border animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-electric-500 hover:from-electric-600 hover:to-primary transition-all duration-300 cursor-pointer font-semibold shadow-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <Logo size="lg" className="mb-4 justify-center flex" />
            <p className="text-muted-foreground mb-6">
              Full-Stack Developer • Problem Solver • Code Architect
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:nick@example.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 Nick. Crafted with passion and modern tech.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
