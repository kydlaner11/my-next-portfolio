import footerBg from "@/assets/footer.jpg";

const FooterSection = () => {
  return (
    <footer>
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <h2 className="font-bold text-4xl md:text-9xl tracking-tight">
            RENALDY
          </h2>
          <div className="text-sm leading-relaxed opacity-80">
            <p className="font-semibold mb-1 opacity-100">Mickael Renaldy</p>
            <p>Based in Sidoarjo</p>
            <p>Telp: 089524309404</p>
            <p>Email: mickaelg566@gmail.com</p>
            <p>Sosial: @mickael.naldy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
