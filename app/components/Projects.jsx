"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { projects } from "@/app/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("projects.label")}</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-subtitle">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {project.featured && (
                <span className="featured-badge">Featured</span>
              )}

              {/* Video / Placeholder area */}
              <div className="project-video">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="project-video-placeholder">
                    <FaPlay />
                    <span>Demo Video Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
