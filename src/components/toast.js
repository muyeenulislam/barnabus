"use client";
import React, { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

const Toast = ({ show, message, onClose, type = "success" }) => {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [show, onClose]);

  const icon =
    type === "success" ? (
      <FaCheckCircle className="text-[1.5rem] text-green-500" />
    ) : type === "error" ? (
      <MdCancel className="text-[1.5rem] text-red-500" />
    ) : type === "info" ? (
      <MdInfo className="text-[1.5rem] text-blue-500" />
    ) : (
      <IoIosWarning className="text-[1.5rem] text-yellow-500" />
    );

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
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] max-w-[22rem] rounded-xl bg-backgroundGray border border-white/10 shadow-boxPrimary px-4 py-3 text-Content-Primary"
        >
          <div className="flex items-center justify-center gap-3">
            {icon}
            <div className="flex-1">
              <p className="text-sm leading-5">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 text-[#9DA1A8] hover:text-Content-Primary focus:outline-none"
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
