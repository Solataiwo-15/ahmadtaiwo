"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: "var(--text-secondary)",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-secondary)";
      }}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "16px 24px",
      }}
    >
      <nav
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          borderRadius: 16,
          padding: "10px 24px",
          transition: "all 0.3s ease",
          background: scrolled ? "var(--bg-card)" : "transparent",
          border: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        {/* Col 1 — Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          AT<span style={{ color: "var(--accent-1)" }}>.</span>
        </a>

        {/* Col 2 — Center links (desktop only) */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {isDesktop && (
            <>
              <NavLink href="#about" label="About" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#contact" label="Contact" />
            </>
          )}
        </div>

        {/* Col 3 — Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "flex-end",
          }}
        >
          {/* {isDesktop && (
            <a
              href="mailto:ahmadtaiwo15@gmail.com"
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                background: "var(--accent-1)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Hire Me
            </a>
          )} */}
          <ThemeToggle />
          {!isDesktop && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 4,
              }}
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--text-primary)",
                  borderRadius: 2,
                }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--text-primary)",
                  borderRadius: 2,
                }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--text-primary)",
                  borderRadius: 2,
                }}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          maxWidth: 1152,
          margin: "8px auto 0",
        }}
      >
        <div
          style={{
            borderRadius: 16,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "10px 8px",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:ahmadtaiwo15@gmail.com"
            style={{
              marginTop: 8,
              padding: "12px 20px",
              borderRadius: 100,
              background: "var(--accent-1)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
