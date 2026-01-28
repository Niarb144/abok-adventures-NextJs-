"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export function VideoBanner({ onPlay }: { onPlay?: () => void }) {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/webp/img6.webp)" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Play button */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlay}
          className="w-16 h-16 rounded-full bg-white text-[#8B4513]
                     flex items-center justify-center shadow-xl"
          aria-label="Play video"
        >
          <FaPlay className="ml-1 text-lg" />
        </motion.button>
      </div>
    </section>
  );
}
