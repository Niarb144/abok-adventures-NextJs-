"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export function VideoBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      animate={{ height: isPlaying ? "100vh" : "60vh" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* VIDEO / POSTER */}
      <div className="absolute inset-0">
        {isPlaying ? (
          <video
            className="w-full h-full object-cover"
            src="/images/video/ABOK.mp4"
            autoPlay
            muted
            playsInline
            controls={false}
          />
        ) : (
          <img
            src="/images/webp/img6.webp"
            alt="Safari Preview"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* OVERLAY */}
      <motion.div
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/40"
      />

      {/* PLAY BUTTON */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative z-10 flex items-center justify-center h-full"
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-white text-[#8B4513]
                         flex items-center justify-center shadow-xl"
              aria-label="Play video"
            >
              <FaPlay className="ml-1 text-2xl" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
