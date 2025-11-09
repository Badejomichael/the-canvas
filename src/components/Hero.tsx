import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden bg-[#EBEBE6]"
    >

        {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;



