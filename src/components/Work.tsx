import ProjectCard from "./ProjectCard";
import projectTechfest from "@/assets/project-techfest.jpg";
import projectAwareness from "@/assets/project-awareness.jpg";
import projectHackathon from "@/assets/project-hackathon.jpg";
import projectCultural from "@/assets/project-cultural.jpg";

const projects = [
  {
    title: "TechFest 2024",
    category: "Event Branding",
    description:
      "Led the complete visual identity for our college's flagship tech festival. Created posters, social media creatives, standees, and digital assets that captured the energy of innovation while maintaining clarity and accessibility.",
    approach:
      "I focused on bold gradients and dynamic shapes to convey movement and excitement. The typography was kept clean and modern to balance the vibrant colors, ensuring the key information remained readable even from a distance.",
    image: projectTechfest,
  },
  {
    title: "Mental Health Matters",
    category: "Social Impact Campaign",
    description:
      "Designed a series of Instagram posts and stories for a student-led mental health awareness initiative. The goal was to create visuals that felt safe, approachable, and genuinely supportive rather than clinical or distant.",
    approach:
      "Soft, warm color palettes with gentle illustrations. I avoided harsh contrasts and instead used flowing shapes that felt calming. Every visual element was chosen to reduce anxiety, not add to it.",
    image: projectAwareness,
  },
  {
    title: "Code Sprint Hackathon",
    category: "Event Collateral",
    description:
      "Created the complete visual package for a 24-hour coding competition—from pre-event teasers to day-of signage. The challenge was to make tech feel exciting without falling into overused futuristic clichés.",
    approach:
      "Circuit board patterns reimagined as design elements, with a dark theme that felt premium yet energetic. The blue neon accents added urgency without overwhelming the core information hierarchy.",
    image: projectHackathon,
  },
  {
    title: "Utsav Cultural Fest",
    category: "Social Media Templates",
    description:
      "Developed a cohesive set of Instagram templates for our annual cultural festival. The challenge was honoring traditional aesthetics while making them feel fresh and shareable for a young audience.",
    approach:
      "Fusion of traditional Indian motifs with modern layout principles. Rich magentas and golds balanced with structured grid layouts. Each template was designed to be flexible while maintaining brand consistency.",
    image: projectCultural,
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-sm font-medium text-primary mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground mb-6">
            Projects that shaped
            <br />
            <span className="text-muted-foreground italic">my design thinking.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Each project taught me something new about visual communication—whether it was 
            grabbing attention in a crowded feed, making complex information accessible, 
            or creating emotional connections through design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
