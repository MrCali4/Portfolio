
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Code, Zap, Users } from 'lucide-react';

export const BackstorySection = () => {
  return (
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
  );
};
