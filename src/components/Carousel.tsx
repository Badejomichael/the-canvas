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

  // Determine how many "scroll steps" are allowed
  const totalSteps = isMobile ? images.length : 3;

  // Scroll to a specific index
  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 360 + 24;
    const scrollLeft = i * cardWidth;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(scrollLeft, maxScrollLeft), behavior: "smooth" });
    setIndex(i);
  };

  const next = () => {
    const newIndex = Math.min(index + 1, totalSteps - 1);
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = Math.max(index - 1, 0);
    scrollToIndex(newIndex);
  };

  // Detect manual scrolls / swipes
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const cardWidth = 360 + 24;
        const newIndex = Math.round(el.scrollLeft / cardWidth);
        setIndex(Math.min(newIndex, totalSteps - 1));
      }, 100);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [totalSteps]);

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
            <div key={i} className="flex justify-center w-full md:block snap-center">
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
          disabled={index === 0}
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
          {Array.from({ length: totalSteps }).map((_, i) => (
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
          disabled={index === totalSteps - 1}
          className={`transition-opacity duration-300 ${
            index === totalSteps - 1
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
