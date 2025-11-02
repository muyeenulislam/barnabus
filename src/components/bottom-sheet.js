"use client";

import React, { Fragment, useRef } from "react";
import Image from "next/image";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

/**
 * Reusable BottomSheet
 *
 * Props:
 * - open (bool): controls visibility
 * - onClose (fn): called to close
 * - title (string, optional)
 * - showHandle (bool, default true): small drag handle bar
 * - panelClassName (string, optional): extra classes on panel
 * - contentClassName (string, optional): extra classes on inner content
 * - className (string, optional): extra classes on Dialog root
 * - children: sheet content
 */
export default function BottomSheet({
  open,
  onClose,
  title,
  showHandle = true,
  panelClassName = "",
  contentClassName = "",
  className = "",
  children,
}) {
  const closeBtnRef = useRef(null);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-1010 ${className}`}
        onClose={onClose}
        initialFocus={closeBtnRef}
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
          <div className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        {/* Panel */}
        <div className="fixed inset-x-0 bottom-0 ">
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-out duration-200"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in duration-150"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <DialogPanel
              className={`rounded-t-3xl bg-Surface1 shadow-bottomSheet backdrop-blur-lg ${panelClassName}`}
            >
              <div className="relative py-4 px-6 border-b border-Border-Secondary">
                {showHandle && (
                  <div className="mx-auto h-1.5 w-10 rounded-full bg-black" />
                )}
                <button
                  ref={closeBtnRef}
                  aria-label="Close"
                  onClick={() => onClose(false)}
                  className="absolute right-6 top-3 py-3 px-4 rounded-full bg-Action-Buttons-Secondary-Background-Default backdrop-blur-lg shadow-bottomSheetClose"
                >
                  <Image
                    src="/icons/cancel.svg"
                    alt="close"
                    height={20}
                    width={20}
                    className="h-5 w-5"
                  />
                </button>
                {title ? (
                  <DialogTitle className="text-lg font-semibold text-Content-Primary">
                    {title}
                  </DialogTitle>
                ) : null}
              </div>

              <div
                className={`p-2 pb-[calc(env(safe-area-inset-bottom)+2rem)] ${contentClassName}`}
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
