
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Code, Zap, Users, Heart, Coffee, Lightbulb } from 'lucide-react';

export const BackstorySection = () => {
  return (
    <section id="backstory" className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-electric-500/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-inter relative">
              <span className="bg-gradient-to-r from-primary via-electric-400 to-electric-500 bg-clip-text text-transparent animate-fade-in">
                Backstory
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-electric-500/20 blur-xl -z-10 animate-pulse" />
            </h2>
          </div>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            The journey that shaped my code
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-electric-500 mx-auto mt-6 rounded-full animate-fade-in" style={{ animationDelay: '400ms' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Enhanced Journey Timeline */}
          <div className="lg:col-span-2 space-y-12 animate-fade-in">
            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-6 top-8 bottom-0 w-1 bg-gradient-to-b from-primary via-electric-400 to-electric-500 rounded-full opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-electric-400 to-electric-500 rounded-full animate-pulse opacity-50" />
              </div>
              
              {/* Education Step 1 - Primary */}
              <div className="relative pl-16 pb-12 group animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-primary to-electric-500 rounded-xl flex items-center justify-center shadow-2xl shadow-primary/25 group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-electric-500 rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
                  <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">Primary Education</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    Foundation years that sparked curiosity and love for learning.
                    Early exposure to computers and problem-solving laid the groundwork for future interests.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">2005-2012</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-500/10 text-electric-500 border-electric-500/20 hover:bg-electric-500/20 transition-colors">7 Years</Badge>
                  </div>
                </div>
              </div>

              {/* Education Step 2 - Secondary */}
              <div className="relative pl-16 pb-12 group animate-fade-in" style={{ animationDelay: '800ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-electric-400 to-primary rounded-xl flex items-center justify-center shadow-2xl shadow-electric-400/25 group-hover:scale-110 transition-all duration-500 -rotate-3 group-hover:-rotate-6">
                  <Code className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-400 to-primary rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-electric-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-500/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-electric-500/10 to-transparent rounded-full blur-2xl" />
                  <h3 className="text-2xl font-bold text-electric-500 mb-3 relative z-10">Secondary Education</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    Developed analytical thinking and discovered passion for mathematics and sciences.
                    First programming experiences began shaping the future path.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-500/10 text-electric-500 border-electric-500/20 hover:bg-electric-500/20 transition-colors">2013-2016</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">4 Years</Badge>
                  </div>
                </div>
              </div>

              {/* Education Step 3 - University */}
              <div className="relative pl-16 pb-12 group animate-fade-in" style={{ animationDelay: '1000ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-electric-600 to-electric-400 rounded-xl flex items-center justify-center shadow-2xl shadow-electric-600/25 group-hover:scale-110 transition-all duration-500 rotate-2 group-hover:rotate-4">
                  <Users className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-600 to-electric-400 rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-electric-600/40 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-600/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-electric-600/10 to-transparent rounded-full blur-2xl" />
                  <h3 className="text-2xl font-bold text-electric-600 mb-3 relative z-10">University Education</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    Formal computer science education combined with practical projects.
                    Built strong foundations in algorithms, data structures, and software engineering principles.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-600/10 text-electric-600 border-electric-600/20 hover:bg-electric-600/20 transition-colors">2017-2021</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-400/10 text-electric-400 border-electric-400/20 hover:bg-electric-400/20 transition-colors">4 Years</Badge>
                  </div>
                </div>
              </div>

              {/* Journey Step 4 - The Spark */}
              <div className="relative pl-16 pb-12 group animate-fade-in" style={{ animationDelay: '1200ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-primary to-electric-500 rounded-xl flex items-center justify-center shadow-2xl shadow-primary/25 group-hover:scale-110 transition-all duration-500 -rotate-2 group-hover:-rotate-4 animate-pulse">
                  <Lightbulb className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-electric-500 rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
                  <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">The Spark</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    My journey into software engineering began with curiosity and a passion for solving problems. 
                    What started as building simple websites evolved into a deep love for crafting scalable solutions.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">HTML/CSS</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-500/10 text-electric-500 border-electric-500/20 hover:bg-electric-500/20 transition-colors">JavaScript</Badge>
                  </div>
                </div>
              </div>

              {/* Journey Step 5 - The Evolution */}
              <div className="relative pl-16 pb-12 group animate-fade-in" style={{ animationDelay: '1400ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-electric-400 to-primary rounded-xl flex items-center justify-center shadow-2xl shadow-electric-400/25 group-hover:scale-110 transition-all duration-500 rotate-1 group-hover:rotate-3">
                  <Code className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-400 to-primary rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-electric-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-500/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-electric-500/10 to-transparent rounded-full blur-3xl" />
                  <h3 className="text-2xl font-bold text-electric-500 mb-3 relative z-10">The Evolution</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    Over the past 5 years, I've evolved from a curious beginner into a full-stack developer 
                    who thrives on turning complex challenges into elegant solutions.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-500/10 text-electric-500 border-electric-500/20 hover:bg-electric-500/20 transition-colors">React</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">Node.js</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-400/10 text-electric-400 border-electric-400/20 hover:bg-electric-400/20 transition-colors">Python</Badge>
                  </div>
                </div>
              </div>

              {/* Journey Step 6 - The Mission */}
              <div className="relative pl-16 group animate-fade-in" style={{ animationDelay: '1600ms' }}>
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-electric-600 to-electric-400 rounded-xl flex items-center justify-center shadow-2xl shadow-electric-600/25 group-hover:scale-110 transition-all duration-500 -rotate-1 group-hover:-rotate-2">
                  <Heart className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-600 to-electric-400 rounded-xl blur-md opacity-75 -z-10" />
                </div>
                <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-lg border border-border/30 rounded-2xl p-8 hover:border-electric-600/40 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-600/10 group-hover:transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-electric-600/10 to-transparent rounded-full blur-3xl" />
                  <h3 className="text-2xl font-bold text-electric-600 mb-3 relative z-10">The Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                    I believe great software is not just about clean code—it's about creating experiences that enhance people's lives. 
                    Currently mentoring aspiring developers and contributing to open-source projects.
                  </p>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-600/10 text-electric-600 border-electric-600/20 hover:bg-electric-600/20 transition-colors">Mentoring</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-electric-400/10 text-electric-400 border-electric-400/20 hover:bg-electric-400/20 transition-colors">Open Source</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-electric-500/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-electric-400 to-electric-500 rounded-2xl flex items-center justify-center mx-auto mb-6 relative group">
                    <Code className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-electric-400 to-electric-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Developer Profile</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { Icon: MapPin, label: "Location", value: "Nairobi, Kenya", color: "electric-500" },
                    { Icon: Zap, label: "Experience", value: "5+ Years", color: "primary" },
                    { Icon: Coffee, label: "Specialty", value: "Full-Stack Development", color: "electric-400" },
                    { Icon: Users, label: "Community", value: "Open Source Contributor", color: "electric-600" }
                  ].map((item, index) => (
                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm hover:from-card/60 hover:to-card/40 transition-all duration-300 group border border-border/20 hover:border-border/40" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                      <div className={`w-12 h-12 bg-${item.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.Icon className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Fun Fact Card */}
            <Card className="bg-gradient-to-br from-electric-500/20 to-primary/20 backdrop-blur-xl border-electric-500/30 hover:border-electric-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-500/25 relative overflow-hidden animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-primary/10 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-electric-500/30 rounded-full blur-2xl animate-pulse" />
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative inline-block mb-6">
                  <Coffee className="w-12 h-12 text-electric-500 mx-auto animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-electric-500/30 rounded-full blur-lg animate-pulse" />
                </div>
                <h4 className="font-bold text-electric-500 mb-4 text-xl">Fun Fact</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Powered by curiosity, coffee, and the endless possibilities of code ☕
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="px-6 py-2 bg-electric-500/10 border border-electric-500/20 rounded-full text-sm text-electric-500 font-medium">
                    🚀 Always Learning
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
