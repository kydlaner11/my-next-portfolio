const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-heading font-bold text-lg tracking-wide">Cantik Segar</span>
        <div className="flex gap-6 text-sm font-medium">
          <button onClick={() => scrollTo("tentang")} className="hover:text-primary transition-colors">
            Tentang saya
          </button>
          <button onClick={() => scrollTo("karya")} className="hover:text-primary transition-colors">
            Karya saya
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
