
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Code, Zap, Users, Heart, Coffee, Lightbulb } from 'lucide-react';

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

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Journey Timeline */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-electric-500 opacity-20"></div>
              
              {/* Journey Step 1 */}
              <div className="relative pl-12 pb-8 group">
                <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-to-r from-primary to-electric-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-2">The Spark</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey into software engineering began with curiosity and a passion for solving problems. 
                    What started as building simple websites evolved into a deep love for crafting scalable solutions.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">HTML/CSS</Badge>
                    <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                  </div>
                </div>
              </div>

              {/* Journey Step 2 */}
              <div className="relative pl-12 pb-8 group">
                <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-to-r from-electric-400 to-primary rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10">
                  <h3 className="text-xl font-bold text-electric-500 mb-2">The Evolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over the past 5 years, I've evolved from a curious beginner into a full-stack developer 
                    who thrives on turning complex challenges into elegant solutions.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">Python</Badge>
                  </div>
                </div>
              </div>

              {/* Journey Step 3 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-to-r from-electric-600 to-electric-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-600/10">
                  <h3 className="text-xl font-bold text-electric-600 mb-2">The Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe great software is not just about clean code—it's about creating experiences that enhance people's lives. 
                    Currently mentoring aspiring developers and contributing to open-source projects.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">Mentoring</Badge>
                    <Badge variant="secondary" className="text-xs">Open Source</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-electric-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Developer Profile</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                    <div className="w-8 h-8 bg-electric-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-electric-500" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">5+ Years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                    <div className="w-8 h-8 bg-electric-400/20 rounded-full flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-electric-400" />
                    </div>
                    <div>
                      <p className="font-medium">Specialty</p>
                      <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                    <div className="w-8 h-8 bg-electric-600/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-electric-600" />
                    </div>
                    <div>
                      <p className="font-medium">Community</p>
                      <p className="text-sm text-muted-foreground">Open Source Contributor</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact Card */}
            <Card className="bg-gradient-to-br from-electric-500/10 to-primary/10 backdrop-blur-md border-border/50 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 text-electric-500 mx-auto mb-3" />
                <h4 className="font-bold text-electric-500 mb-2">Fun Fact</h4>
                <p className="text-sm text-muted-foreground">
                  Powered by curiosity, coffee, and the endless possibilities of code ☕
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
