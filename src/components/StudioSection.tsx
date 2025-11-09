"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const topItems = [
  { type: "image", src: "/carousel2/img1.jpg" },
  { type: "video", src: "/carousel2/vid1.mp4" },
  { type: "image", src: "/carousel2/img2.jpg" },
  { type: "video", src: "/carousel2/video2.mp4" },
  { type: "video", src: "/carousel2/video5.mp4" },
  { type: "image", src: "/carousel2/img3.jpg" },
  { type: "video", src: "/carousel2/video8.mp4" },
  { type: "image", src: "/carousel2/img4.jpg" },
  { type: "video", src: "/carousel2/video6.mp4" },
];

const bottomItems = [
  { type: "video", src: "/carousel2/video3.mp4" },
  { type: "image", src: "/carousel2/img5.jpg" },
  { type: "video", src: "/carousel2/video9.mp4" },
  { type: "image", src: "/carousel2/img6.jpg" },
  { type: "video", src: "/carousel2/video6.mp4" },
  { type: "video", src: "/carousel2/video7.mp4" },
  { type: "image", src: "/carousel2/img7.png" },
  { type: "video", src: "/carousel2/vid10.mp4" },
];

export default function StudioSection() {
  const renderItem = (item: { type: string; src: string }, i: number) => (
    <div
      key={i}
      id="studio"
      className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden flex-shrink-0 bg-[#1a1a1a]"
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={`Studio item ${i + 1}`}
          fill
          sizes="300px"
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
    </div>
  );

  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
          STUDIO
        </h2>
        <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
          The Canvas also works as a 2D animation studio helping creators and
          projects tell their stories visually. From character design to
          motion, we’ve brought ideas to life for Chog, Overnads, The Daks,
          Chewy, Roarnads and more.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-12">
          {/* Create Your Canvas (Primary) */}
          <Link
            href="https://canvas-studio.xyz/" 
            target="blank"
            className="bg-[#8C5FEE] text-white font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90 transition-all inline-flex items-center"
          >
            <span>CREATE YOUR CANVAS</span>
            <span className="inline-flex items-center justify-center w-8 h-7 rounded-full">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="block"
              >
                <path
                  d="M1 5h9"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* View Our Work (Secondary) */}
          <Link
            href="/gallery" 
            className="border border-[#8C5FEE] text-[#8C5FEE] font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#8C5FEE] hover:text-white transition-all inline-flex items-center"
          >
            <span>VIEW OUR WORK</span>
            <span className="inline-flex items-center justify-center w-8 h-7 rounded-full">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="block"
              >
                <path
                  d="M1 5h9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

      </div>

      {/* Top Carousel */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll-right gap-4 sm:gap-6">
          {[...topItems, ...topItems].map(renderItem)}
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="overflow-hidden w-full mt-6">
        <div className="flex animate-scroll-left gap-4 sm:gap-6">
          {[...bottomItems, ...bottomItems].map(renderItem)}
        </div>
      </div>
    </section>
  );
}

