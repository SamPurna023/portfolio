import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      <div className="container">
        <div className="max-w-4xl">
          {/* Intro tag */}
          <p className="text-sm font-medium text-primary mb-6 animate-fade-up opacity-0">
            Graphic Designer & Design Lead
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 animate-fade-up opacity-0 animate-delay-100">
            Hi, I'm <span className="text-primary italic">Sampurna</span>
            <br />
            <span className="text-muted-foreground">I design with intention.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-fade-up opacity-0 animate-delay-200">
            I'm a student designer who learned by doing—leading design teams for tech events, 
            creating impactful visuals for social campaigns, and crafting stories through 
            posters, banners, and social media creatives.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animate-delay-300">
            <Button variant="hero" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animate-delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
