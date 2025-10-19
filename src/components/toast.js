"use client";
import React, { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
            mass: 0.6,
          }}
          role="alert"
          aria-live="assertive"
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] max-w-[22rem] rounded-xl bg-Overlays-Black-9/80 backdrop-blur-lg border border-white/10 shadow-boxPrimary px-4 py-3 text-[#CACED5]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <div className="flex-1">
              <p className="text-sm leading-5">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 text-[#9DA1A8] hover:text-[#CACED5] focus:outline-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Toast };
