
import { Logo } from '@/components/Logo';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <Logo size="lg" className="mb-4 justify-center flex" />
          <p className="text-muted-foreground mb-6">
            Full-Stack Developer • Problem Solver • Code Architect
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/MrCali4" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-mureithi-323972344" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/nklaus0/" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:nicholasmureithi68@gmail.com" className="group p-3 bg-primary/10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2024 Nick. Crafted with passion and modern tech.
          </div>
        </div>
      </div>
    </footer>
  );
};
