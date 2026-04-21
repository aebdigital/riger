"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main > section > div > *",
  "main article",
  "main aside",
  "main form",
  "main table",
  "main ol > li",
  "main a.group",
  "main .reveal-item"
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector("main");

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = new WeakSet<Element>();
    let revealIndex = 0;

    if (reduceMotion.matches) {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        element.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    const prepare = (element: HTMLElement) => {
      if (elements.has(element) || element.closest("[data-no-reveal]")) {
        return;
      }

      elements.add(element);
      element.classList.add("reveal-init");
      element.style.setProperty("--reveal-delay", `${Math.min(revealIndex % 7, 6) * 55}ms`);
      revealIndex += 1;
      observer.observe(element);
    };

    const scan = () => {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach(prepare);
    };

    scan();

    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(root, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
