interface ProjectCardProps {
  title: string;
  category: string;
  description: React.ReactNode;
  approach: string;
  image: string | string[];
  index: number;
  imageClassName?: string;
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCard = ({
  title,
  category,
  description,
  approach,
  image,
  index,
  imageClassName = "",
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
      <div className="relative group overflow-hidden rounded-2xl bg-muted inline-block">
        {Array.isArray(image) ? (
           <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {image.map((img, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <img
                    src={img}
                    alt={`${title} ${idx + 1}`}
                     className={`w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 ${imageClassName}`}
                  />
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 z-10" />
              <CarouselNext className="right-2 z-10" />
            </Carousel>
          ) : (
            <img
              src={image}
              alt={title}
              className={`w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 ${imageClassName}`}
            />
          )}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 pointer-events-none" />
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
          <p className="text-sm font-medium text-foreground mb-2">
            Design Approach
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {approach}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
