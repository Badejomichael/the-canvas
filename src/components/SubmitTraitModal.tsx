"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

export default function SubmitTraitModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    traitName: "",
    category: "",
    description: "",
    imageUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbySKi6F0dUOXNMtpRgDYDrIZ-0ofNHaeiXvSphkX1U37_VyQvtdjRaX3N8kAA4Ja4U2/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast.success("Thanks for sharing your idea with us!");
        setFormData({
          traitName: "",
          category: "",
          description: "",
          imageUrl: "",
        });
        onClose();
      } else throw new Error("Failed to send");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal container */}
          <motion.div
            className="relative bg-white/90 backdrop-blur-md border border-[#8C5FEE]/30 rounded-[25px] shadow-xl w-[90%] max-w-lg p-6 text-gray-800 overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#8C5FEE] transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center text-[#1a1a1a]">
              Submit a Trait Idea
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Share your imagination — help shape the next Canvas collection.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Trait Name
                </label>
                <input
                  type="text"
                  name="traitName"
                  required
                  value={formData.traitName}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-gray-300 px-4 py-2 outline-none focus:border-[#8C5FEE] focus:ring-1 focus:ring-[#8C5FEE]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">
                  Category
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-gray-300 px-4 py-2 outline-none focus:border-[#8C5FEE] focus:ring-1 focus:ring-[#8C5FEE]"
                >
                  <option value="">Select category</option>
                  <option>Background</option>
                  <option>Base</option>
                  <option>Hair</option>
                  <option>Accessory</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">
                  Short Description
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-gray-300 px-4 py-2 outline-none focus:border-[#8C5FEE] focus:ring-1 focus:ring-[#8C5FEE]"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">
                  Optional Image URL
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-xl bg-white border border-gray-300 px-4 py-2 outline-none focus:border-[#8C5FEE] focus:ring-1 focus:ring-[#8C5FEE]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 rounded-xl bg-[#8C5FEE] text-white font-semibold hover:opacity-90 transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Idea"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
