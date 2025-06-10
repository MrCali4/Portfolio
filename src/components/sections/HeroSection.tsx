
import { ParticleField } from '@/components/ParticleField';
import { TypewriterText } from '@/components/TypewriterText';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=face')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      <ParticleField />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
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
  );
};
