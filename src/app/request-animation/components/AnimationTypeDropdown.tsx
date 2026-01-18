"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const options = [
  "Character Animation",
  "NFT / Avatar Animation",
  "Short Animated Loop",
  "Promotional Animation",
  "Social Media Animation",
  "Other",
];

export default function AnimationTypeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          bg-[#111115] text-white
          border border-white/10
          rounded-xl px-4 py-3
          hover:border-[#8C5FEE]/60
          transition
        "
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || "Type of animation"}
        </span>
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="
              absolute z-20 mt-2 w-full
              bg-[#0d0d12]
              border border-white/10
              rounded-xl overflow-hidden
              shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            "
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="
                  px-4 py-3 cursor-pointer
                  text-sm text-gray-300
                  hover:bg-[#8C5FEE]/15
                  hover:text-white
                  transition
                "
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
