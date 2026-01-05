interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  approach: string;
  image: string;
  index: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  approach,
  image,
  index,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative group overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <span className="text-sm font-medium text-primary mb-3 block">
          {category}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        <div className="pt-6 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-2">Design Approach</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {approach}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
