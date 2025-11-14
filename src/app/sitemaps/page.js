import React from "react";
import Link from "next/link";

import { ROUTES } from "@/utils/arrays";

const Sitemaps = () => {
  return (
    <section className="flex flex-col py-10 space-y-5">
      <h1 className="content-heading">Sitemap</h1>
      <div className="flex flex-col gap-4 px-10">
        {ROUTES?.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="w-max content-subheading hover:!text-Content-Brand-Accent"
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sitemaps;
