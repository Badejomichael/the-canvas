import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cms-bg.jpg"
        alt="Join Community Background"
        fill
        className="object-cover"
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-start justify-center text-white h-full">
        <div className="max-w-lg space-y-4">
          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            Ready to paint <br /> your story?
          </h2>
          <p className=" md:text-lg md:text-base opacity-90">Join our community</p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://x.com/canvassary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:opacity-70 transition-all"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://discord.com/invite/thecanvas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:opacity-70 transition-all"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Copyright - pinned to bottom */}
        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-md text-white/80 text-center">
          © 2025 The Canvas. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
