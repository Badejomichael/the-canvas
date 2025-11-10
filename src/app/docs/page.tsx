"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Download, ArrowUp } from "lucide-react";
import Link from "next/link";

const DocsPage = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar isDocsPage={true} />

      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20 space-y-16">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-center"
        >
          The Canvas: Project Documentation
        </motion.h1>

        {/* Documentation Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-8"
        >
          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">1. Overview</h2>
            <p>
              <strong>What is The Canvas?</strong>
              <br /><br />
              The Canvas is a Web3-native creative ecosystem and NFT collection designed to empower digital artists, designers, writers, coders, and innovators.
              <br /><br />
              At its heart, The Canvas NFTs are more than collectibles they are access passes, creative identities, and membership tokens into a living ecosystem that redefines creative work in the digital age.
              <br /><br />
              The Canvas represents both the art and the infrastructure a world where ownership, identity, and opportunity merge to form the foundation of a decentralized creative renaissance.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">2. Mission & Vision</h2>
            <p>
              <strong>Mission</strong>
              <br /><br />
              To build an ecosystem where creativity becomes currency, empowering creators to own their work, control their data, and thrive within a community-driven digital economy.
              <br /><br />
              <strong>Vision</strong>
              <br /><br />
              A decentralized creative metaverse where every artist, designer, and builder holds a brush in shaping the future.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">3. The Dual Nature of The Canvas</h2>
            <p>
              The Canvas operates on two interconnected layers:
              <br /><br />
              <strong>NFT Layer (The Collection)</strong><br />
              A curated collection of 1111 digital artworks symbolizing creative expression, ownership, and access.
              Each NFT represents a unique “Frame” that unlocks privileges within The Canvas ecosystem.
              <br /><br />
              <strong>Ecosystem Layer (The Infrastructure)</strong><br />
              A growing suite of creator-focused tools and experiences powered by NFT ownership — including guilds, payments, and collaborative platforms all tied together through identity, access, and governance.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">4. The Canvas NFTs Overview</h2>
            <p>
              <strong>Total Supply:</strong> 1111<br />
              <strong>Blockchain:</strong> Monad<br />
              <strong>Standard:</strong> ERC-721<br />
              <strong>Theme:</strong> Community-inspired, art-centric
              <br /><br />
              <strong>Utility</strong><br />
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Canvas ID Genesis Pass — Acts as your on-chain creative identity and access key.</li>
                <li>Exclusive Creator Perks — Fee discounts, featured listings, and early drops.</li>
                <li>Guild Membership — Access to private creative guilds (Art, Code, Word, Sound).</li>
                <li>Governance Role — Voting rights in ecosystem proposals and creative direction.</li>
                <li>Future Airdrops & Rewards — Automatic whitelisting and access to future Canvas expansions and collaborations.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">5. Ecosystem Architecture</h2>
            <p>
              The Canvas is structured around two pillars:
              <br /><br />
              1. The NFT Layer — Your identity, access key, and governance token.<br />
              2. The Community Layer — A network of Canvas Guilds, Creator Circles, and DAOs built for collaboration, mentorship, and growth.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">6. Aesthetics & Design Identity</h2>
            <p>
              A free-spirited modern creative collection that lives for the community, it's expressive, chaotic in the best way, and beautifully unfiltered.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">7. Revenue & Token Model</h2>
            <p>
              The Canvas ecosystem sustains itself through a creator-centered economic model:
              <br /><br />
              • Visibility Upgrades<br />
              • NFT Royalties<br />
              • Partnership Ads<br />
              • Creator Challenges<br />
              • Future Canvas Token (Optional)
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">8. Community & Governance</h2>
            <p>
              The Canvas will gradually evolve into a DAO-governed creative ecosystem, where verified creators and NFT holders co-shape the platform’s evolution.
              <br /><br />
              <strong>Governance Flow</strong>
              <br /><br />
              1. NFT holders gain on-chain voting rights.<br />
              2. Guilds and creators propose community initiatives or feature upgrades.<br />
              3. Proposals are voted on by the community.<br />
              4. Approved initiatives are executed by the Core Team or Canvas DAO.
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">9. Roadmap</h2>
            <p>
              <strong>Phase 1 — Foundation</strong><br />
              Launch of The Canvas NFT Collection<br />
              Establishment of the Creator Guilds
              <br /><br />
              <strong>Phase 2 — Proof of Trust</strong><br />
              Rollout of the verification framework<br />
              Early community rewards
              <br /><br />
              <strong>Phase 3 — The Guild Era</strong><br />
              Full DAO setup<br />
              Creative challenges and brand partnerships
              <br /><br />
              <strong>Phase 4 — Canvas Pay</strong><br />
              On-chain escrow, tipping, and reward tools
              <br /><br />
              <strong>Phase 5 — Expansion</strong><br />
              Token ecosystem<br />
              Cross-chain creator identity<br />
              Global onboarding campaigns
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">10. The Ethos of The Canvas</h2>
            <p>
              “The Canvas isn’t just where art is made it’s where creators make their mark. Every NFT, every collaboration, every idea is a brushstroke on a living digital masterpiece.
              <br /><br />
              The Canvas represents not a platform, but a philosophy: creativity as ownership, identity as art, and collaboration as culture.”
              <br /><br />
              — Khing Tevin, 2025
            </p>
          </div>

          <div>
            <h2 className="text-[#8C5FEE] text-2xl font-semibold mb-2">12. Future Expansion Ideas</h2>
            <p>
              • Canvas Passport: Soulbound NFT tracking creative achievements and portfolio metrics.<br />
              • Canvas Collabs: Joint art-tech projects between artists and developers, minted as limited edition drops.<br />
              • Canvas Studios: Experimental art-tech lab for immersive and animated storytelling.<br />
              • Canvas DAO Fund: Micro-fund for early creators and innovators within the ecosystem.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/thecanvas-docs.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-[#8C5FEE] hover:bg-[#784EE1] transition-all px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Download size={18} />
          Download Docs
        </Link>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="text-center py-10 text-white/50 text-sm border-t border-white/10">
        © 2025 The Canvas. All rights reserved.
      </footer>
    </main>
  );
};

export default DocsPage;
