"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/carousel/img1.jpg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
  "/carousel/img4.jpg",
  "/carousel/img5.jpg",
];

const AUTOPLAY_INTERVAL = 4000; // 4 seconds

export default function NFTCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 360 + 24; // width + gap
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setIndex(i);
  };

  const next = () => {
    const maxIndex = isMobile ? images.length - 1 : images.length - 3;
    if (index < maxIndex) {
      scrollToIndex(index + 1);
    } else {
      scrollToIndex(0); // loop
    }
  };

  const prev = () => {
    const maxIndex = isMobile ? images.length - 1 : images.length - 3;
    if (index > 0) {
      scrollToIndex(index - 1);
    } else {
      scrollToIndex(maxIndex);
    }
  };

  return (
    <div className="first-carousel flex flex-col items-center w-full overflow-hidden pt-5 pb-6 bg-[#EBEBE6]">
      {/* Main Carousel */}
      <div className="relative w-full max-w-[1800px]">
        <div
          ref={containerRef}
          className="
            flex gap-6 px-4 no-scrollbar
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            md:overflow-hidden
          "
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex justify-center w-full md:block snap-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[360px] h-[360px] flex-shrink-0 rounded-[25px] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Carousel ${i + 1}`}
                  fill
                  draggable={false}
                  className="object-cover rounded-[25px] select-none"
                />
              </motion.div>
            </div>
          ))}


        </div>
      </div>

      {/* Controls (arrows + dots) */}
      <div className="mt-8 flex items-center justify-center gap-4 bg-[#DDDDD7] rounded-[140px] px-5 py-2">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className={`transition-opacity duration-300 ${
            index === 0 ? "opacity-40 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <Image
            src="/carousel/down-arrow1.png"
            alt="Previous"
            width={24}
            height={24}
            className="rotate-90"
          />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {(isMobile ? images : [0, 1, 2]).map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-[37px] h-[12px] rounded-[140px] cursor-pointer transition-all duration-300 ${
                index === i ? "bg-[#8C5FEE]" : "bg-[#C8C8C2]"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className={`transition-opacity duration-300 ${
            index >= (isMobile ? images.length - 1 : images.length - 3)
              ? "opacity-40 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          <Image
            src="/carousel/down-arrow2.png"
            alt="Next"
            width={24}
            height={24}
            className="-rotate-90"
          />
        </button>
      </div>
    </div>
  );
}
