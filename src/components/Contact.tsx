"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { data } from "@/lib/data";

// ── Scramble text hook ──
function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+=-[]{}|;:,.<>?abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    if (!trigger) return;
    let iter = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iter) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      iter += 0.5;
      if (iter >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [trigger, text]);

  return display;
}

// ── Magnetic button ──
function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        x: springX,
        y: springY,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "18px 40px",
        borderRadius: 100,
        background: "var(--accent-1)",
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
        textDecoration: "none",
        fontFamily: "var(--font-display)",
        cursor: "pointer",
        boxShadow: "0 8px 40px var(--glow-violet)",
        whiteSpace: "nowrap" as const,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

function LinkedInIcon({
  size = 20,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ── Flip card ──
function FlipCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
  isFlipped,
  onFlip,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  delay: number;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const copy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={onFlip}
      style={{
        perspective: 1000,
        cursor: "pointer",
        height: 140,
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: 16,
            padding: 24,
            background: "var(--bg-card)",
            border: `1px solid ${isFlipped ? "var(--accent-1)" : "var(--border)"}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            transition: "border-color 0.3s ease",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--glow-violet)",
              border: "1px solid var(--accent-1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={16} style={{ color: "var(--accent-1)" }} />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontSize: 10,
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            click to reveal →
          </span>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 16,
            padding: 20,
            background: "var(--bg-card)",
            border: "1px solid var(--accent-1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              textAlign: "center",
              wordBreak: "break-all",
              lineHeight: 1.5,
            }}
          >
            {value}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={copy}
              style={{
                padding: "6px 14px",
                borderRadius: 100,
                background: copied ? "var(--accent-2)" : "var(--bg-secondary)",
                border: "1px solid var(--border)",
                color: copied ? "#fff" : "var(--text-secondary)",
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
            {href && (
              <a
                href={href}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "var(--accent-1)",
                  color: "#fff",
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                }}
              >
                Open
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [triggered, setTriggered] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const heading1 = useScramble("Got a project", triggered);
  const heading2 = useScramble("in mind?", triggered);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      delay: 0.1,
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      delay: 0.2,
    },
    {
      icon: Code2,
      label: "GitHub",
      value: "Solataiwo-15",
      href: data.github,
      delay: 0.3,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "ahmad-taiwo",
      href: data.linkedin,
      delay: 0.4,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "60px 24px 80px" }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            textTransform: "uppercase" as const,
            letterSpacing: "0.2em",
            color: "var(--accent-1)",
            display: "block",
            marginBottom: 16,
          }}
        >
          05 / Contact
        </motion.span>

        {/* Big scramble heading */}
        <div style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {heading1}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              background:
                "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
            }}
          >
            {heading2}
          </h2>
        </div>

        {/* Two column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            marginBottom: 80,
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: 48,
                maxWidth: 420,
              }}
            >
              I&apos;m actively looking for remote opportunities. Whether you
              have a project, want to collaborate, or just want to say hi —
              I&apos;d love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MagneticButton href={`mailto:${data.email}`}>
                <Mail size={18} />
                Send me an email
                <ArrowUpRight size={16} />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 32,
                color: "var(--text-tertiary)",
                fontSize: 13,
                fontFamily: "var(--font-mono)",
              }}
            >
              <MapPin size={14} style={{ color: "var(--accent-3)" }} />
              Lagos, Nigeria · Available for remote work worldwide
            </motion.div>
          </div>

          {/* Right — flip cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {cards.map(({ icon, label, value, href, delay }) => (
              <FlipCard
                key={label}
                icon={icon}
                label={label}
                value={value}
                href={href}
                delay={delay}
                isFlipped={activeCard === label}
                onFlip={() =>
                  setActiveCard(activeCard === label ? null : label)
                }
              />
            ))}
          </div>
        </div>

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: 20,
            padding: "32px 40px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              left: -40,
              top: "50%",
              transform: "translateY(-50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "var(--aurora-2)",
              filter: "blur(60px)",
              opacity: 0.3,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--accent-2)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent-2)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                }}
              >
                Available for work
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Open to remote roles, collaboration & freelance projects
            </p>
          </div>

          <a
            href={`mailto:${data.email}`}
            style={{
              position: "relative",
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 100,
              background: "var(--accent-2)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap" as const,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
