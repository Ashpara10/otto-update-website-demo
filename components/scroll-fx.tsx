"use client";

import { useEffect } from "react";

/**
 * Ports the two vanilla-JS effects from the original landing page:
 *  - toggles `.scrolled` on the fixed nav past 40px
 *  - reveals `.reveal` / `.break-list` elements on scroll via IntersectionObserver
 */
export function ScrollFX() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    const els = document.querySelectorAll<HTMLElement>(".reveal, .break-list");
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 0.07}s`;
      io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
