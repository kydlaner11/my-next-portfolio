import bridalImg from "@/assets/bridal.jpg";
import eventImg from "@/assets/event.jpg";
import editorialImg from "@/assets/editorial.jpg";
import everydayImg from "@/assets/everyday.jpg";

const categories = [
  { title: "Kecantikan Pengantin", desc: "Glamor lembut untuk hari istimewa Anda", img: bridalImg },
  { title: "Siap Acara", desc: "Tampilan profesional untuk acara spesial", img: eventImg },
  { title: "Editorial & Kreatif", desc: "Pernyataan berani untuk pemotretan", img: editorialImg },
  { title: "Kilau Sehari-hari", desc: "Tampilan menawan untuk sehari-hari", img: everydayImg },
];

const PortfolioSection = () => {
  return (
    <section id="karya" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl mb-12">
          Penampilan untuk setiap kesempatan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group">
              <p className="text-xs font-semibold mb-1">{cat.title}</p>
              <p className="text-xs text-muted-foreground mb-3">{cat.desc}</p>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
