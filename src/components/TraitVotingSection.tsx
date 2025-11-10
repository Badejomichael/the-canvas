"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubmitTraitModal from "@/components/SubmitTraitModal";
import { useState } from "react";

const TraitVotingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="trait-voting"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 bg-[#FFFFFF]"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 tracking-wide">
        TRAIT VOTING
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-800 leading-relaxed mb-8 md:text-lg md:text-base">
        The Canvas lets you suggest the traits you'd love to see in the
        collection. Through a system called Trait Voting, the community chooses
        which traits are added. Winning traits are included in the next drop,
        and all nominees receive special benefits (TBA).
      </p>

      {/* Submit Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="purple-btn text-white font-semibold text-sm px-5 py-2 rounded-md mb-12 hover:opacity-90 transition-all inline-flex items-center"
      >
        <span>SUBMIT TRAIT IDEA</span>

        {/* Rounded arrow icon */}
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
      </button>

      <SubmitTraitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

        <div className="relative flex justify-center items-center overflow-hidden">
          <div className="w-[90%] max-w-[1236px] overflow-hidden">
            <Image
              src="/s.jpg"
              alt="Trait Voting Characters"
              width={1236}
              height={695}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
    </section>
  );
};

export default TraitVotingSection;
