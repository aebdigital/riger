"use client";

import { useEffect, useRef } from "react";

type ParallaxHeroBackgroundProps = {
  image: string;
};

export function ParallaxHeroBackground({ image }: ParallaxHeroBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!element || reduceMotion.matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const parent = element.parentElement;

      if (!parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const offset = Math.max(Math.min(rect.top * -0.16, 90), -90);
      element.style.transform = `translate3d(0, ${offset}px, 0) scale(1.14)`;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="home-hero-bg absolute inset-x-0 -bottom-20 -top-20 bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
      aria-hidden="true"
    />
  );
}
