
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { ColorThemeSelector } from './ColorThemeSelector';
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'backstory', label: 'Backstory' },
    { id: 'power-ups', label: 'Power-Ups' },
    { id: 'missions', label: 'Missions' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            <ColorThemeSelector />
            <div className="w-px h-6 bg-border" />
            <ThemeToggle />
          </div>

          <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DrawerTrigger asChild>
              <button className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-80 max-w-[80vw] bg-background border-r border-border rounded-none left-0 right-auto translate-x-0 data-[state=closed]:-translate-x-full">
              <div className="flex flex-col h-full">
                <DrawerHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <Logo size="sm" />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </DrawerHeader>
                
                <div className="flex-1 p-6">
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer font-medium ${
                          activeSection === item.id
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-foreground">Theme</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ColorThemeSelector />
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
