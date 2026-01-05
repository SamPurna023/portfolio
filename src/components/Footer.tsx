const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sampurna Biswas. Designed with intention.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with curiosity and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
