import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="relative h-96 border-4 border-white">
          <div className="absolute top-0 -left-6 w-full h-full border-4 border-white z-0" />
          <img
            src="/images/webp/img13.webp"
            alt="About Abok Adventures"
            className="relative z-10 w-full object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[#8B4513] font-medium mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Make Your Tour Memorable and Safe <br /> With Us
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            Discover your next adventure — explore our handpicked tour
            collections and find the journey that speaks to you. With a
            focus on personalized service and unique itineraries, Abok
            Adventures & Safaris seeks to establish itself as a reputable
            and preferred choice for exploring the wonders of East Africa.
          </p>

          <div className="mt-8">
            <Link
              href="/destinations"
              className="inline-block px-6 py-3 rounded bg-[#8B4513]
                         text-white font-semibold hover:bg-orange-700 transition"
            >
              Book Your Destination
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
