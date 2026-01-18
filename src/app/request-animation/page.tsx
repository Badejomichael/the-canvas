"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";

import AnimationTypeDropdown from "./components/AnimationTypeDropdown";

/* TYPES  */
type SendStatus = "idle" | "sending" | "success";

/* STATUS MODAL */
const StatusModal = ({
  status,
  onClose,
}: {
  status: SendStatus;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {status !== "idle" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 bg-[#0d0d12] border border-white/10 
            rounded-2xl p-10 w-[90%] max-w-sm text-center"
          >
            {status === "sending" && (
              <>
                <div className="w-12 h-12 mx-auto mb-6 rounded-full 
                  border-4 border-[#8C5FEE]/30 border-t-[#8C5FEE] animate-spin" />
                <h3 className="text-white text-xl font-semibold">
                  Sending request…
                </h3>
              </>
            )}

            {status === "success" && (
              <>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Request Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  You’ll be contacted via email shortly.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default function RequestAnimationPage() {
  const [status, setStatus] = useState<SendStatus>("idle");
  const [animationType, setAnimationType] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      setStatus("sending");

      const formData = new FormData(form);
      const data = new URLSearchParams(formData as any);

      await fetch("https://formsubmit.co/justmikelll73@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#0c0c0c] text-white flex items-center justify-center px-6 py-24">
      <Navbar isGalleryPage={false} />
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Turn Your Vision Into Motion
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Tell us about your idea and we’ll bring it to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0d0d12] border border-white/10 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="hidden" name="_captcha" value="false" />

            <input
              name="name"
              required
              placeholder="Your name"
              className="input"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="input"
            />

            {/* Animation Type */}
            <AnimationTypeDropdown
            value={animationType}
            onChange={setAnimationType}
            />

            <input
            type="hidden"
            name="animation_type"
            value={animationType}
            />


            <textarea
              name="message"
              rows={4}
              required
              placeholder="Describe your idea"
              className="input resize-none"
            />

            <input
              name="timeline"
              placeholder="Deadline / timeline"
              className="input"
            />

            <select name="budget" required className="input">
              <option value="">Estimated budget</option>
              <option>$250 – $500</option>
              <option>$500 – $1,000</option>
              <option>$1,000+</option>
            </select>

            <button
              type="submit"
              className="bg-[#8C5FEE] py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>

      <StatusModal status={status} onClose={() => setStatus("idle")} />
    </section>
  );
}
