"use client";

import { useEffect, useRef } from "react";

type ParallaxHeroBackgroundProps = {
  image: string;
};

export function ParallaxHeroBackground({ image }: ParallaxHeroBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ticking = false;
    let lastScrollY = window.scrollY;

    const updatePosition = () => {
      const scrollY = window.scrollY;
      // We want the background to move at a fraction of the scroll speed
      // Adjust the 0.3 value to change the parallax intensity
      const yOffset = scrollY * 0.3;
      
      if (element) {
        element.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.15)`;
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updatePosition(); // Initial position

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={ref}
        className="absolute inset-x-0 -bottom-36 -top-36 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${image}')`,
          willChange: "transform"
        }}
      />
    </div>
  );
}
