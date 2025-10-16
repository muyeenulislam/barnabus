import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./buttons";

const Navbar = () => {
  const navItems = [
    { title: "Vision", route: "/vision" },
    { title: "Capabilities", route: "/capabilities" },
    { title: "Solutions", route: "/solutions" },
    { title: "System Protocol", route: "/system-protocol" },
    { title: "Enterprise", route: "/enterprise" },
    { title: "Trust", route: "/trust" },
    { title: "Roadmap", route: "/roadmap" },
  ];

  return (
    <div className="w-full flex justify-between items-center self-stretch p-6 border-b border-Border-Secondary bg-[#121314] fixed z-10">
      <div className="flex gap-4 items-center">
        <Image
          src="/icons/barnabus-logo.svg"
          height={48}
          width={48}
          className="h-9 w-9"
          alt="logo-icon"
        />
        <Image
          src="/icons/barnabus-text-logo.svg"
          height={48}
          width={200}
          className="h-6 w-full"
          alt="logo-text"
        />
      </div>
      <div className="flex p-1 items-center justify-center gap-1 rounded-full bg-Overlays-White-5 shadow-navbar">
        {navItems?.map((item, index) => (
          <Link
            key={index}
            className="px-4 py-2 rounded-full text-action-buttons-tertiary-content-default-hover text-sm font-semibold leading-5"
            href={item.route}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Button label="Participate" variant="Primary-Default" size="L" />
    </div>
  );
};

export default Navbar;
