import { span } from "framer-motion/m";
import Link from "next/link";

import { FaTiktok, FaFacebookF, FaInstagram, FaPhone, FaRegPaperPlane } from "react-icons/fa6";
import { PiMapPinArea } from "react-icons/pi";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat pt-12 pb-6 text-gray-800"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* About */}
          <div>
            <h2 className="text-[#8B4513] text-xl font-semibold mb-4">
              About
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Abok Adventures is a premier travel agency specializing in
              unforgettable African safaris across Kenya and Tanzania. We
              craft authentic experiences that connect travelers with the
              breathtaking landscapes, diverse wildlife, and rich cultures
              of East Africa.
            </p>

            <ul className="flex gap-4 text-[#8B4513] mt-5">
              <li>
                <a href="https://www.tiktok.com/@abokadventuresandsafaris" target="_blank">
                  <FaTiktok size={22} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61579892807201" target="_blank">
                  <FaFacebookF size={22} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abokadventuresandsafaris/" target="_blank">
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-[#8B4513] text-xl font-semibold mb-4">
              Information
            </h2>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/contact">Online Enquiry</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link href="/contact">Call Us</Link></li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-[#8B4513] text-xl font-semibold mb-4">
              Experience
            </h2>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/destination">Adventure</Link></li>
              <li><Link href="/hotel">Hotel & Restaurant</Link></li>
              <li><Link href="/destination">Beach</Link></li>
              <li><Link href="/destination">Nature</Link></li>
              <li><Link href="/hotel">Camping</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-[#8B4513] text-xl font-semibold mb-4">
              Have a Question?
            </h2>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <PiMapPinArea size={18} />
                <span>CBD Nairobi, Kenya</span>
              </li>

              <li className="flex items-start gap-2">
                <FaPhone size={18} />
                <a href="https://wa.me/254759335885" target="_blank">
                  +254 759 335 885
                </a>
              </li>

              <li className="flex items-start gap-2">
                <FaRegPaperPlane size={18} />
                <Link href="/contact">info@abokadventures.com</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm border-t pt-4">
          © {new Date().getFullYear()} Abok Adventures & Safaris. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

