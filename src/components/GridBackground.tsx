"use client";
import { useEffect, useRef } from "react";

export default function GridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX}px`);
      el.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Blob 1 — violet, starts top-right, travels to bottom-left */}
      <div
        style={{
          position: "absolute",
          width: "28vw",
          height: "28vw",
          borderRadius: "50%",
          background: "var(--aurora-1)",
          filter: "blur(70px)",
          opacity: 0.5,
          animation: "travel1 20s ease-in-out infinite",
        }}
      />

      {/* Blob 2 — mint, starts bottom-left, travels to top-right */}
      <div
        style={{
          position: "absolute",
          width: "22vw",
          height: "22vw",
          borderRadius: "50%",
          background: "var(--aurora-2)",
          filter: "blur(70px)",
          opacity: 0.45,
          animation: "travel2 24s ease-in-out infinite",
        }}
      />

      {/* Blob 3 — rose, starts center, drifts around */}
      <div
        style={{
          position: "absolute",
          width: "18vw",
          height: "18vw",
          borderRadius: "50%",
          background: "var(--aurora-3)",
          filter: "blur(60px)",
          opacity: 0.35,
          animation: "travel3 18s ease-in-out infinite",
        }}
      />

      {/* Blob 4 — violet soft, starts bottom-right */}
      <div
        style={{
          position: "absolute",
          width: "20vw",
          height: "20vw",
          borderRadius: "50%",
          background: "var(--aurora-1)",
          filter: "blur(80px)",
          opacity: 0.25,
          animation: "travel4 28s ease-in-out infinite",
        }}
      />

      {/* Cursor grid */}
      <div
        ref={gridRef}
        style={
          {
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(var(--grid-line-bright) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line-bright) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(circle 250px at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
