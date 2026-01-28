"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Track ONLY hero scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Lightweight transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.55]);

  return (
    <>
      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Background (NOT fixed) */}
        <motion.div
          style={{ y: bgY ,
            backgroundImage: "url(/images/webp/img6.webp)"
          }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        {/* Content */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 min-h-screen flex items-center px-6 md:px-24 md:mt-28"
        >
          <div className="max-w-3xl">
            <p className="text-white/80 text-3xl md:text-4xl mb-3">
              Welcome to Abok Adventures{" "}
              <span className="text-[#8B4513] font-semibold">&</span> Safaris
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Discover Your Favorite
              <br />
              Safaris with Us
            </h1>

            <p className="mt-6 text-white/80 text-lg max-w-xl">
              Travel to different corners of the African landscape, without
              going around in circles.
            </p>

            <div className="mt-10">
              <a
                href="/tours"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8B4513] text-white font-semibold hover:bg-orange-600 transition"
              >
                Book a Safari
              </a>
            </div>
          </div>
        </motion.div>

        {/* PLAY BUTTON */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20">
          <motion.span
            className="absolute inset-0 rounded-full border border-[#8B4513]/80"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-[#8B4513]/80"
            animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />

          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-20 h-20 rounded-full bg-white text-[#8B4513]
                       flex items-center justify-center shadow-xl"
          >
            <FaPlay className="ml-1 text-2xl" />
          </motion.button>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 text-white text-xl"
              >
                <FaTimes />
              </button>

              <video
                src="/images/video/ABOK.mp4"
                autoPlay
                muted
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
