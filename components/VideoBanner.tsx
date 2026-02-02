"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

export function VideoBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      animate={{ height: expanded ? "100vh" : "60vh" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* VIDEO (ALWAYS MOUNTED → AUTOPLAYS ON LOAD) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/video/ABOK.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY (only when collapsed) */}
      <motion.div
        animate={{ opacity: expanded ? 0 : 0.4 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* EXPAND PLAY BUTTON */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="relative z-10 flex items-center justify-center h-full"
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpanded(true)}
              className="w-20 h-20 rounded-full bg-white text-[#8B4513]
                         flex items-center justify-center shadow-xl"
              aria-label="Expand video"
            >
              <FaPlay className="ml-1 text-2xl cursor-pointer" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLOSE BUTTON (WHEN EXPANDED) */}
      <AnimatePresence>
        {expanded && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setExpanded(false)}
            className="absolute top-6 right-6 z-20 w-12 h-12
                       rounded-full bg-black/60 text-white
                       flex items-center justify-center hover:bg-black/80"
            aria-label="Close video"
          >
            <FaTimes />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
