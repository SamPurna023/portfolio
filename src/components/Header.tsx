import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Sampurna
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {["About", "Work", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
};

export default Header;
