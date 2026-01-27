"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Parallax motion values
  const bgY = useTransform(scrollY, [0, 1000], [0, 560]);
  const contentY = useTransform(scrollY, [0, 600], [0, -50]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.75]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <motion.div
          style={{ y: bgY ,
              backgroundImage: "url(/images/webp/img6.webp)"
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        {/* Content */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 min-h-screen flex items-center px-6 md:px-24"
        >
          <div className="max-w-3xl text-left md:mt-20">
            <p className="text-white/80 mb- span-emphasis text-3xl md:text-4xl">
              Welcome to Abok Adventures{" "}
              <span className="text-[#8B4513] font-semibold span-emphasis">&</span> Safaris
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

        {/* PLAY BUTTON WITH PULSE */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20">
          {/* Pulse rings */}
          <motion.span
            className="absolute inset-0 rounded-full border border-[#8B4513]/80"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-[#8B4513]/80"
            animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />

          {/* Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-20 h-20 rounded-full bg-white text-[#8B4513] 
                       flex items-center justify-center shadow-xl cursor-pointer"
            aria-label="Play video"
          >
            <FaPlay className="ml-1 text-2xl" />
          </motion.button>
        </div>
      </section>

      {/* VIDEO MODAL (lazy-loaded) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#8B4513]/80 flex items-center justify-center px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 text-white text-xl"
              >
                <FaTimes />
              </button>

              {/* IFRAME ONLY EXISTS WHEN OPEN */}
              <iframe
                className="w-full h-full"
                src="images/video/ABOK.mp4?autoplay=1&mute=1"
                title="Safari Experience"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
