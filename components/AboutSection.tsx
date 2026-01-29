import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE — OVERLAPPING */}
        <div className="relative -mt-50 px-8 z-20">
          <div className="bg-white p-4 shadow-xl">
            <img
              src="/images/webp/img13.webp"
              alt="About Abok Adventures"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="md:pt-0 relative -mt-20">
          <p className="text-[#8B4513] font-medium text-5xl mb-2 title-emphasis">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Make Your Tour Memorable and Safe With Us
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
