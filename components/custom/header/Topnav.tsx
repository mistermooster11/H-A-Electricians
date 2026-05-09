"use client";

import Link from "next/link";

export default function Topnav() {
  return (
    <div className="ia-topnav">
      <div className="inner">
        <div className="ia-topnav__inner">
          <a
            href="tel:6463510882"
            className="ia-topnav__phone"
            aria-label="Call H&A NYC Electrician"
          >
            (646) 351-0882 — Licensed NYC Electricians, Mon–Sun 24 Hours
          </a>
        </div>
      </div>
    </div>
  );
}
