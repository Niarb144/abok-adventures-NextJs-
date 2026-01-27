import Image from "next/image";
import { PiMapPinAreaThin } from "react-icons/pi";

const destinations = [
  {
    days: "4 DAYS TOUR",
    title: "Maasai Mara",
    location: "Kenya",
    image: "/images/webp/maasai-mara4.webp",
  },
  {
    days: "7 DAYS GROUP JOINING TOUR",
    title: "Samburu – Ol Pejeta – Lake Naivasha – Maasai Mara",
    location: "Kenya",
    image: "/images/webp/samburu.webp",
  },
  {
    days: "10 DAYS KENYA–TANZANIA TOUR",
    title:
      "Lake Nakuru – Maasai Mara – Serengeti – Ngorongoro – Tarangire",
    location: "Kenya, Tanzania",
    image: "/images/webp/img7.webp",
  },
];

export default function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8B4513] tracking-wide text-3xl title-emphasis font-semibold">
            Abok Adventures & Safaris
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            Select Your Destination
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <span className="text-xs text-[#8B4513] font-semibold uppercase">
                  {item.days}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                  <PiMapPinAreaThin className="text-[#8B4513]" /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
