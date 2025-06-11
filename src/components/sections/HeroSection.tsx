
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
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>
      
      <ParticleField />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          {/* Glitch effect container */}
          <div className="relative mb-6">
            <h1 className="text-7xl md:text-9xl font-bold font-mono relative">
              {/* Main text with holographic effect */}
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-electric-400 via-primary to-electric-600 bg-clip-text text-transparent animate-pulse">
                  ▲ APEX
                </span>
                {/* Holographic lines */}
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-400/20 to-primary/20 blur-sm" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-400 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <br />
              
              <div className="relative inline-block mt-4">
                <span className="text-foreground relative">
                  {/* Scanning line effect */}
                  <span className="relative overflow-hidden inline-block">
                    ARCHITECT
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-400/50 to-transparent w-full h-full animate-[slideIn_3s_ease-in-out_infinite] transform -skew-x-12" />
                  </span>
                </span>
                {/* Corner brackets */}
                <span className="absolute -top-2 -left-2 text-electric-400 text-2xl font-mono">┌</span>
                <span className="absolute -top-2 -right-2 text-electric-400 text-2xl font-mono">┐</span>
                <span className="absolute -bottom-2 -left-2 text-electric-400 text-2xl font-mono">└</span>
                <span className="absolute -bottom-2 -right-2 text-electric-400 text-2xl font-mono">┘</span>
              </div>
            </h1>
            
            {/* Digital artifacts */}
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-electric-400 animate-ping" />
            <div className="absolute top-1/4 -right-6 w-1 h-1 bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-8 w-1 h-8 bg-gradient-to-t from-electric-600 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Command line style status */}
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center font-mono">
            <span className="text-electric-400 mr-2">❯</span>
            <span className="text-muted-foreground mr-4 font-medium">./initialize</span>
            <span className="text-electric-400 mr-2">--role=</span>
            <TypewriterText 
              words={['FULLSTACK_DEV', 'SYSTEM_ARCHITECT', 'CODE_WIZARD', 'DIGITAL_ALCHEMIST', 'TECH_MAVERICK']}
              className="text-primary font-bold"
            />
            <span className="animate-pulse text-electric-400 ml-1">█</span>
          </div>
          
          {/* Matrix-style description */}
          <div className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
            <div className="border border-electric-400/30 bg-background/20 backdrop-blur-sm rounded-lg p-6 relative">
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-electric-400/20">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-electric-400 text-sm ml-2">~/profile/bio.log</span>
              </div>
              <p>
                <span className="text-electric-400">[INFO]</span> Engineering tomorrow's digital landscape today
                <br />
                <span className="text-electric-400">[EXEC]</span> Transforming abstract concepts → functional reality
                <br />
                <span className="text-electric-400">[PROC]</span> Optimizing algorithms for maximum impact
              </p>
              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-400/10 to-transparent animate-[slideIn_4s_ease-in-out_infinite] pointer-events-none" />
            </div>
          </div>
          
          {/* Futuristic action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-primary via-electric-500 to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 transform hover:scale-105 cursor-pointer font-bold shadow-glow font-mono text-lg px-8 py-4 border border-electric-400/50"
              onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-electric-400">▶</span>
                DEPLOY_PROJECTS.exe
                <span className="animate-pulse">⚡</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-400/20 to-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="relative border-2 border-electric-400/50 text-electric-400 hover:bg-electric-400/10 hover:border-electric-400 transition-all duration-300 transform hover:scale-105 cursor-pointer font-bold font-mono text-lg px-8 py-4 bg-background/50 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>◈</span>
                ESTABLISH_CONNECTION
                <span className="animate-ping">◈</span>
              </span>
              {/* Hover scan line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-400/30 to-transparent w-0 hover:w-full transition-all duration-500 -skew-x-12" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-electric-400 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-electric-400 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="absolute -inset-2 border border-electric-400/30 rounded-full animate-ping" />
        </div>
      </div>
    </section>
  );
};
