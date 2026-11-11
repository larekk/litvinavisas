"use client";

import { useEffect, useRef } from "react";

/**
 * A photograph which moves *upward* a little as the user scrolls downward.
 * No layout-affecting state updates, no animation library. The image is oversized
 * and clipped by the section. Reduced-motion preference is respected.
 */
export default function ParallaxPhoto({ imageUrl, label }: { imageUrl: string; label: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (box.bottom <= 0 || box.top >= viewport) return;
      // progress: 0 when entering from below, 1 when leaving above.
      const progress = Math.min(1, Math.max(0, (viewport - box.top) / (viewport + box.height)));
      const offset = (0.5 - progress) * 100;
      image.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      image.style.transform = "";
    };
  }, []);

  return (
    <section className="parallax-photo" ref={sectionRef} aria-label={label}>
      <div
        ref={imageRef}
        className="parallax-photo__image"
        role="img"
        aria-label={label}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
    </section>
  );
}
