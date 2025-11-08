"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 bg-[#EBEBE6]"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 tracking-wide">
        WHAT IS THE CANVAS?
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-800 leading-relaxed mb-8 md:text-lg md:text-base">
        The Canvas is a creative project designed to help individuals build and
        express their personal brand through art. We merge community imagination
        with animation, bringing your traits, quirks, and concepts to life as
        NFTs. Each piece represents identity, story, and creativity.
      </p>

      {/* Mint Button */}
      <Link
        href="https://youtu.be/dQw4w9WgXcQ?si=ZZVWDeXrQOfqjEth"
        target="blank"
        className="as-mint-cta text-[#EE5F5F] underline underline-offset-4 hover:opacity-80 transition-all mb-12"
      >
        MINT
      </Link>


      {/* Image */}
      <div
        className="
          relative overflow-hidden rounded-xl shadow-sm
          w-full max-w-[1200px] h-auto
        "
      >
        <Image
          src="/about.jpg"
          alt="Canvas Art Closeup"
          width={1200}
          height={1503}
          className="
            object-cover w-full h-auto 
            md:rounded-xl
          "
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;
