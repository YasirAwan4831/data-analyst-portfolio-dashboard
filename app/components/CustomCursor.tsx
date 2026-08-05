"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [role="link"], .card-hover';

function isInteractiveElement(target: EventTarget | null): boolean {
  return target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const pointerPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hoverState = useRef(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateRing = () => {
      ringPos.current.x += (pointerPos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pointerPos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        const scale = hoverState.current ? 1.1 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;
      }

      requestRef.current = requestAnimationFrame(updateRing);
    };

    const onMouseMove = (event: MouseEvent) => {
      pointerPos.current.x = event.clientX;
      pointerPos.current.y = event.clientY;

      if (dotRef.current) {
        const scale = hoverState.current ? 1.2 : 1;
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) scale(${scale})`;
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      if (isInteractiveElement(event.target)) {
        hoverState.current = true;
        setIsHovering(true);
      }
    };

    const onPointerOut = (event: PointerEvent) => {
      const related = event.relatedTarget instanceof Element ? event.relatedTarget : null;
      if (!isInteractiveElement(related)) {
        hoverState.current = false;
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);

    requestRef.current = requestAnimationFrame(updateRing);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`custom-cursor-ring${isHovering ? " cursor-hover-active" : ""}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`custom-cursor-dot${isHovering ? " cursor-hover-active" : ""}`}
      />
    </>
  );
}
