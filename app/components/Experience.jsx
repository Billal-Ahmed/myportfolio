"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { experience, education } from "@/app/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("experience.label")}</span>
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="exp-edu-grid">
          {/* Work Experience */}
          <div>
            <h3 className="exp-edu-section-title">
              <FaBriefcase /> Work Experience
            </h3>
            <div className="timeline">
              {experience.map((item, idx) => (
                <motion.div
                  className="timeline-item"
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-period">{item.period}</div>
                    <h4 className="timeline-title">{item.role}</h4>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="exp-edu-section-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="timeline">
              {education.map((item, idx) => (
                <motion.div
                  className="timeline-item"
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-period">{item.period}</div>
                    <h4 className="timeline-title">{item.degree}</h4>
                    <div className="timeline-company">{item.institution}</div>
                    <span className="timeline-detail">{item.details}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
