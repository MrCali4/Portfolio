
import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const colorThemes = [
  { name: 'Electric Green', value: 'green', primary: '#22c55e' },
  { name: 'Ocean Blue', value: 'blue', primary: '#3b82f6' },
  { name: 'Royal Purple', value: 'purple', primary: '#8b5cf6' },
  { name: 'Sunset Orange', value: 'orange', primary: '#f97316' },
  { name: 'Cherry Red', value: 'red', primary: '#ef4444' },
  { name: 'Cyber Pink', value: 'pink', primary: '#ec4899' },
];

export const ColorThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState('green');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('color-theme') || 'green';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const root = document.documentElement;
    
    switch (theme) {
      case 'blue':
        root.style.setProperty('--primary', '214 100% 59%');
        break;
      case 'purple':
        root.style.setProperty('--primary', '262 83% 58%');
        break;
      case 'orange':
        root.style.setProperty('--primary', '20 91% 48%');
        break;
      case 'red':
        root.style.setProperty('--primary', '0 84% 60%');
        break;
      case 'pink':
        root.style.setProperty('--primary', '330 81% 60%');
        break;
      default: // green
        root.style.setProperty('--primary', '142 76% 36%');
        break;
    }
  };

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('color-theme', theme);
    setIsOpen(false);
  };

  const currentThemeData = colorThemes.find(t => t.value === currentTheme) || colorThemes[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg transition-all duration-300 hover:bg-primary/30 hover:scale-105"
        aria-label="Select color theme"
      >
        <Palette className="w-5 h-5 text-primary" />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg p-3 min-w-[200px] z-50">
          <div className="text-sm font-medium text-foreground mb-3">Choose Theme</div>
          <div className="grid grid-cols-2 gap-2">
            {colorThemes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => changeTheme(theme.value)}
                className={`flex items-center gap-2 p-2 rounded-md transition-all duration-200 hover:bg-muted/50 ${
                  currentTheme === theme.value ? 'bg-primary/10 border border-primary/30' : ''
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: theme.primary }}
                />
                <span className="text-xs text-muted-foreground">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
