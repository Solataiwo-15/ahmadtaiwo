"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Download } from "lucide-react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Zustand",
  "Supabase",
  "Figma",
  "REST APIs",
  "Vercel",
  "Git",
  "Shadcn UI",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Zustand",
  "Supabase",
  "Figma",
  "REST APIs",
  "Vercel",
  "Git",
  "Shadcn UI",
];

export default function Hero() {
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "32px 24px 48px",
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Status badge */}
          <motion.div variants={item} style={{ marginBottom: 20 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 500,
                background: "var(--glow-mint)",
                border: "1px solid var(--accent-2)",
                color: "var(--accent-2)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--accent-2)",
                  display: "inline-block",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Giant name */}
          <motion.div variants={item} style={{ marginBottom: 12 }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 13vw, 11rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                margin: 0,
                textAlign: "center",
              }}
            >
              Ahmad
              <br />
              <span style={{ color: "var(--accent-1)" }}>Taiwo</span>
            </h1>
          </motion.div>

          {/* Thin mono line */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 56,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: 40,
                height: 1,
                background: "var(--border-strong)",
                flexShrink: 1,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(9px, 2vw, 12px)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                whiteSpace: "nowrap",
              }}
            >
              Frontend Engineer
            </span>
            <div
              style={{
                flex: 1,
                maxWidth: 40,
                height: 1,
                background: "var(--border-strong)",
                flexShrink: 1,
              }}
            />
          </motion.div>

          {/* CV Button */}
          <motion.div variants={item} style={{ marginBottom: 32 }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 100,
                background: "var(--accent-1)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "all 0.2s ease",
                boxShadow: "0 8px 32px var(--glow-violet)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px var(--glow-violet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px var(--glow-violet)";
              }}
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Stats pills */}
          {/* <motion.div
            variants={item}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {[
              { emoji: "⚡", text: "2+ years experience" },
              { emoji: "🚀", text: "5+ projects shipped" },
              { emoji: "🤝", text: "3 roles & contracts" },
            ].map(({ emoji, text }) => (
              <span
                key={text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 100,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <span>{emoji}</span>
                {text}
              </span>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          padding: "14px 0",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}
        >
          {techStack.map((tech, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "0 24px",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--text-tertiary)",
                whiteSpace: "nowrap",
              }}
            >
              {tech}
              <span style={{ color: "var(--accent-1)", fontSize: 10 }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
