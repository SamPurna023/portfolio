import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import mee from "@/assets/mee.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
          <div className="max-w-4xl">
          {/* Intro tag */}
          <p className="text-sm font-medium text-primary mb-6 animate-fade-up opacity-0">
            Graphic Designer •  UI-focused Creative
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 animate-fade-up opacity-0 animate-delay-100">
            Hi, I'm <span className="text-primary italic">Sampurna</span>
            <br />
            <span className="text-muted-foreground">I turn ideas into visuals.</span>
          </h1>

          {/* Subtext */}
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-fade-up opacity-0 animate-delay-200 space-y-4">
            <p>
              I’m a visual storyteller who thrives in fast-paced, collaborative tech
              environments. My journey began by leading design efforts for campus tech
              communities and large-scale events, where I learned to turn complex ideas into
              clear, engaging visuals under real deadlines.
            </p>

            <p>
              I work best by learning through doing—experimenting, iterating, and refining as
              I go. This hands-on approach helps me bridge creative thinking with practical
              execution, whether I’m building social media campaigns, event branding, or
              foundational brand identities.
            </p>
          </div>

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

          {/* Hero illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-up opacity-0 lg:animate-delay-300">
            <div className="relative w-70 h-70 md:w-84 md:h-84">
              <div
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110"
                aria-hidden="true"
              />
              <img
                src={mee}
                alt="Illustrated avatar of Sampurna"
                className="relative w-full h-full object-contain drop-shadow-xl"
              />
            </div>
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
