"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";
import { data } from "@/lib/data";

export default function About() {
  return (
    <section id="about" style={{ padding: "60px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--accent-1)",
            display: "block",
            marginBottom: 16,
          }}
        >
          01 / About Me
        </motion.span>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: 32,
              }}
            >
              Design meets{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-2) 0%, var(--accent-1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                code.
              </span>
            </motion.h2>

            {data.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: 20,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 32,
              }}
            >
              {[
                { icon: MapPin, text: "Lagos, Nigeria" },
                { icon: Mail, text: data.email },
                { icon: Briefcase, text: "Open to Remote" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 100,
                    fontSize: 13,
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon
                    size={13}
                    style={{ color: "var(--accent-2)", flexShrink: 0 }}
                  />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: 24,
                padding: 40,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow blob inside card */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "var(--aurora-1)",
                  filter: "blur(50px)",
                  opacity: 0.4,
                  pointerEvents: "none",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 24,
                }}
              >
                AT
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                {data.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  marginBottom: 32,
                }}
              >
                {data.title}
              </p>

              {/* Mini stats grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  { n: "2+", l: "Years Building" },
                  { n: "5+", l: "Projects Live" },
                  { n: "React", l: "Primary Stack" },
                  { n: "100%", l: "Remote Ready" },
                ].map(({ n, l }) => (
                  <div
                    key={l}
                    style={{
                      borderRadius: 12,
                      padding: "14px 16px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--accent-1)",
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginTop: 2,
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                bottom: -16,
                right: -16,
                padding: "10px 16px",
                borderRadius: 12,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-tertiary)",
                  marginBottom: 2,
                }}
              >
                Currently building with
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent-2)",
                }}
              >
                Next.js + TypeScript ⚡
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
