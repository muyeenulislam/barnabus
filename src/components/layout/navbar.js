"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import BottomSheet from "../bottom-sheet";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: "Vision", route: "/vision" },
    { title: "Capabilities", route: "/capabilities" },
    { title: "Solutions", route: "/solutions" },
    { title: "System Protocol", route: "/system-protocol" },
    { title: "Enterprise", route: "/enterprise" },
    { title: "Trust", route: "/trust" },
    { title: "Roadmap", route: "/roadmap" },
  ];
  const first = navItems.slice(0, 3);
  const rest = navItems.slice(3);

  const baseLinkCls =
    "px-4 py-2 rounded-full text-action-buttons-tertiary-content-default-hover text-sm font-semibold leading-5";
  const activeLinkCls =
    "bg-Action-Buttons-Primary-Default-Background-Default shadow-navLinkActive backdrop-blur-lg !text-action-buttons-primary-default-content-default-hover-pressed";

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const restHasActive = rest.some((i) => isActive(i.route));

  return (
    <>
      <div className="w-full flex justify-between items-center self-stretch px-3 py-3 md:p-5 border-b border-Border-Secondary bg-[#121314] fixed z-10">
        {/* Left: Logo */}
        <Link className="flex gap-3 items-center" href="/">
          <Image
            src="/icons/barnabus-logo.svg"
            height={48}
            width={48}
            className="h-8 w-8"
            alt="logo-icon"
          />
          <Image
            src="/icons/barnabus-text-logo.svg"
            height={48}
            width={200}
            className="h-5 w-full"
            alt="logo-text"
          />
        </Link>

        {/* Center A: Desktop (lg and up) – full nav */}
        <div className="hidden lg:flex p-1 items-center justify-center gap-1 rounded-full bg-Overlays-White-5 shadow-navbar">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className={`${baseLinkCls} ${
                isActive(item.route) ? activeLinkCls : ""
              }`}
              href={item.route}
              aria-current={isActive(item.route) ? "page" : undefined}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Center B: Tablet (md only) – first 3 + dropdown */}
        <div className="hidden md:flex lg:hidden p-1 items-center justify-center gap-1 rounded-full bg-Overlays-White-5 shadow-navbar relative">
          {first.map((item, index) => (
            <Link
              key={index}
              className={`${baseLinkCls} ${
                isActive(item.route) ? activeLinkCls : ""
              }`}
              href={item.route}
              aria-current={isActive(item.route) ? "page" : undefined}
            >
              {item.title}
            </Link>
          ))}

          {rest.length > 0 && (
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <MenuButton
                    className={`p-2 rounded-full ${
                      open || restHasActive
                        ? "bg-Action-Buttons-Tertiary-Background-Hover"
                        : ""
                    }`}
                    aria-label="More navigation items"
                  >
                    <Image
                      src="/icons/circle-arrow-down.svg"
                      alt="open dropdown"
                      height={24}
                      width={24}
                      className={`h-5 w-5 transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </MenuButton>

                  <Transition
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 top-12 z-20 min-w-[200px] rounded-2xl bg-[#121314] border border-Border-Secondary shadow-xl p-1">
                      {rest.map((item, idx) => {
                        const active = isActive(item.route);
                        return (
                          <MenuItem key={idx}>
                            {({ active: hover }) => (
                              <Link
                                href={item.route}
                                aria-current={active ? "page" : undefined}
                                className={`block w-full text-left ${baseLinkCls} rounded-xl ${
                                  active
                                    ? activeLinkCls
                                    : hover
                                    ? "bg-Overlays-White-5"
                                    : ""
                                }`}
                              >
                                {item.title}
                              </Link>
                            )}
                          </MenuItem>
                        );
                      })}
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
          )}
        </div>

        {/* Right: CTA + Mobile trigger */}
        <div className="flex items-center gap-2">
          <Button label="Participate" variant="Primary-Default" size="L" />

          {/* Mobile-only arrow to open bottom sheet */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-Action-Buttons-Tertiary-Background-Hover"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            <Image
              src="/icons/circle-arrow-down.svg"
              alt="open drawer"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* BottomSheet (mobile) */}
      <BottomSheet
        open={drawerOpen}
        onClose={setDrawerOpen}
        title="Menu"
        className="md:hidden"
        contentClassName="px-[1.5rem] py-[1.25rem] bg-[#2B2C2D] flex flex-col gap-4"
      >
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.route}
            onClick={() => setDrawerOpen(false)}
            aria-current={isActive(item.route) ? "page" : undefined}
            className={`block w-full text-center px-4 py-5 rounded-full text-action-buttons-tertiary-content-default-hover font-semibold text-sm hover:bg-Action-Buttons-Tertiary-Background-Hover ${
              isActive(item.route)
                ? "bg-Action-Buttons-Tertiary-Background-Hover"
                : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </BottomSheet>
    </>
  );
};

export default Navbar;
