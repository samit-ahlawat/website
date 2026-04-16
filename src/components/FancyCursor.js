import React, { useEffect, useRef, useState } from "react";

export default function FancyCursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const [ripples, setRipples] = useState([]);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const TRAIL_COUNT = 8;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    let animationFrameId;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      const x = pos.current.x;
      const y = pos.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }

      trailRefs.current.forEach((el, index) => {
        if (!el) return;      
        const scale = (TRAIL_COUNT - index) / TRAIL_COUNT;
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = scale;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);  
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #00f5ff, #0080ff)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />

      {/* Trail */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "rgba(0, 150, 255, 0.2)",
            pointerEvents: "none",
            zIndex: 9998,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "fixed",
            top: ripple.y,
            left: ripple.x,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "2px solid #00f5ff",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            animation: "ripple 0.6s ease-out forwards",
            zIndex: 9997,
          }}
        />
      ))}
    </>
  );
}

