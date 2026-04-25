"use client";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { data } from "@/lib/data";

export default function SocialDock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="social-dock"
      style={{
        position: "fixed",
        left: 24,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      {/* Icons */}
      {[
        {
          href: data.github,
          label: "GitHub",
          icon: Code2,
          svg: null,
        },
        {
          href: data.linkedin,
          label: "LinkedIn",
          icon: null,
          svg: (
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
          ),
        },
        {
          href: `mailto:${data.email}`,
          label: "Email",
          icon: Mail,
          svg: null,
        },
      ].map(({ href, label, icon: Icon, svg }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-tertiary)",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent-1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-tertiary)";
          }}
        >
          {svg ?? (Icon ? <Icon size={18} /> : null)}
        </motion.a>
      ))}

      {/* Bottom line */}
      <div
        style={{
          width: 1,
          height: 80,
          background:
            "linear-gradient(to bottom, var(--border-strong), transparent)",
        }}
      />
    </motion.div>
  );
}
