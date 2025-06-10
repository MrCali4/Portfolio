
import { useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BackstorySection } from '@/components/sections/BackstorySection';
import { PowerUpsSection } from '@/components/sections/PowerUpsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

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
      
      <HeroSection />
      <StatsSection />
      <BackstorySection />
      <PowerUpsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
