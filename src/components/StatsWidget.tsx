
import { useState, useEffect } from 'react';
import { Code, Github, Zap, Trophy } from 'lucide-react';

export const StatsWidget = () => {
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    commits: 0,
    achievements: 0,
  });

  useEffect(() => {
    // Animate numbers counting up
    const targetStats = {
      experience: 5,
      projects: 42,
      commits: 1250,
      achievements: 28,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        experience: Math.floor(targetStats.experience * progress),
        projects: Math.floor(targetStats.projects * progress),
        commits: Math.floor(targetStats.commits * progress),
        achievements: Math.floor(targetStats.achievements * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    {
      icon: Code,
      label: 'Years Experience',
      value: stats.experience,
      color: 'text-neon-blue',
    },
    {
      icon: Zap,
      label: 'Projects Completed',
      value: stats.projects,
      color: 'text-neon-purple',
    },
    {
      icon: Github,
      label: 'GitHub Commits',
      value: stats.commits.toLocaleString(),
      color: 'text-neon-pink',
    },
    {
      icon: Trophy,
      label: 'Achievements',
      value: stats.achievements,
      color: 'text-neon-green',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="bg-card/30 backdrop-blur-md border border-primary/20 rounded-lg p-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-card/50 animate-fadeIn"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
          <div className="text-2xl font-bold text-foreground mb-1">
            {item.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};
