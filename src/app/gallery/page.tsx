"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaClapperboard } from "react-icons/fa6";


const galleryItems = [
  { type: "image", src: "/carousel2/img3.jpg" },
  { type: "video", src: "/carousel2/video2.mp4" },
  { type: "image", src: "/carousel2/img2.jpg" },
  { type: "video", src: "/carousel2/video5.mp4" },
  { type: "image", src: "/carousel2/img1.jpg" },
  { type: "video", src: "/carousel2/video3.mp4" },
  { type: "image", src: "/carousel2/img4.jpg" },
  { type: "video", src: "/carousel2/video6.mp4" },
  { type: "image", src: "/carousel2/img5.jpg" },
  { type: "video", src: "/carousel2/video8.mp4" },
  { type: "image", src: "/carousel2/img6.jpg" },
  { type: "video", src: "/carousel2/video7.mp4" },
  { type: "image", src: "/carousel2/img7.png" },
  { type: "video", src: "/carousel2/vid1.mp4" },
  { type: "image", src: "/carousel2/img8.jpg" },
];

export default function GalleryPage() {
  return (
    <section className="relative min-h-screen w-full bg-[#0c0c0c] text-white pt-20 pb-6 px-6 md:px-10">
      <Navbar isGalleryPage={true} />

      {/* HEADER */}
      <div className="text-center mb-16 md:mt-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
          OUR WORK
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Explore our collection of illustrations, animations, and collaborations
          that bring stories to life through The Canvas Studio.
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-square overflow-hidden rounded-[25px] bg-[#1a1a1a]"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery item ${i + 1}`}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* BOTTOM CTA SECTION */}
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to paint your story?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* CREATE YOUR CANVAS */}
          <a
            href="/canvas-studio"
            className="bg-[#8C5FEE] text-white px-6 py-3 rounded-md font-medium 
            hover:opacity-90 transition-all inline-flex items-center justify-center"
          >
            <span>CREATE YOUR CANVAS</span>
            <span className="inline-flex items-center justify-center w-8 h-7 rounded-full ml-2">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5h9"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M7 1l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>

          {/* BACK HOME */}
          <a
            href="/"
            className="border border-[#8C5FEE] text-[#8C5FEE] px-6 py-3 rounded-md font-medium 
            hover:bg-[#8C5FEE] hover:text-white transition-all inline-flex items-center justify-center"
          >
            <span className="inline-flex items-center justify-center w-8 h-7 rounded-full mr-2">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M1 5h9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M7 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>BACK TO HOME</span>
          </a>
        </div>

        {/* FOOTER */}
        <footer className="text-gray-400 text-sm mt-10">
          © 2025 The Canvas. All rights reserved.
        </footer>
      </div>

      {/* FLOATING COMMISSION BUTTON */}
      <Link
        href="/request-animation"
        className="
          fixed bottom-6 left-6 z-50
          flex items-center gap-3
          px-4 py-2
          rounded-xl
          bg-[#8C5FEE]
          text-white text-sm font-semibold
          shadow-[0_10px_40px_rgba(140,95,238,0.45)]
          hover:shadow-[0_15px_55px_rgba(140,95,238,0.6)]
          hover:scale-105
          transition-all duration-300
        "
      >
        {/* Icon Bubble */}
        <span
          className="
            flex items-center justify-center
            w-9 h-9
            rounded-lg
            bg-white/15
          "
        >
          <FaClapperboard className="text-white text-sm" />
        </span>

        <span>Make Animation Request</span>
      </Link>
    </section>
  );
}
