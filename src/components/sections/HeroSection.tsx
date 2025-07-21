
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-inter">
            <span className="block text-foreground tracking-wider font-mono relative">
              <span className="relative inline-block">
                N
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-electric-400 rounded-full animate-pulse"></span>
              </span>
              <span className="relative inline-block mx-1">
                I
                <span className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></span>
              </span>
              <span className="relative inline-block">
                C
                <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-electric-600 rounded-full animate-glow"></span>
              </span>
              <span className="inline-block mx-2">K</span>
            </span>
            <span className="block bg-gradient-to-r from-primary via-electric-400 to-electric-600 bg-clip-text text-transparent relative">
              <span className="relative">
                {'<'}DEVELOPER{'/>'} 
                <span className="absolute -top-2 -right-4 text-xs text-electric-400 font-mono animate-pulse">v2.0</span>
              </span>
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-8 h-12 sm:h-14 md:h-16 flex items-center justify-center">
            <span className="text-muted-foreground mr-2 sm:mr-4 font-medium font-mono text-sm sm:text-base md:text-lg lg:text-xl">[STATUS]:</span>
            <TypewriterText 
              words={['FULL-STACK_DEVELOPER', 'PROBLEM_SOLVER.EXE', 'CODE_ARCHITECT', 'TECH_INNOVATOR']}
              className="text-primary font-bold font-mono"
            />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            <span className="text-electric-400 font-mono">//</span> Crafting elegant digital solutions with cutting-edge technologies. 
            <br className="hidden sm:block" />
            <span className="text-electric-400 font-mono">//</span> Transforming complex algorithms into seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-electric-500 hover:from-electric-600 hover:to-primary transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold shadow-glow font-mono"
              onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {'>'} EXPLORE_PROJECTS
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold font-mono"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {'>'} INITIALIZE_CONTACT
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
