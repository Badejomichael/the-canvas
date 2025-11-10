"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface NavbarProps {
  isGalleryPage?: boolean;
}

const NAV_WIDTH = 256; // keep consistent width for sidebar

const Navbar: React.FC<NavbarProps> = ({ isGalleryPage = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefix = isGalleryPage ? "/" : "";

  const menuItems = [
    { label: "ABOUT", href: `${prefix}#about`, external: false },
    { label: "TRAIT VOTING", href: `${prefix}#trait-voting`, external: false },
    { label: "STUDIO", href: "https://canvas-studio.xyz/", external: true },
    { label: "GALLERY", href: "/gallery", external: false },
    { label: "DOCS", href: "#", external: true },
    { label: "ELIGIBILITY", href: "http://canvas-checker.xyz/", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // create portal root if not already present
  useEffect(() => {
    if (typeof document === "undefined") return;
    let root = document.getElementById("navbar-portal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "navbar-portal-root";
      document.body.appendChild(root);
    }
  }, []);

  // Portal sidebar component
  const PortalSidebar = () => {
    const root =
      typeof document !== "undefined"
        ? document.getElementById("navbar-portal-root")
        : null;
    if (!root) return null;

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 2000,
                background: "rgba(0,0,0,0.62)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                willChange: "backdrop-filter, opacity",
                transform: "translateZ(0)",
              }}
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100vh",
                width: NAV_WIDTH,
                zIndex: 2100,
                background: "rgba(0,0,0,0.96)",
                WebkitOverflowScrolling: "touch",
                backfaceVisibility: "hidden",
                boxShadow: " -20px 0 60px rgba(0,0,0,0.6)",
              }}
            >
              <div className="relative h-full flex flex-col p-6 gap-4">
                {/* Close button (visible and accessible) */}
                <button
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/6 hover:bg-white/10 flex items-center justify-center"
                  style={{ color: "#fff" }}
                >
                  {/* simple X svg */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block"
                    aria-hidden
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Logo (optional small) */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/canvas-logo.png" alt="logo" width={40} height={40} />
                  </div>
                  <div className="text-white font-semibold">The Canvas</div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 mt-2">
                  {menuItems.map(({ label, href, external }) => (
                    <Link
                      key={label}
                      href={href}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-lg text-white hover:text-gray-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                {/* MINT button placed immediately after links (not pinned to bottom) */}
                <div className="mt-3">
                  <Link
                    href="https://youtu.be/dQw4w9WgXcQ?si=ZZVWDeXrQOfqjEth"
                    target="_blank"
                    id="mint-btn"
                    className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md text-white font-medium transition-all border border-white/20 hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    MINT
                  </Link>
                </div>

                {/* Optional small spacer / legal at bottom */}
                <div className="mt-auto text-sm text-white/60">
                  © 2025 The Canvas
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>,
      root
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-black/40" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-8 md:px-14 py-5">
        {/* Logo */}
        <div className="flex items-center z-50">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full">
            <Image
              src="/canvas-logo.png"
              alt="Canvas"
              width={43}
              height={43}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10">
          {menuItems.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Button (desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://youtu.be/dQw4w9WgXcQ?si=ZZVWDeXrQOfqjEth"
            target="blank"
            id="mint-btn"
            className="text-sm rounded-md text-white font-medium transition-all border border-white/20 hover:bg-white/10"
          >
            MINT
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden z-[60] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div initial={false} animate={isOpen ? "open" : "closed"} className="flex flex-col space-y-1">
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 }}} className="block w-6 h-[2px] bg-[#8C5FEE]" />
            <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 }}} className="block w-6 h-[2px] bg-[#8C5FEE]" />
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 }}} className="block w-6 h-[2px] bg-[#8C5FEE]" />
          </motion.div>
        </div>
      </div>

      {/* Render portal sidebar */}
      <PortalSidebar />
    </nav>
  );
};

export default Navbar;
