"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Code2, Mail } from "lucide-react";
import { data } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
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

const codeLines = [
  {
    tokens: [
      { t: "const ", c: "keyword" },
      { t: "Ahmad", c: "var" },
      { t: " = {", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: "  role", c: "prop" },
      { t: ": ", c: "plain" },
      { t: '"Frontend Engineer"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: "  location", c: "prop" },
      { t: ": ", c: "plain" },
      { t: '"Lagos, Nigeria"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: "  stack", c: "prop" },
      { t: ": [", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: '    "React"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: '    "Next.js"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  { tokens: [{ t: '    "TypeScript"', c: "string" }] },
  { tokens: [{ t: "  ],", c: "plain" }] },
  {
    tokens: [
      { t: "  yearsExp", c: "prop" },
      { t: ": ", c: "plain" },
      { t: "2", c: "number" },
      { t: ",", c: "plain" },
    ],
  },
  {
    tokens: [
      { t: "  openToWork", c: "prop" },
      { t: ": ", c: "plain" },
      { t: "true", c: "bool" },
      { t: ",", c: "plain" },
    ],
  },
  { tokens: [{ t: "}", c: "plain" }] },
];

const tokenColor: Record<string, string> = {
  keyword: "#7c3aed",
  var: "var(--text-primary)",
  prop: "#059669",
  string: "#d97706",
  number: "#e11d48",
  bool: "#e11d48",
  plain: "var(--text-tertiary)",
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "50px 24px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="hero-left"
          >
            {/* Status badge */}
            <motion.div variants={item} style={{ marginBottom: 28 }}>
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
            {/* Name */}
            <motion.div variants={item} style={{ marginBottom: 16 }}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Ahmad
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Taiwo
                </span>
              </h1>
            </motion.div>
            {/* Role divider */}
            <motion.div
              variants={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 28,
              }}
              className="hero-role-divider"
            >
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--border-strong)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                Frontend Engineer
              </span>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--border-strong)",
                }}
              />
            </motion.div>
            {/* Tagline */}
            {/* <motion.p
              variants={item}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              I turn{" "}
              <em style={{ color: "var(--accent-1)", fontStyle: "italic" }}>
                ideas
              </em>{" "}
              into{" "}
              <em style={{ color: "var(--accent-2)", fontStyle: "italic" }}>
                real products
              </em>{" "}
              people love to use. 2+ years building with React & Next.js.
            </motion.p> */}
            {/* CTAs */}
            <motion.div
              variants={item}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                marginBottom: 48,
              }}
              className="hero-ctas"
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 100,
                  background: "var(--accent-1)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View my work
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 100,
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid var(--border-strong)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-2)";
                  e.currentTarget.style.color = "var(--accent-2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get in touch
              </a>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10, marginLeft: 4 }}>
                {[
                  { href: data.github, label: "GitHub", icon: Code2 },
                  { href: data.linkedin, label: "LinkedIn", icon: null },
                  { href: `mailto:${data.email}`, label: "Email", icon: Mail },
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 40,
                      height: 40,
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
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.1)";
                      e.currentTarget.style.borderColor = "var(--accent-1)";
                      e.currentTarget.style.color = "var(--accent-1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.borderColor =
                        "var(--border-strong)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {label === "LinkedIn" ? (
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
                    ) : Icon ? (
                      <Icon size={16} />
                    ) : null}
                  </a>
                ))}
              </div>
            </motion.div>
            {/* Stats */}
            {/* ── OPTION 1 — Pill badges in one line ──
            <motion.div
              variants={item}
              style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
            >
              {[
                { emoji: "⚡", text: "2+ years experience" },
                { emoji: "🚀", text: "5+ projects shipped" },
                { emoji: "🤝", text: "2 internships" },
              ].map(({ emoji, text }) => (
                <span
                  key={text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: 100,
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
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
            {/* ── OPTION 3 — Numbers with accent top border ── */}
            <motion.div
              variants={item}
              style={{ display: "flex", flexWrap: "nowrap", gap: 0 }}
            >
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
                {
                  value: "3",
                  label: "Roles & contracts",
                  color: "var(--accent-3)",
                },
              ].map(({ value, label, color }, i) => (
                <div
                  key={label}
                  style={{
                    paddingRight: 24,
                    marginRight: 24,
                    borderRight: i < 2 ? "1px solid var(--border)" : "none",
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
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — code card */}
          <motion.div
            variants={cardItem}
            initial="hidden"
            animate="show"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "100%",
                maxWidth: 420,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border-strong)",
                background: "var(--bg-card)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
              }}
            >
              {/* Window bar */}
              <div
                style={{
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "1px solid var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ff5f56",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ffbd2e",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#27c93f",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    marginLeft: 8,
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                  }}
                >
                  ahmad.tsx
                </span>
              </div>

              {/* Code content */}
              <div
                style={{
                  padding: "24px 20px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  lineHeight: 1.9,
                }}
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    style={{ display: "flex", alignItems: "center", gap: 0 }}
                  >
                    <span
                      style={{
                        marginRight: 16,
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        userSelect: "none",
                        minWidth: 16,
                        textAlign: "right",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>
                      {line.tokens.map((token, j) => (
                        <span key={j} style={{ color: tokenColor[token.c] }}>
                          {token.t}
                        </span>
                      ))}
                    </span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: 16,
                    background: "var(--accent-1)",
                    marginLeft: 32,
                    marginTop: 4,
                    borderRadius: 1,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
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
