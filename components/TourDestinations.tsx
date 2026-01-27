import Image from "next/image";
import { PiMapPinAreaThin } from "react-icons/pi";

const destinations = [
  {
    title: "Maasai Mara",
    location: "Kenya",
    image: "/images/webp/maasai-mara4.webp",
  },
  {
    title: "Samburu",
    location: "Kenya",
    image: "/images/webp/samburu.webp",
  },
  {
    title:
      "Lake Nakuru",
    location: "Kenya",
    image: "/images/webp/lakenakuru.webp",
  },
];

export default function TourDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8B4513] tracking-wide text-3xl title-emphasis font-semibold">
            Tour Destinations
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            Find Your Destinations Across Africa
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
              <div className="relative h-76 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-6 bg-[#8B4513] text-white text-md font-semibold px-2 py-1">
                    <h3>{item.title}</h3>
                </div>

                <div className="absolute bottom-2 right-0 bg-[#8B4513] text-white text-md font-medium px-2 py-2 mb-4 flex items-center gap-1 rounded-l-full">
                    <PiMapPinAreaThin /> {item.location}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
