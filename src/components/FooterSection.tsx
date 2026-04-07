import footerBg from "@/assets/footer-bg.jpg";

const FooterSection = () => {
  return (
    <footer>
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight">
            CANTIK SEGAR
          </h2>
          <div className="text-sm leading-relaxed opacity-80">
            <p className="font-semibold mb-1 opacity-100">Salma Friani</p>
            <p>Jl. Asem Jawa 40, Cibodas, Tangerang 15401</p>
            <p>Telp: 021 123 456 7890</p>
            <p>Email: halo@situssupercanggih.co.id</p>
            <p>Sosial: @situssupercanggih</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
