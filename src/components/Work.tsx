import ProjectCard from "./ProjectCard";
import projectGenAi from "@/assets/project-gen-ai.jpg";
import projectZostel1 from "@/assets/project-zostel-1.jpg";
import projectZostel2 from "@/assets/project-zostel-2.png";
import projectZostel3 from "@/assets/project-zostel-3.png";
import projectBaby from "@/assets/project-baby.png";
import projectGrocer1 from "@/assets/project-grocer-1.png";
import projectGrocer2 from "@/assets/project-grocer-2.png";
import projectGrocer3 from "@/assets/project-grocer-3.png";
import projectGrocer4 from "@/assets/project-grocer-4.png";
import projectGrocer5 from "@/assets/project-grocer-5.png";
import projectGrocer6 from "@/assets/project-grocer-6.png";

const projects = [  
  {
    title: "Zostel Kasol Launch Campaign",
    category: "Brand Campaign · Social Media",
    description:
      "Designed a social media campaign to announce the launch of Zostel Kasol, focusing on wanderlust, warmth, and the feeling of arrival. The visuals were crafted to spark curiosity, build anticipation, and connect with young travelers through storytelling-led posts and swipe-based narratives.",
    approach:
      "To drive organic engagement, this campaign utilized immersive location photography and conversational copy. I balanced warm, natural aesthetics with bold typography to ensure readability while creating a swipe-ready narrative that prioritized emotional connection and brand discovery.",
    image: [projectZostel1, projectZostel2, projectZostel3],
  },
  {
    title: "Maternal Care Awareness Visual",
    category: "Social Impact · Awareness Campaign",
    description:
      "Designed a supportive and emotionally sensitive visual for a maternal care awareness initiative. The goal was to communicate reassurance and safety through soft illustrations, warm tones, and nurturing symbolism—making the message approachable and comforting rather than instructional or clinical.",
    approach:
      "Used warm color palettes, organic shapes, and gentle typography to evoke calm and trust. The illustration style and composition were intentionally minimal to keep the focus on emotional connection and clarity of message.",
    image: projectBaby,
    imageClassName: "w-full max-w-md mx-auto",
  },
  {
    title: "Grocery App UI/UX Case Study",
    category: "Grocery App UI Carousel",
    description:
      "Mobile UI screens for a grocery app, showcasing key flows from home and browse to product details, cart, favorites, and payment—highlighting a warm gradient palette and clean, card-based layout.",
    approach:
      "Focused on clarity and hierarchy with large tap targets, calm gradients, and consistent iconography across home, search, product, cart, and payment screens. The carousel presents the sequence of UI screens to communicate the end-to-end flow.",
    image: [
      projectGrocer1,
      projectGrocer2,
      projectGrocer3,
      projectGrocer4,
      projectGrocer5,
      projectGrocer6,
    ],
  },
  {
    title: "GenAI Study Jams 2024",
    category: "Event Branding",
    description: (
      <>
        <strong>Lead Designer | GenAI Study Jams (GDG On Campus)</strong>{" "}
        Developed a comprehensive visual identity for a month-long AI learning
        initiative at Gauhati University. I engineered a futuristic design
        system centered on innovation and momentum, ensuring the visual language
        was scalable across print, web, and social platforms. The campaign
        successfully balanced high-concept aesthetics with functional clarity to
        drive student engagement.
      </>
    ),
    approach:
      "To capture the energy of Generative AI, I paired vibrant gradients and glowing overlays with geometric motifs symbolizing discovery. By balancing bold typography with high-contrast layouts, I ensured readability across digital feeds and campus displays. I maintained strict GDG brand integrity while introducing strategic variations to prevent content fatigue and boost campaign recall.",
    image: projectGenAi,
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
            <span className="text-muted-foreground italic">
              my design thinking.
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Each project taught me something new about visual
            communication—whether it was grabbing attention in a crowded feed,
            making complex information accessible, or creating emotional
            connections through design.
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
