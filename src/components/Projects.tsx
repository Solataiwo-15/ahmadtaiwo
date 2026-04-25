"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { data } from "@/lib/data";

const projectImages: Record<number, string> = {
  1: "/projects/edible-mart.png",
  2: "/projects/maglo.png",
  3: "/projects/portfolio.png",
  4: "/projects/todo-board.png",
  5: "/projects/qr-generator.png",
};

function ProjectCard({
  project,
  featured = false,
  delay = 0,
}: {
  project: (typeof data.projects)[0];
  featured?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        cursor: "pointer",
      }}
      whileHover="hover"
    >
      {/* Screenshot area */}
      <div
        className="project-image-wrap"
        style={{
          position: "relative",
          overflow: "hidden",
          height: featured ? 320 : 220,
          flexShrink: 0,
          background: "var(--bg-secondary)",
        }}
      >
        <img
          src={projectImages[project.id]}
          alt={project.name}
          className="project-img"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        {/* Hover overlay */}
        <motion.div
          variants={{
            hover: { opacity: 1 },
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            backdropFilter: "blur(4px)",
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 100,
              background: "var(--accent-1)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
          >
            <Code2 size={13} />
            Code
          </a>
        </motion.div>

        {/* Featured badge */}
        {featured && (
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              padding: "4px 12px",
              borderRadius: 100,
              background: "var(--glow-mint)",
              color: "var(--accent-2)",
              border: "1px solid var(--accent-2)",
              backdropFilter: "blur(8px)",
            }}
          >
            Featured Project
          </div>
        )}

        {/* Emoji badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.emoji}
        </div>
      </div>

      {/* Bottom slide-up info */}
      <div
        style={{
          padding: featured ? "24px 28px" : "20px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: featured ? 22 : 18,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontSize: 12,
                color: "var(--accent-2)",
                fontWeight: 500,
              }}
            >
              {project.tagline}
            </p>
          </div>
          <motion.div
            variants={{ hover: { x: 3, y: -3 } }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight
              size={18}
              style={{ color: "var(--text-tertiary)", flexShrink: 0 }}
            />
          </motion.div>
        </div>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: 16,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: featured ? 4 : 3,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.slice(0, featured ? 99 : 4).map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                borderRadius: 100,
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                border: "1px solid var(--border)",
                color: "var(--text-tertiary)",
                background: "var(--bg-secondary)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "60px 24px" }}>
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
          03 / Projects
        </motion.span>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: 16,
            marginBottom: 48,
          }}
        >
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
              margin: 0,
            }}
          >
            Things I&apos;ve{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built & shipped.
            </span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              color: "var(--accent-2)",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Code2 size={15} />
            View all on GitHub
            <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* Featured — full width */}
        <div style={{ marginBottom: 16 }}>
          <ProjectCard project={data.projects[0]} featured delay={0} />
        </div>

        {/* Row of 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
          className="projects-row"
        >
          <ProjectCard project={data.projects[1]} delay={0.1} />
          <ProjectCard project={data.projects[2]} delay={0.2} />
        </div>

        {/* Row of 2 */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          className="projects-row"
        >
          <ProjectCard project={data.projects[3]} delay={0.1} />
          <ProjectCard project={data.projects[4]} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
