"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "254759335885"; // no +
  const message = encodeURIComponent(
    "Hello Abok Adventures! I would like to enquire about a safari."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

      {/* Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative"
      >
        {/* Pulse */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-500/50"
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full bg-green-500 
                     flex items-center justify-center shadow-xl"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </motion.div>
      </a>
    </div>
  );
}
