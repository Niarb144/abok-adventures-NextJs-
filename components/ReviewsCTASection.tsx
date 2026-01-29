import Link from "next/link";
import { FaGoogle, FaTripadvisor } from "react-icons/fa";

export default function ReviewsCTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TOP REVIEW CTA ===== */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8B4513] title-emphasis">
            Leave Us a Review
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Your feedback means the world to us! Share your safari experience
            on Google or Tripadvisor
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Google */}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md
                         bg-[#8B4513] text-white font-semibold
                         hover:bg-orange-700 transition"
            >
              <FaGoogle />
              Leave a Review on Google
            </a>

            {/* Tripadvisor */}
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md
                         bg-green-700 text-white font-semibold
                         hover:bg-green-800 transition"
            >
              <FaTripadvisor />
              Leave a Review on Tripadvisor
            </a>
          </div>
        </div>

        {/* ===== BOTTOM FULL-WIDTH CTA ===== */}
        <div className="relative overflow-hidden rounded-md">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/webp/img5.webp)" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 py-20 px-6 text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-2">
              We Are Abok Adventures & Safaris
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">
              Book your tours and safaris with us now.
            </h3>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded
                           bg-[#8B4513] text-white font-semibold
                           hover:bg-orange-700 transition"
              >
                Ask For A Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
