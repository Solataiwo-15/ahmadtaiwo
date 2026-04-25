"use client";
import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getTheme() {
  return document.documentElement.classList.contains("dark");
}

function getServerTheme() {
  return false;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      suppressHydrationWarning
      style={{
        position: "relative",
        width: 48,
        height: 26,
        borderRadius: 100,
        border: `1px solid ${dark ? "var(--accent-1)" : "var(--border-strong)"}`,
        background: dark ? "var(--accent-1)" : "var(--bg-secondary)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexShrink: 0,
      }}
    >
      <motion.div
        animate={{ left: dark ? "calc(100% - 22px)" : "2px" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          position: "absolute",
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "var(--bg-card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={dark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            {dark ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
