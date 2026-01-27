import { GiParachute } from "react-icons/gi";
import { FaParachuteBox, FaRoute } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { TbMapRoute } from "react-icons/tb";


export default function ExperienceSection() {
  const cards = [
    {
      title: "Activities",
      text: "Activities such as hiking, trekking (e.g. Mount Kenya), bird watching, and water-based adventures.",
      image: "/images/webp/img1.webp",
      color: "bg-blue-900/70",
      icon: <GiParachute />,
    },
    {
      title: "Wildlife Safaris",
      text: "Tailored safaris to iconic national parks and reserves (e.g. Masai Mara, Amboseli, Samburu, Tsavo, Lake Nakuru).",
      image: "/images/webp/img5.webp",
      color: "bg-teal-900/70",
      icon: <FaRoute />,
    },
    {
      title: "Group and Private Tours",
      text: "Catering to solo travelers, couples, families, and larger groups.",
      image: "/images/webp/img20.jpg",
      color: "bg-emerald-900/70",
      icon: <MdGroups />,
    },
    {
      title: "Cultural Experiences",
      text: "Immersive tours that allow interaction with local communities and exposure to Kenyan traditions.",
      image: "/images/webp/img21.jpg",
      color: "bg-rose-900/70",
      icon: <TbMapRoute />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-[320px] overflow-hidden group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 ${card.color}`} />

                {/* Content */}
                <div className="relative z-10 p-0 text-white flex flex-col h-full">
                  <div className="w-20 h-14 bg-[#8B4513] flex items-center justify-center text-4xl mt-4">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 md:p-6">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/90 md:p-6">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Text */}
          <div>
            <h3 className="text-[#8B4513] text-3xl font-semibold mb-4 title-emphasis">
              Welcome to Abok Adventures
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              It's time to start your <br />
              Safari adventure
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Abok Adventures & Safaris is a premier tour operator based in
              Kenya, dedicated to delivering exceptional safari experiences
              across Kenya and Tanzania. We specialize in expertly crafted
              itineraries that showcase the breathtaking landscapes, diverse
              wildlife, and rich cultural heritage of East Africa.
            </p>

            <a
              href="/destinations"
              className="inline-block px-6 py-3 bg-[#8B4513] text-white font-semibold hover:bg-[#8B4513]/80 transition"
            >
              Search Destination
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
