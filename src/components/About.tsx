const About = () => {
  const skills = [
    "Event & Social Media Creatives",
    "Poster & Banner Design",
    "Visual Storytelling",
    "Layout & Typography",
    "Brand Identity Basics",
  ];

  const tools = ["Figma", "Canva", "Adobe Illustrator", "Photoshop"];

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Story */}
          <div>
            <p className="text-sm font-medium text-primary mb-4">About Me</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground mb-8">
              Designing with curiosity,
              <br />
              <span className="text-muted-foreground italic">consistency, and care.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I didn't start with a design degree or a formal education in visual arts. 
                I started with curiosity—a deep interest in why some visuals just <em>feel</em> right, 
                why certain layouts guide your eyes effortlessly, and why good design often 
                goes unnoticed because it simply works.
              </p>
              <p>
                As a design lead for campus tech events, I learned that design isn't just 
                about making things look good—it's about solving problems. Every poster 
                I created had to grab attention in a crowded notice board. Every social 
                media creative had to tell a story in seconds.
              </p>
              <p>
                Through social impact campaigns, I discovered the power of emotionally 
                driven visuals. Design became my way of giving voice to ideas that matter. 
                Now, I bring that same intentionality to every project—asking not just 
                "what looks good?" but "what serves the purpose best?"
              </p>
            </div>
          </div>

          {/* Right column - Skills & Tools */}
          <div className="lg:pt-16">
            <div className="mb-12">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                What I Do
              </h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                Tools I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-12 pl-6 border-l-2 border-primary">
              <p className="font-serif text-lg italic text-foreground">
                "Good design is obvious. Great design is transparent."
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block not-italic">
                — Joe Sparano
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
