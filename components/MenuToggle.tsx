"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuToggle() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Contact",
    "Case Studies",
  ];

  const services = [
    "Branding",
    "Experience Design",
    "Technology",
    "Digital Marketing",
  ];

  return (
    <>
      {/* Button Background Expansion */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 w-screen h-screen bg-black z-[40]"
            initial={{ scale: 0, opacity: 0, transformOrigin: "top right" }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={false}
        animate={{ backgroundColor: open ? "#111" : "rgba(0,0,0,0.6)" }}
        className="menu-button fixed top-6 right-6 z-[60] flex items-center gap-2 rounded-xl backdrop-blur-sm text-white text-sm md:text-base px-4 py-2"
      >
        <span className="font-light">Menu</span>
        <div className="relative w-4 h-3">
          <span
            className={`absolute w-full h-[1px] bg-white transition-transform duration-300 ${
              open ? "rotate-45 top-1.5" : "top-0"
            }`}
          ></span>
          <span
            className={`absolute w-full h-[1px] bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "top-1.5"
            }`}
          ></span>
          <span
            className={`absolute w-full h-[1px] bg-white transition-transform duration-300 ${
              open ? "-rotate-45 top-1.5" : "top-3"
            }`}
          ></span>
        </div>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 text-white flex flex-col justify-center px-6 md:px-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-3xl md:text-4xl relative z-10">
              {/* Left Column - Main Menu */}
              <ul className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="cursor-pointer hover:text-gray-400"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Right Column - Services */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div
               
                    className="cursor-pointer hover:text-gray-400 mb-4"
                  >
                    Services
                  </div>
                </motion.div>
                <AnimatePresence>
  
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-4 pl-4 border-l border-gray-500"
                    >
                      {services.map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-xl text-gray-400 hover:text-white cursor-pointer"
                        >
                          {service}
                        </motion.li>
                      ))}
                    </motion.ul>
            
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
