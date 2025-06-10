
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-card/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            <span className="bg-gradient-to-r from-electric-400 to-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Ready to start your next project?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">nick@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+254 712 345 678</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-muted-foreground">@nick</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur-md border-border animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-electric-500 hover:from-electric-600 hover:to-primary transition-all duration-300 cursor-pointer font-semibold shadow-glow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
