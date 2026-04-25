"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Download, Code2, Mail } from "lucide-react";
import { data } from "@/lib/data";

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
          padding: "24px 24px 60px",
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
          <motion.div variants={item} style={{ marginBottom: 40 }}>
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
              Open to opportunities
            </span>
          </motion.div>

          {/* Giant name */}
          <motion.div variants={item} style={{ marginBottom: 24 }}>
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
              marginBottom: 32,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: 50,
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
              Frontend Engineer · Lagos, Nigeria
            </span>
            <div
              style={{
                flex: 1,
                maxWidth: 50,
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

          {/* Inline socials — mobile/tablet only */}
          {!isDesktop && (
            <motion.div
              variants={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {[
                {
                  href: data.github,
                  label: "GitHub",
                  icon: null,
                  isLinkedIn: false,
                  isGithub: true,
                },
                {
                  href: data.linkedin,
                  label: "LinkedIn",
                  icon: null,
                  isLinkedIn: true,
                  isGithub: false,
                },
                {
                  href: `mailto:${data.email}`,
                  label: "Email",
                  icon: Mail,
                  isLinkedIn: false,
                  isGithub: false,
                },
              ].map(({ href, label, icon: Icon, isLinkedIn, isGithub }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-secondary)",
                    background: "var(--bg-card)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-1)";
                    e.currentTarget.style.color = "var(--accent-1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {isLinkedIn ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ) : isGithub ? (
                    <Code2 size={16} />
                  ) : Icon ? (
                    <Icon size={16} />
                  ) : null}
                </a>
              ))}
            </motion.div>
          )}

          {/* Stats pills */}
          {/* Stats */}
          <motion.div
            variants={item}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 32 }}>
              {[
                {
                  value: "2+",
                  label: "Years Experience",
                  color: "var(--accent-1)",
                },
                {
                  value: "5+",
                  label: "Projects Shipped",
                  color: "var(--accent-2)",
                },
                // {
                //   value: "3",
                //   label: "Roles & contracts",
                //   color: "var(--accent-3)",
                // },
              ].map(({ value, label, color }, i) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 3,
                        borderRadius: 2,
                        background: color,
                        marginBottom: 10,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginTop: 4,
                        fontFamily: "var(--font-mono)",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                  {i < 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 48,
                        background: "var(--border)",
                        marginLeft: 32,
                        alignSelf: "center",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
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
