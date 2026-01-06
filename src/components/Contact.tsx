import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <p className="text-sm font-medium text-primary mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
            Let's create something
            <br />
            <span className="text-primary italic">meaningful together.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            I'm open to freelance projects, part-time roles, and remote collaborations. 
            If you have a project that needs thoughtful design, I'd love to hear about it.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:sampurnabiswas.org@gmail.com">
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sampurnabiswas023/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a
              href="https://www.instagram.com/vectorsana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
