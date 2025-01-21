import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Assets.css";
import baffle from "baffle";
import ParticlesBackground from "./ParticlesBackground";
import 'animate.css';

function Assets() {
  useEffect(() => {
    const text = baffle(".text__glitch");
    text.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
      speed: 120,
    });
    text.start();
    text.reveal(4000);
  }, []);

  return (
    <div className="firstpage relative h-screen ">
      {" "}
      {/* Added h-screen for full height */}
      {/* Particles container */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center p-8 rounded-lg mt-10 ">
          <h1 className="text-6xl text-[#0B2447] max-w-6xl font-bold  text__glitch text-center uppercase tracking-wider text-green-400">
            Break to Secure your assets <br /> Before Hackers break In!
          </h1>
          <div className="flex items-center text-[#F0ECE2] justify-center font-serif mb-6">
            <p className="max-w-4xl text-2xl animate__animated animate__fadeInLeft">
              At break2secure, we collaborate with entrepreneurs, startups, and
              individuals to detect vulnerabilities in their assets. Our
              affordable solutions are designed to help you secure your assets
              quickly and effectively, giving you the power to protect what
              matters most.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Assets;
