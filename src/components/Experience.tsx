"use client";
import { motion } from "framer-motion";
import { data } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "60px 24px" }}>
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
          04 / Experience
        </motion.span>

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
            marginBottom: 80,
          }}
        >
          Where I&apos;ve{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            worked.
          </span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="experience-grid"
        >
          {/* Left — timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              className="timeline-line"
              style={{
                position: "absolute",
                left: 19,
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border-strong)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {data.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{ display: "flex", gap: 24 }}
                >
                  {/* Dot */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "var(--bg-card)",
                        border: "2px solid var(--accent-1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 0 4px var(--glow-violet)",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <Briefcase
                        size={16}
                        style={{ color: "var(--accent-1)" }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      padding: 24,
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-strong)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap" as const,
                        gap: 8,
                        marginBottom: 12,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 18,
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: 2,
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "var(--accent-2)",
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          padding: "4px 10px",
                          borderRadius: 100,
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-tertiary)",
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--text-tertiary)",
                        marginBottom: 16,
                      }}
                    >
                      📍 {exp.location}
                    </p>

                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            listStyle: "none",
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "var(--accent-1)",
                              flexShrink: 0,
                              marginTop: 6,
                            }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — education + fun facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderRadius: 20,
                padding: 32,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "var(--aurora-3)",
                  filter: "blur(40px)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--glow-mint)",
                  border: "1px solid var(--accent-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <GraduationCap size={20} style={{ color: "var(--accent-2)" }} />
              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                  color: "var(--accent-2)",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Education
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                {data.education.degree}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  marginBottom: 4,
                }}
              >
                {data.education.school}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-tertiary)",
                }}
              >
                {data.education.period}
              </p>
            </motion.div>

            {/* What I bring card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                borderRadius: 20,
                padding: 32,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 20,
                }}
              >
                What I bring to a team
              </h3>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  { emoji: "🎯", text: "Clean, readable, maintainable code" },
                  {
                    emoji: "🎨",
                    text: "Deep care for UI quality and visual detail",
                  },
                  {
                    emoji: "✨",
                    text: "Crafting polished, beautiful interfaces",
                  },
                  { emoji: "🤝", text: "Strong cross-team collaboration" },
                  { emoji: "⚡", text: "Performance-first mindset" },
                  { emoji: "📱", text: "Mobile-first responsive UIs" },
                  { emoji: "🔄", text: "Agile & sprint-based workflow" },
                ].map(({ emoji, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{emoji}</span>
                    <span
                      style={{ fontSize: 13, color: "var(--text-secondary)" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
