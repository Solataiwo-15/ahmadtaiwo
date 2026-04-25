"use client";
import { motion } from "framer-motion";
import { data } from "@/lib/data";

const categoryAccent: Record<string, string> = {
  Languages: "var(--accent-3)",
  "Frameworks & Libraries": "var(--accent-1)",
  "Styling & UI": "var(--accent-2)",
  Tools: "var(--accent-4)",
  "Other Skills": "var(--accent-1)",
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "60px 24px",
      }}
    >
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
          02 / Skills & Stack
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
            marginBottom: 64,
          }}
        >
          Tools I{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            work with.
          </span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="skills-grid"
        >
          {Object.entries(data.skills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              style={{
                borderRadius: 20,
                padding: 28,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 32,
                    borderRadius: 4,
                    background: categoryAccent[category],
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.05 + i * 0.04,
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "5px 12px",
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 500,
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      background: "var(--bg-secondary)",
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    whileHover={{
                      borderColor: categoryAccent[category],
                      color: categoryAccent[category],
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
