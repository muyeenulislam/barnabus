"use client";

import React, { Fragment, useRef } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";

/**
 * Modal
 *
 * Props:
 * - open (bool): visibility
 * - onClose (fn): e.g., setOpen(false)
 * - title (string, optional)
 * - subtitle (string, optional)
 * - showClose (bool, default true)
 * - size ("sm"|"md"|"lg"|"xl"|"2xl"), default "md"
 * - className (string): classes on root dialog wrapper
 * - overlayClassName (string)
 * - panelClassName (string)
 * - headerClassName (string)
 * - contentClassName (string)
 * - footerClassName (string)
 * - footer (ReactNode, optional): actions area
 * - initialFocusRef (ref, optional)
 * - closeOnOverlayClick (bool, default true)
 *
 * Notes:
 * - Does NOT lock body scroll. Parent scrollbar remains visible.
 * - Content area is scrollable with max-h to avoid viewport overflow.
 */
export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  showClose = true,
  size = "md",
  className = "",
  overlayClassName = "",
  panelClassName = "",
  headerClassName = "",
  contentClassName = "",
  footerClassName = "",
  footer = null,
  initialFocusRef = null,
  closeOnOverlayClick = true,
  children,
}) {
  const internalCloseBtnRef = useRef(null);
  const focusRef = initialFocusRef || internalCloseBtnRef;

  const handleClose = closeOnOverlayClick ? onClose : () => {};

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-[1000] ${className}`}
        onClose={handleClose}
        initialFocus={focusRef}
      >
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${overlayClassName}`}
          />
        </TransitionChild>

        {/* Centered container */}
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              className={`
                w-max min-w-[30rem] rounded-[3rem] bg-Surface1 shadow-boxPrimary backdrop-blur-lg ${panelClassName}
              `}
            >
              {(title || showClose) && (
                <div className="py-6 px-8 lg:py-[2rem] lg:px-[3rem] border-b border-Border-Secondary flex justify-between items-center">
                  {title ? (
                    <DialogTitle className="text-lg leading-6.5 font-semibold text-Content-Primary lg:text-2xl lg:leading-8">
                      {title}
                    </DialogTitle>
                  ) : null}
                  <button
                    ref={focusRef}
                    aria-label="Close"
                    onClick={() => onClose(false)}
                    className="py-2 lg:py-3 px-3 lg:px-4 rounded-full bg-Action-Buttons-Secondary-Background-Default backdrop-blur-lg shadow-bottomSheetClose outline-none cursor-pointer"
                  >
                    <Image
                      src="/icons/cancel.svg"
                      alt="close"
                      height={20}
                      width={20}
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              )}

              {/* Scrollable content area */}
              <div
                className={`max-h-[85vh] overflow-y-auto rounded-b-[3rem] p-8 lg:p-12 bg-Surface2 ${contentClassName}`}
              >
                {children}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
