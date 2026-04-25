import { data } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "var(--text-tertiary)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Designed & built by{" "}
        <span style={{ color: "var(--accent-1)", fontWeight: 600 }}>
          {data.name}
        </span>{" "}
        · {new Date().getFullYear()}
      </p>
      <p style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 6 }}>
        Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
      </p>
    </footer>
  );
}
